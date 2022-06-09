// ---------- CONFIG ----------

// Whether or not to unify items in inventory
global["INVENTORY_UNIFY"] = true
// Whether or not to unify items in world
global["ITEM_UNIFY"] = true
// Whether or not to unify recipes
global["RECIPE_UNIFY"] = true
// For configuring JEI hides, go to the client side script

// Mod priorities
global["unifypriorities"] = [
    "ae2",
    "bewitchment",
    "create",
    "createplus",
    "croptopia",
    "dwarfcoal",
    "indrev",
    "modern_industrialization",
    "techreborn"
]
// Items to exclude (will not be unified)
global["unifyexclude"] = new Set([
    // "people"
])

// Add oredictionary tags here to unify (or use javascript to generate it!). These are also higher priority than tagGen.
// Non-existant tags will be ignored.
let tags = new Set([
    "c:{}_blocks",
    "c:{}_dusts",
    "c:{}_ingots",
    "c:{}_nuggets",
    "c:{}_plates",
    "c:raw_{}_ores",
    "c:raw_{}_blocks"
])

// A list of lists of items to unify. Each list will be turned into a tag and added to the list of tags to unify.
// Accepts Regex. You can preface an id with # to make it add all the items from that tag.
let customtags = [
    "aluminum",
    "bauxite",
    "bronze",
    "chrome",
    "coal",
    "copper",
    "diamond",
    "electrum",
    "emerald",
    "gold",
    "invar",
    "iridium",
    "iron",
    "lapis",
    "lead",
    "manganese",
    "nickel",
    "platinum",
    "quartz",
    "ruby",
    "silicon",
    "silver",
    "steel",
    "sulfur",
    "tin",
    "titanium",
    "tungsten",
    "salt",
    "carbon",
    "brass",
    "zinc"
]

let tagUnions = [
]

// Split tags apart to create new ones. If a tag does not exist, it will not be merged into or used.
let tagSplits = [
    // Makes it so that deepslate, netherrack, and stone ores are unified separately from normal ores.
    [
    ]
]

if (Platform.isFabric()) {
    // Easier way to add multiple tags on fabric
    let tagGen = [
        "advanced_alloy=ingots,plates",
        "almandine,andesite,andradite,ashes,calcite,charcoal,clay,dark_ashes,diorite,"
        + "ender_eye,ender_pearl,endstone,flint,granite,grossular,magnesium,manganese,"
        + "marble,netherrack,olivine,phosphorous,pyrope,saltpeter,saw,spessartine,sulfur,"
        + "uvarovite"
        + "=dusts,small_dusts",
        "aluminum,brass,bronze,chrome,copper,electrum,invar,iridium,lead,nickel,platinum,"
        + "silver,steel,tin,titanium,tungsten,zinc"
        + "=blocks,dusts,ingots,nuggets,ores,plates,small_dusts",
        "basalt=,dusts,small_dusts",
        "bauxite,cinnabar,galena,pyrite,sodalite,sphalerite=dusts,ores,small_dusts",
        "carbon,magnalium,silicon=plates",
        "coal,gold,iron,redstone=dusts,ores,plates,small_dusts",
        "diamond,emerald=dusts,nuggets,ores,plates,small_dusts",
        "glowstone=small_dusts",
        "iridium_alloy=ingots,plates",
        "lapis=ores,plates",
        "lazurite,obsidian,quartz=dusts,plates,small_dusts",
        "mixed_metal=ingots",
        "peridot,red_garnet,ruby,sapphire,yellow_garnet=blocks,dusts,gems,ores,plates,small_dusts",
        "refined_iron,tungstensteel=blocks,ingots,nuggets,plates",
        "rubies=",
        "sheldonite=ores",
        "raw_copper,raw_gold,raw_iridium,raw_iron,raw_lead,raw_silver,raw_tin,raw_tungsten"
        + "=blocks,ores"
    ]
    for (let line of tagGen) {
        let data = line.split("=")
        let ms = (data[0]).split(",")
        let ts = (data[1]).split(",")

        for (let material of ms) {
            for (let type of ts) {
                tags.add("c:" + material + (type.length > 0 ? "_" + type : ""))
            }
        }
    }
}


function esplit(str) {
    let data = str.split("=")
    if (data.length == 1) {
        for (let v of data[0].split(",")) yield v
    } else if (data.length == 2) {
        for (let l of data[0].split(",")) {
            for (let r of data[1].split(",")) {
                yield l+r
            }
        }
    } else {
        throw Error("too many equal signs")
    }
}

function tryTag(tag) {
    try {
        return Ingredient.of("#" + tag)
    } catch (err) {
        return null
    }
}

onEvent('tags.items', event => {
    // Create custom tags
    let root = "unifytags:tag"
    let i = 0
    for (let ctag of customtags) {
        let tag = event.get(root + i)

        // Add items into tag
        for (let item of ctag) {
            try {
                tag.add(item)
            } catch (err) { }
        }

        // Add new tag into tags to unify
        tags.add(root + i)
        ++i
    }

    // Union tags
    for (let union of tagUnions) {
        for (let sum of esplit(union[0])) {
            let tag = event.get(sum)
            for (let item of union.slice(1)) {
                try {
                    tag.add(item)
                } catch (err) { }
            }
        }
    }

    // Create tags from intersections
    for (let split of tagSplits) {
        for (let sum of esplit(split[0])) {
            let sumtag = tryTag(sum)
            if (!sumtag) continue
            
            let sumset = new Set()
            for (let v of event.get(sum).getObjectIds()) {
                sumset.add(String(v))
            }

            // Perform intersection
            for (let intersectors of split.slice(1)) {
                for (let intersector of esplit(intersectors)) {
                    let intertag = tryTag(intersector)
                    if (!intertag) continue

                    // Ok, actually do the test to perform the intersection
                    let tag = event.get(root + i)
                    for (let item of event.get(intersector).getObjectIds()) {
                        if (sumset.has(String(item))) tag.add(String(item))
                    }

                    // Add tag to list of tags to unify
                    tags.add(root + i)
                    ++i
                }
            }

            // Remove original tag from tags to unify
            tags.delete(sum)
        }
    }
})

// Replace input and output of recipes (and iterate over tags!)
onEvent("recipes", event => {
    // Iterate over tags to generate tagitems and remove bad tags (they should be loaded)
    let truetags = []
    let tagitems = new Map()
    tagLoop:
    for (let tag of tags) {
        let ingr = tryTag(tag)
        if (ingr) {
            let stacks = ingr.getStacks().toArray()
            // Only load tags with 2 or more items
            if (stacks.length > 1) {
                truetags.push(tag)

                for (let mod of global["unifypriorities"]) {
                    for (let stack of stacks) {
                        if (stack.getMod() == mod) {
                            if (!global["unifyexclude"].has(String(stack.getId()))) tagitems[tag] = stack.getId()
                            continue tagLoop
                        }
                    }
                }

                tagitems[tag] = stacks[0].getId()
            }
        }
    }

    // Globalize tags
    global["unifytags"] = truetags
    global["tagitems"] = tagitems

    // Unify the rest
    if (global["RECIPE_UNIFY"]) {
        for (let tag of global["unifytags"]) {
            let ingr = tryTag(tag)
            if (ingr) {
                let stacks = ingr.getStacks().toArray()
                let oItem = global["tagitems"][tag]
                for (let tItem of stacks) {
                    let itemId = String(tItem.getId())
                    if (global["unifyexclude"].has(itemId)) continue

                    event.replaceInput({}, itemId, "#" + tag)
                    event.replaceOutput({}, itemId, oItem)
                }
            }
        }
    }
})

invnames = new Set([
    "net.minecraft.inventory.container.PlayerContainer",
    "net.minecraft.class_1723",
    "net.minecraft.world.inventory.InventoryMenu"
])

// Handle inventory change (to check for unificaiton)
// Unfortunately it gets called twice due to setting the inventory.
if (global["INVENTORY_UNIFY"]) {
    onEvent("player.inventory.changed", event => {
        let ename = String(event.getEntity().getOpenInventory().getClass().getName())
        if (invnames.has(ename)) {
            // Get held item
            let heldItem = event.getItem()
            let itemId = String(heldItem.getId())

            // Check if item is excluded
            if (global["unifyexclude"].has(itemId)) return

            // Check for every tag in the list
            for (let tag of global["unifytags"]) {
                let ingr = tryTag(tag)
                if (ingr && ingr.test(heldItem)) {
                    // If item is in tag, determine if it needs to be changed
                    let tItem = global["tagitems"][tag]
                    if (tItem != itemId) {
                        // Fix slot number
                        let slot = event.getSlot()
                        if (slot <= 5) slot += 36
                        else if (slot == 45) slot = 40
                        else if (slot >= 36) slot -= 36
                        // Update item
                        event.getEntity().inventory.set(slot, Item.of(tItem, heldItem.getCount()))
                    }
                    break
                }
            }
        }
    })
}

// Items on ground
if (global["ITEM_UNIFY"]) {
    onEvent("entity.spawned", event => {
        let entity = event.getEntity()
        if (entity.getType() == "minecraft:item") {
            let gItem = entity.getItem()
            if (gItem) {
                let itemId = String(gItem.getId())
                // Check if item is excluded
                if (global["unifyexclude"].has(itemId)) return

                // Check for every tag in the list
                for (let tag of global["unifytags"]) {
                    let ingr = tryTag(tag)
                    if (ingr && ingr.test(gItem)) {
                        // If item is in tag, determine if it needs to be changed
                        let tItem = global["tagitems"][tag]
                        if (tItem != itemId) {
                            entity.setItem(Item.of(tItem, gItem.getCount()))
                        }
                        break
                    }
                }
            }
        }
    })
}
