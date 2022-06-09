//╔════════════════════════════════════════╗
//║         Copyright © 2022 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen('item.tags', function(event) {

  // Metals
  event.get('c:iron_ingots').remove('betterend:thallasium_ingot')
  event.get('minecraft:beacon_payment_items').remove('betterend:thallasium_ingot')
  event.get('c:iron_ingots').add('pigsteel:pigsteel_ingot')
  event.get('c:iron_blocks').add('pigsteel:pigsteel_block')
  event.get('c:iron_nuggets').add('pigsteel:pigsteel_nugget')

  // Dank
  event.get("dankstorage:blacklisted_storage").remove("minecraft:stone");
  
  // Gears
  event.get('c:iron_gears').add('kubejs:pigsteel_gear');

  // Chests
  var chests = [
    "oak",
    "spruce",
    "birch",
    "jungle",
    "acacia",
    "dark_oak",
    "crimson",
    "warped",
  ];

  // BetterEnd
  var end = [
    "mossy_glowshroom",
    "pythadendron",
    "end_lotus",
    "lacugrove",
    "lucernia",
    "dragon_tree",
    "tenanea",
    "helix_tree",
    "umbrella_tree",
    "jellyshroom"
  ];

  chests.forEach(function(item, index) {
    event.get("c:wooden_chests").add("charm:" + item + "_chest")
    event.get("c:wooden_chests").add("charm:" + item + "_trapped_chest")
  });

  end.forEach(function(item, index) {
    event.get("c:wooden_chests").add("betterend:" + item + "_chest")
    event.get("charm:barrels").add("betterend:" + item + "_barrel")
  });


  // Crafting Tables
  var crafting = [
    'byg:nightshade_crafting_table',
    'byg:bulbis_crafting_table',
    'byg:ether_crafting_table',
  ];

  crafting.forEach(function(item, index) {
    event.get("c:workbench").add(item)
  });
});
