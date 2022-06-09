
settings.logAddedRecipes = false
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

//╔════════════════════════════════════════╗
//║        Copyright © 2021 CSS            ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {

  //╔════════════════════════════════════════╗
  //║            VANILLA/MISC                ║ 
  //╚════════════════════════════════════════╝

  // Barrels
  event.shaped(item.of("charm:spruce_barrel", 1), [
    ["#minecraft:planks", "#minecraft:slabs", "#minecraft:planks"],
    ["#minecraft:planks", null, "#minecraft:planks"],
    ["#minecraft:planks", "#minecraft:slabs", "#minecraft:planks"],
  ]);

  // Chests
  event.shaped(item.of("minecraft:chest", 4), [
    ["#minecraft:logs_that_burn", "#minecraft:logs_that_burn", "#minecraft:logs_that_burn"],
    ["#minecraft:logs_that_burn", null, "#minecraft:logs_that_burn"],
    ["#minecraft:logs_that_burn", "#minecraft:logs_that_burn", "#minecraft:logs_that_burn"],
  ]);

  // Sticks
  event.shaped(item.of("minecraft:stick", 16), [
    ["#minecraft:logs_that_burn", null, null],
    ["#minecraft:logs_that_burn", null, null],
  ]);

  // Torches
  event.shaped(item.of("minecraft:torch", 32), [
    ["#c:coal_blocks", null, null],
    ["#minecraft:logs_that_burn", null, null],
  ]);

  // Arrow
  event.shaped(item.of("minecraft:arrow"), [
    ["#c:iron_nuggets"],
    ["betterend:leather_wrapped_stick"]
  ]);

  // Totem
  event.remove({
    id: "minecraft:totem_of_undying"
  });
  event.shaped(item.of("minecraft:totem_of_undying"), [
    ["minecraft:emerald", "minecraft:gold_ingot", "minecraft:emerald"],
    ["minecraft:gold_ingot", "minecraft:end_crystal", "minecraft:gold_ingot"],
    ["null", "minecraft:gold_ingot", "null"],
  ]);

  event.remove({
    id: "minecraft:totem_of_undying"
  });
  event.shaped(item.of("minecraft:totem_of_undying", 3), [
    ["minecraft:netherite_ingot", "minecraft:diamond", "minecraft:netherite_ingot"],
    ["minecraft:diamond", "minecraft:end_crystal", "minecraft:diamond"],
    ["null", "minecraft:diamond", "null"],
  ]);

  // Bell
  event.remove({
    id: "minecraft:bell"
  });
  event.shaped(item.of("minecraft:bell"), [
    ["#minecraft:planks", "#minecraft:planks", "#minecraft:planks"],
    ["minecraft:stick", "minecraft:lead", "minecraft:stick"],
    ["minecraft:stick", "minecraft:gold_block", "minecraft:stick"],
  ]);

  event.remove({
    id: "minecraft:bell"
  });
  event.shaped(item.of("minecraft:bell"), [
    ["#minecraft:planks", "#minecraft:planks", "#minecraft:planks"],
    ["betterend:leather_wrapped_stick", "minecraft:lead", "betterend:leather_wrapped_stick"],
    ["betterend:leather_wrapped_stick", "minecraft:gold_block", "betterend:leather_wrapped_stick"],
  ]);

  event.remove({
    output: "minecraft:firework_rocket"
  });
  event.shaped(item.of("minecraft:firework_rocket", 9), [
    ["minecraft:gunpowder", "minecraft:paper", "null"],
    ["minecraft:gunpowder", "minecraft:paper", "null"],
    ["minecraft:gunpowder", "minecraft:paper", "null"],
  ]);

  event.remove({
    output: "minecraft:firework_rocket"
  });
  event.shaped(item.of("minecraft:firework_rocket", 6), [
    ["minecraft:gunpowder", "minecraft:paper", "null"],
    ["minecraft:gunpowder", "minecraft:paper", "null"],
  ]);

  // Firework Rockets
  event.remove({
    output: "minecraft:firework_rocket"
  });
  event.shaped(item.of("minecraft:firework_rocket", 3), [
    ["minecraft:gunpowder", "minecraft:paper", "null"],
  ]);

  // Cobweb
  event.shaped(item.of("minecraft:cobweb"), [
    ["minecraft:string", "minecraft:string", "minecraft:string"],
    ["minecraft:string", "minecraft:string", "minecraft:string"],
    ["minecraft:string", "minecraft:string", "minecraft:string"],
  ]);

  // Buckets
  event.shaped(item.of("minecraft:bucket", 9), [
    ["null", "null", "null"],
    ["#c:iron_blocks", "null", "#c:iron_blocks"],
    ["null", "#c:iron_blocks", "null"],
  ]);

  // Slabs to Blocks
  event.shaped(item.of("#c:planks_that_burn"), [
    ["#minecraft:wooden_slabs", "null", "null"],
    ["#minecraft:wooden_slabs", "null", "null"],
    ["null", "null", "null"],
  ]);

  // Flint
  event.remove({
    output: "minecraft:flint"
  });
  event.shaped(item.of("minecraft:flint"), [
    ["minecraft:gravel", "minecraft:gravel", "null"],
    ["minecraft:gravel", "null", "null"],
    ["null", "null", "null"],
  ]);

  // Prismarine Block
  event.remove({
    output: "minecraft:prismarine"
  });
  event.shaped(item.of("minecraft:prismarine", 4), [
    ["minecraft:prismarine_crystals", "minecraft:prismarine_crystals", "minecraft:prismarine_crystals"],
    ["minecraft:prismarine_crystals", "minecraft:prismarine_crystals", "minecraft:prismarine_crystals"],
    ["minecraft:prismarine_crystals", "minecraft:prismarine_crystals", "minecraft:prismarine_crystals"],
  ]);

  // Enchanted Golden Apple
  event.remove({
    output: "minecraft:enchanted_golden_apple"
  });
  event.shaped(item.of("minecraft:enchanted_golden_apple"), [
    ["minecraft:gold_block", "minecraft:gold_block", "minecraft:gold_block"],
    ["minecraft:gold_block", "minecraft:apple", "minecraft:gold_block"],
    ["minecraft:gold_block", "minecraft:gold_block", "minecraft:gold_block"],
  ]);

  // Bone Block
  event.shaped(item.of("minecraft:bone", 64), [
    ["minecraft:bone_block", "minecraft:bone_block", "minecraft:bone_block"],
    ["minecraft:bone_block", null, "minecraft:bone_block"],
    ["minecraft:bone_block", "minecraft:bone_block", "minecraft:bone_block"],
  ]);
  
  // Oak Sign
  event.replaceInput(
    { id: "minecraft:oak_sign" },
    "minecraft:oak_planks",
    "#minecraft:planks"
  );

  //╔════════════════════════════════════════╗
  //║               SPAWNER                  ║
  //╚════════════════════════════════════════╝

  event.remove({
    output: "minecraft:spawner"
  });
  event.shaped(item.of("minecraft:spawner", 2), [
    ["minecraft:netherite_ingot", "minecraft:netherite_ingot", "minecraft:netherite_ingot"],
    ["minecraft:netherite_ingot", null, "minecraft:netherite_ingot"],
    ["minecraft:netherite_ingot", "minecraft:netherite_ingot", "minecraft:netherite_ingot"],
  ]);

  event.remove({
    output: "minecraft:spawner"
  });
  event.shaped(item.of("minecraft:spawner", 8), [
    ["minecraft:netherite_block", "minecraft:netherite_block", "minecraft:netherite_block"],
    ["minecraft:netherite_block", null, "minecraft:netherite_block"],
    ["minecraft:netherite_block", "minecraft:netherite_block", "minecraft:netherite_block"],
  ]);

  //╔════════════════════════════════════════╗
  //║          SPAWN EGGS RECIPES            ║
  //╚════════════════════════════════════════╝

  // ash_scuttler_spawn_egg

  event.remove({
    output: "desolation:ash_scuttler_spawn_egg"
  });
  event.shaped(item.of("desolation:ash_scuttler_spawn_egg"), [
    ["desolation:ash_pile", "bewitchment:wood_ash", "desolation:ash_pile"],
    ["croptopia:squash", "mysticalagriculture:zombie_essence", "croptopia:squash"],
    ["desolation:ash_pile", "bewitchment:wood_ash", "desolation:ash_pile"],
  ]);

  // ash_scuttler_spawn_egg

  event.remove({
    output: "desolation:ash_scuttler_spawn_egg"
  });
  event.shaped(item.of("desolation:ash_scuttler_spawn_egg"), [
    ["desolation:ash_pile", "bewitchment:wood_ash", "desolation:ash_pile"],
    ["desolation:ash_pile", "desolation:primed_ash", "desolation:ash_pile"],
    ["desolation:ash_pile", "bewitchment:wood_ash", "desolation:ash_pile"],
  ]);

  // zombie_spawn_egg

  event.remove({
    output: "minecraft:zombie_spawn_egg"
  });
  event.shaped(item.of("minecraft:zombie_spawn_egg"), [
    ["minecraft:rotten_flesh", "minecraft:zombie_head", "minecraft:rotten_flesh"],
    ["untitledduckmod:duck_egg", "mysticalagriculture:zombie_essence", "untitledduckmod:duck_egg"],
    ["winged:demonic_flesh", "mysticalagriculture:zombie_seeds", "winged:demonic_flesh"],
  ]);

  // cow_spawn_egg

  event.remove({
    output: "minecraft:cow_spawn_egg"
  });
  event.shaped(item.of("minecraft:cow_spawn_egg"), [
    ["minecraft:brown_dye", "minecraft:light_gray_dye", "minecraft:brown_dye"],
    ["untitledduckmod:duck_egg", "biomemakeover:cowboy_hat", "untitledduckmod:duck_egg"],
    ["minecraft:white_dye", "minecraft:white_wool", "minecraft:white_dye"],
  ]);

  event.remove({
    output: "minecraft:cow_spawn_egg"
  });
  event.shaped(item.of("minecraft:cow_spawn_egg"), [
    ["mysticalagriculture:cow_seeds", "untitledduckmod:goose_egg", "mysticalagriculture:cow_seeds"],
    ["minecraft:brown_dye", "minecraft:milk_bucket", "minecraft:brown_dye"],
    ["minecraft:white_dye", "minecraft:white_wool", "minecraft:white_dye"],
  ]);

  // chicken_spawn_egg

  event.remove({
    output: "minecraft:chicken_spawn_egg"
  });
  event.shaped(item.of("minecraft:chicken_spawn_egg"), [
    ["mysticalagriculture:chicken_seeds", "untitledduckmod:duck_egg", "mysticalagriculture:chicken_seeds"],
    ["minecraft:chicken", "minecraft:feather", "minecraft:chicken"],
    ["winged:black_feather", "minecraft:egg", "winged:black_feather"],
  ]);

  event.remove({
    output: "minecraft:chicken_spawn_egg"
  });
  event.shaped(item.of("minecraft:chicken_spawn_egg"), [
    ["winged:black_feather", "minecraft:egg", "winged:black_feather"],
    ["mysticalagriculture:chicken_essence", "cow_spawn_egg", "mysticalagriculture:chicken_essence"],
    ["untitledduckmod:duck_egg", "minecraft:chicken", "untitledduckmod:duck_egg"],
  ]);

  // creeper_spawn_egg

  event.remove({
    output: "minecraft:creeper_spawn_egg"
  });
  event.shaped(item.of("minecraft:creeper_spawn_egg"), [
    ["minecraft:tnt", "minecraft:tnt", "minecraft:tnt"],
    ["minecraft:tnt", "minecraft:gunpowder", "minecraft:tnt"],
    ["minecraft:tnt", "minecraft:tnt", "minecraft:tnt"],
  ]);

  event.remove({
    output: "minecraft:creeper_spawn_egg"
  });
  event.shaped(item.of("minecraft:creeper_spawn_egg"), [
    ["minecraft:tnt", "minecraft:creeper_head", "minecraft:tnt"],
    ["mysticalagriculture:creeper_essence", "minecraft:chicken_spawn_egg", "mysticalagriculture:creeper_essence"]
    ["minecraft:tnt", "artifacts:kitty_slippers", "minecraft:tnt"],
  ]);

  // endermite_spawn_egg

  event.remove({
    output: "minecraft:endermite_spawn_egg"
  });
  event.shaped(item.of("minecraft:endermite_spawn_egg"), [
    ["charm:endermite_powder", "minecraft:ender_pearl", "charm:endermite_powder"],
    ["minecraft:ender_pearl", "minecraft:gunpowder", "minecraft:ender_pearl"],
    ["minecraft:ender_pearl", "charm:endermite_powder", "minecraft:ender_pearl"],
  ]);

  event.remove({
    output: "minecraft:endermite_spawn_egg"
  });
  event.shaped(item.of("minecraft:endermite_spawn_egg"), [
    ["minecraft:ender_pearl", "minecraft:ender_pearl", "minecraft:ender_pearl"],
    ["betterend:ender_shard", "minecraft:creeper_spawn_egg", "betterend:ender_shard"],
    ["minecraft:ender_pearl", "minecraft:ender_pearl", "minecraft:ender_pearl"],
  ]);

  // witch_spawn_egg

  event.remove({
    output: "minecraft:witch_spawn_egg"
  });
  event.shaped(item.of("minecraft:witch_spawn_egg"), [
    ["minecraft:lingering_potion", "minecraft:potion", "minecraft:lingering_potion"],
    ["minecraft:potion", "biomemakeover:witch_hat", "minecraft:potion"],
    ["minecraft:lingering_potion", "minecraft:potion", "minecraft:lingering_potion"],
  ]);

  event.remove({
    output: "minecraft:witch_spawn_egg"
  });
  event.shaped(item.of("minecraft:witch_spawn_egg"), [
    ["minecraft:lingering_potion", "minecraft:potion", "minecraft:lingering_potion"],
    ["minecraft:potion", "minecraft:endermite_spawn_egg", "minecraft:potion"],
    ["minecraft:lingering_potion", "minecraft:potion", "minecraft:lingering_potion"],
  ]);

  // slime_spawn_egg

  event.remove({
    output: "minecraft:slime_spawn_egg"
  });
  event.shaped(item.of("minecraft:slime_spawn_egg"), [
    ["biomemakeover:ectoplasm", "biomemakeover:ectoplasm", "biomemakeover:ectoplasm"],
    ["biomemakeover:ectoplasm", "minecraft:slime_ball", "biomemakeover:ectoplasm"],
    ["biomemakeover:ectoplasm", "biomemakeover:ectoplasm", "biomemakeover:ectoplasm"],
  ]);

  event.remove({
    output: "minecraft:slime_spawn_egg"
  });
  event.shaped(item.of("minecraft:slime_spawn_egg"), [
    ["mysticalagriculture:slime_seeds", "biomemakeover:ectoplasm", "mysticalagriculture:slime_seeds"],
    ["biomemakeover:ectoplasm", "minecraft:witch_spawn_egg", "biomemakeover:ectoplasm"],
    ["biomemakeover:ectoplasm", "mysticalagriculture:slime_essence", "biomemakeover:ectoplasm"],
  ]);

  // skeleton_spawn_egg

  event.remove({
    output: "minecraft:skeleton_spawn_egg"
  });
  event.shaped(item.of("minecraft:skeleton_spawn_egg"), [
    ["minecraft:light_gray_dye", "minecraft:bone", "minecraft:light_gray_dye"],
    ["minecraft:bone", "mysticalagriculture:skeleton_essence", "minecraft:bone"],
    ["minecraft:light_gray_dye", "minecraft:bone", "minecraft:light_gray_dye"],
  ]);

  event.remove({
    output: "minecraft:skeleton_spawn_egg"
  });
  event.shaped(item.of("minecraft:skeleton_spawn_egg"), [
    ["minecraft:bonemeal", "minecraft:gray_concrete", "minecraft:bonemeal"],
    ["minecraft:bone", "minecraft:skeleton_skull", "minecraft:bone"],
    ["minecraft:bone", "minecraft:bone_block", "minecraft:bone"],
  ]);

  // ghast_spawn_egg

  event.remove({
    output: "minecraft:ghast_spawn_egg"
  });
  event.shaped(item.of("minecraft:ghast_spawn_egg"), [
    ["minecraft:fire_charge", "minecraft:ghast_tear", "minecraft:fire_charge"],
    ["minecraft:ghast_tear", "minecraft:nether_star", "minecraft:ghast_tear"],
    ["minecraft:fire_charge", "minecraft:ghast_tear", "minecraft:fire_charge"],
  ]);

  event.remove({
    output: "minecraft:ghast_spawn_egg"
  });
  event.shaped(item.of("minecraft:ghast_spawn_egg"), [
    ["minecraft:fire_charge", "minecraft:ghast_tear", "minecraft:fire_charge"],
    ["minecraft:ghast_tear", "minecraft:skeleton_spawn_egg", "minecraft:ghast_tear"],
    ["minecraft:fire_charge", "minecraft:ghast_tear", "minecraft:fire_charge"],
  ]);

  // panda_spawn_egg

  event.remove({
    output: "minecraft:panda_spawn_egg"
  });
  event.shaped(item.of("minecraft:panda_spawn_egg"), [
    ["minecraft:black_wool", "minecraft:white_wool", "minecraft:black_wool"],
    ["minecraft:white_wool", "minecraft:bamboo", "minecraft:white_wool"],
    ["minecraft:black_wool", "minecraft:white_wool", "minecraft:black_wool"],
  ]);

  event.remove({
    output: "minecraft:panda_spawn_egg"
  });
  event.shaped(item.of("minecraft:panda_spawn_egg"), [
    ["bambootweaks:bamboo_block", "bambootweaks:bamboo_block", "bambootweaks:bamboo_block"],
    ["bambootweaks:bamboo_block", "minecraft:ghast_spawn_egg", "bambootweaks:bamboo_block"],
    ["bambootweaks:bamboo_block", "bambootweaks:bamboo_block", "bambootweaks:bamboo_block"],
  ]);

  // zombie_villager_spawn_egg

  event.remove({
    output: "minecraft:zombie_villager_spawn_egg"
  });
  event.shaped(item.of("minecraft:zombie_villager_spawn_egg"), [
    ["minecraft:rotten_flesh", "winged:demonic_flesh", "minecraft:rotten_flesh"],
    ["winged:demonic_flesh", "minecraft:zombie_head", "winged:demonic_flesh"],
    ["minecraft:rotten_flesh", "winged:demonic_flesh", "minecraft:rotten_flesh"],
  ]);

  event.remove({
    output: "minecraft:zombie_villager_spawn_egg"
  });
  event.shaped(item.of("minecraft:zombie_villager_spawn_egg"), [
    ["minecraft:rotten_flesh", "minecraft:zombie_head", "minecraft:rotten_flesh"],
    ["minecraft:apple", "minecraft:panda_spawn_egg", "minecraft:apple"],
    ["minecraft:rotten_flesh", "minecraft:rotten_flesh", "minecraft:rotten_flesh"],
  ]);

  // spider_spawn_egg

  event.remove({
    output: "minecraft:spider_spawn_egg"
  });
  event.shaped(item.of("minecraft:spider_spawn_egg"), [
    ["minecraft:cobweb", "mysticalagriculture:spider_essence", "minecraft:cobweb"],
    ["minecraft:fermented_spider_eye", "minecraft:spider_eye", "minecraft:fermented_spider_eye"],
    ["minecraft:cobweb", "mysticalagriculture:spider_seeds", "minecraft:cobweb"],
  ]);

  event.remove({
    output: "minecraft:spider_spawn_egg"
  });
  event.shaped(item.of("minecraft:spider_spawn_egg"), [
    ["minecraft:cobweb", "minecraft:spider_eye", "minecraft:cobweb"],
    ["minecraft:spider_eye", "minecraft:zombie_villager_spawn_egg", "minecraft:spider_eye"],
    ["minecraft:cobweb", "minecraft:spider_eye", "minecraft:cobweb"],
  ]);

  // wither_skeleton_spawn_egg

  event.remove({
    output: "minecraft:wither_skeleton_spawn_egg"
  });
  event.shaped(item.of("minecraft:wither_skeleton_spawn_egg"), [
    ["minecraft:wither_skeleton_skull", "minecraft:wither_skeleton_skull", "minecraft:wither_skeleton_skull"],
    ["minecraft:wither_skeleton_skull", "minecraft:nether_star", "minecraft:wither_skeleton_skull"],
    ["minecraft:wither_skeleton_skull", "minecraft:wither_skeleton_skull", "minecraft:wither_skeleton_skull"],
  ]);

  event.remove({
    output: "minecraft:wither_skeleton_spawn_egg"
  });
  event.shaped(item.of("minecraft:wither_skeleton_spawn_egg"), [
    ["minecraft:wither_skeleton_skull", "minecraft:wither_skeleton_skull", "minecraft:wither_skeleton_skull"],
    ["minecraft:wither_skeleton_skull", "minecraft:spider_spawn_egg", "minecraft:wither_skeleton_skull"],
    ["minecraft:wither_skeleton_skull", "minecraft:wither_skeleton_skull", "minecraft:wither_skeleton_skull"],
  ]);

  // parrot_spawn_egg

  event.remove({
    output: "minecraft:parrot_spawn_egg"
  });
  event.shaped(item.of("minecraft:parrot_spawn_egg"), [
    ["minecraft:feather", "minecraft:wheat_seeds", "minecraft:feather"],
    ["croptopia:corn_seed", "betterend:bulb_vine_seed", "croptopia:corn_seed"],
    ["minecraft:feather", "minecraft:wheat_seeds", "minecraft:feather"],
  ]);

  event.remove({
    output: "minecraft:parrot_spawn_egg"
  });
  event.shaped(item.of("minecraft:parrot_spawn_egg"), [
    ["minecraft:feather", "minecraft:wheat_seeds", "minecraft:feather"],
    ["minecraft:wheat_seeds", "minecraft:cat_spawn_egg", "minecraft:wheat_seeds"],
    ["minecraft:feather", "minecraft:wheat_seeds", "minecraft:feather"],
  ]);

  // cat_spawn_egg

  event.remove({
    output: "minecraft:cat_spawn_egg"
  });
  event.shaped(item.of("minecraft:cat_spawn_egg"), [
    ["minecraft:orange_wool", "minecraft:blue_wool", "minecraft:yellow_wool"],
    ["minecraft:magenta_wool", "minecraft:music_disc_cat", "minecraft:white_wool"],
    ["minecraft:light_blue_wool", "minecraft:light_gray_wool", "minecraft:purple_wool"],
  ]);

  event.remove({
    output: "minecraft:cat_spawn_egg"
  });
  event.shaped(item.of("minecraft:cat_spawn_egg"), [
    ["minecraft:orange_wool", "minecraft:blue_wool", "minecraft:yellow_wool"],
    ["minecraft:magenta_wool", "minecraft:parrot_spawn_egg", "minecraft:white_wool"],
    ["minecraft:light_blue_wool", "minecraft:light_gray_wool", "minecraft:purple_wool"],
  ]);

  // seal_spawn_egg

  event.remove({
    output: "alaskanativecraft:seal_spawn_egg"
  });
  event.shaped(item.of("alaskanativecraft:seal_spawn_egg"), [
    ["alaskanativecraft:seal", "gofish:seaweed_eel", "alaskanativecraft:seal"],
    ["gofish:seaweed_eel", "alaskanativecraft:cooked_seal", "gofish:seaweed_eel"],
    ["alaskanativecraft:seal", "gofish:seaweed_eel", "alaskanativecraft:seal"],
  ]);

  // bee_spawn_egg

  event.remove({
    output: "minecraft:bee_spawn_egg"
  });
  event.shaped(item.of("minecraft:bee_spawn_egg"), [
    ["charm:beeswax", "charm:beeswax", "charm:beeswax"],
    ["charm:beeswax", "minecraft:honey_bottle", "charm:beeswax"],
    ["charm:beeswax", "charm:beeswax", "charm:beeswax"],
  ]);

  event.remove({
    output: "minecraft:bee_spawn_egg"
  });
  event.shaped(item.of("minecraft:bee_spawn_egg"), [
    ["charm:beeswax", "charm:beeswax", "charm:beeswax"],
    ["charm:beeswax", "minecraft:cat_spawn_egg", "charm:beeswax"],
    ["charm:beeswax", "charm:beeswax", "charm:beeswax"],
  ]);

  // bat_spawn_egg

  event.remove({
    output: "minecraft:bat_spawn_egg"
  });
  event.shaped(item.of("minecraft:bat_spawn_egg"), [
    ["biomemakeover:blightbat_wing", "biomemakeover:bat_wing", "biomemakeover:blightbat_wing"],
    ["biomemakeover:bat_wing", "charm:bat_bucket", "biomemakeover:bat_wing"],
    ["biomemakeover:blightbat_wing", "biomemakeover:bat_wing", "biomemakeover:blightbat_wing"],
  ]);

  event.remove({
    output: "minecraft:bat_spawn_egg"
  });
  event.shaped(item.of("minecraft:bat_spawn_egg"), [
    ["biomemakeover:bat_wing", "biomemakeover:bat_wing", "biomemakeover:bat_wing"],
    ["biomemakeover:bat_wing", "minecraft:bee_spawn_egg", "biomemakeover:bat_wing"],
    ["biomemakeover:bat_wing", "biomemakeover:bat_wing", "biomemakeover:bat_wing"],
  ]);

  // cave_spider_spawn_egg

  event.remove({
    output: "minecraft:cave_spider_spawn_egg"
  });
  event.shaped(item.of("minecraft:cave_spider_spawn_egg"), [
    ["minecraft:cobweb", "minecraft:cobweb", "minecraft:cobweb"],
    ["minecraft:cobweb", "compressedblocks:compressed_cobblestone_x3", "minecraft:cobweb"],
    ["minecraft:cobweb", "minecraft:cobweb", "minecraft:cobweb"],
  ]);

  event.remove({
    output: "minecraft:cave_spider_spawn_egg"
  });
  event.shaped(item.of("minecraft:cave_spider_spawn_egg"), [
    ["minecraft:cobweb", "minecraft:cobweb", "minecraft:cobweb"],
    ["minecraft:cobweb", "minecraft:bat_spawn_egg", "minecraft:cobweb"],
    ["minecraft:cobweb", "minecraft:cobweb", "minecraft:cobweb"],
  ]);

  // cod_spawn_egg

  event.remove({
    output: "minecraft:cod_spawn_egg"
  });
  event.shaped(item.of("minecraft:cod_spawn_egg"), [
    ["untitledduckmod:goose_egg", "untitledduckmod:goose_egg", "untitledduckmod:goose_egg"],
    ["untitledduckmod:goose_egg", "minecraft:cod_bucket", "untitledduckmod:goose_egg"],
    ["untitledduckmod:goose_egg", "untitledduckmod:goose_egg", "untitledduckmod:goose_egg"],
  ]);

  event.remove({
    output: "minecraft:cod_spawn_egg"
  });
  event.shaped(item.of("minecraft:cod_spawn_egg"), [
    ["untitledduckmod:goose_egg", "untitledduckmod:goose_egg", "untitledduckmod:goose_egg"],
    ["untitledduckmod:goose_egg", "minecraft:cave_spider_spawn_egg", "untitledduckmod:goose_egg"],
    ["untitledduckmod:goose_egg", "untitledduckmod:goose_egg", "untitledduckmod:goose_egg"],
  ]);

  // dolphin_spawn_egg

  event.remove({
    output: "minecraft:dolphin_spawn_egg"
  });
  event.shaped(item.of("minecraft:dolphin_spawn_egg"), [
    ["untitledduckmod:goose_egg", "untitledduckmod:goose_egg", "untitledduckmod:goose_egg"],
    ["untitledduckmod:goose_egg", "betterend:end_fish_raw", "untitledduckmod:goose_egg"],
    ["untitledduckmod:goose_egg", "untitledduckmod:goose_egg", "untitledduckmod:goose_egg"],
  ]);

  event.remove({
    output: "minecraft:dolphin_spawn_egg"
  });
  event.shaped(item.of("minecraft:dolphin_spawn_egg"), [
    ["untitledduckmod:goose_egg", "untitledduckmod:goose_egg", "untitledduckmod:goose_egg"],
    ["untitledduckmod:goose_egg", "minecraft:cod_spawn_egg", "untitledduckmod:goose_egg"],
    ["untitledduckmod:goose_egg", "untitledduckmod:goose_egg", "untitledduckmod:goose_egg"],
  ]);

  // donkey_spawn_egg

  event.remove({
    output: "minecraft:donkey_spawn_egg"
  });
  event.shaped(item.of("minecraft:donkey_spawn_egg"), [
    ["untitledduckmod:goose_egg", "untitledduckmod:goose_egg", "untitledduckmod:goose_egg"],
    ["untitledduckmod:goose_egg", "minecraft:saddle", "untitledduckmod:goose_egg"],
    ["untitledduckmod:goose_egg", "untitledduckmod:goose_egg", "untitledduckmod:goose_egg"],
  ]);

  event.remove({
    output: "minecraft:donkey_spawn_egg"
  });
  event.shaped(item.of("minecraft:donkey_spawn_egg"), [
    ["untitledduckmod:goose_egg", "untitledduckmod:goose_egg", "untitledduckmod:goose_egg"],
    ["untitledduckmod:goose_egg", "minecraft:dolphin_spawn_egg", "untitledduckmod:goose_egg"],
    ["untitledduckmod:goose_egg", "untitledduckmod:goose_egg", "untitledduckmod:goose_egg"],
  ]);

  // drowned_spawn_egg

  event.remove({
    output: "minecraft:drowned_spawn_egg"
  });
  event.shaped(item.of("minecraft:drowned_spawn_egg"), [
    ["untitledduckmod:goose_egg", "untitledduckmod:goose_egg", "untitledduckmod:goose_egg"],
    ["untitledduckmod:goose_egg", "artifacts:snorkel", "untitledduckmod:goose_egg"],
    ["untitledduckmod:goose_egg", "untitledduckmod:goose_egg", "untitledduckmod:goose_egg"],
  ]);

  event.remove({
    output: "minecraft:drowned_spawn_egg"
  });
  event.shaped(item.of("minecraft:drowned_spawn_egg"), [
    ["untitledduckmod:goose_egg", "untitledduckmod:goose_egg", "untitledduckmod:goose_egg"],
    ["untitledduckmod:goose_egg", "minecraft:donkey_spawn_egg", "untitledduckmod:goose_egg"],
    ["untitledduckmod:goose_egg", "untitledduckmod:goose_egg", "untitledduckmod:goose_egg"],
  ]);

  // elder_guardian_spawn_egg

  event.remove({
    output: "minecraft:elder_guardian_spawn_egg"
  });
  event.shaped(item.of("minecraft:elder_guardian_spawn_egg"), [
    ["croptopia:elderberry", "untitledduckmod:goose_egg", "croptopia:elderberry"],
    ["untitledduckmod:goose_egg", "minecraft:end_crystal", "untitledduckmod:goose_egg"],
    ["croptopia:elderberry", "untitledduckmod:goose_egg", "croptopia:elderberry"],
  ]);

  event.remove({
    output: "minecraft:elder_guardian_spawn_egg"
  });
  event.shaped(item.of("minecraft:elder_guardian_spawn_egg"), [
    ["untitledduckmod:goose_egg", "untitledduckmod:goose_egg", "untitledduckmod:goose_egg"],
    ["untitledduckmod:goose_egg", "minecraft:drowned_spawn_egg", "untitledduckmod:goose_egg"],
    ["untitledduckmod:goose_egg", "untitledduckmod:goose_egg", "untitledduckmod:goose_egg"],
  ]);

  // enderman_spawn_egg

  event.remove({
    output: "minecraft:enderman_spawn_egg"
  });
  event.shaped(item.of("minecraft:enderman_spawn_egg"), [
    ["minecraft:ender_pearl", "betterend:end_lotus_seed", "minecraft:ender_pearl"],
    ["betterend:end_lotus_seed", "betterend:ender_dust", "betterend:end_lotus_seed"],
    ["minecraft:ender_pearl", "betterend:end_lotus_seed", "minecraft:ender_pearl"],
  ]);

  event.remove({
    output: "minecraft:enderman_spawn_egg"
  });
  event.shaped(item.of("minecraft:enderman_spawn_egg"), [
    ["minecraft:ender_pearl", "betterend:ender_dust", "minecraft:ender_pearl"],
    ["betterend:ender_dust", "minecraft:elder_guardian_spawn_egg", "betterend:ender_dust"],
    ["minecraft:ender_pearl", "betterend:ender_dust", "minecraft:ender_pearl"],
  ]);

  // evoker_spawn_egg 

  event.remove({
    output: "minecraft:evoker_spawn_egg"
  });
  event.shaped(item.of("minecraft:evoker_spawn_egg"), [
    ["crookedcrooks:stone_crook", "biomemakeover:gray_tapestry", "crookedcrooks:stone_crook"],
    ["biomemakeover:gray_tapestry", "voidtotem:totem_of_void_undying", "biomemakeover:gray_tapestry"],
    ["crookedcrooks:stone_crook", "biomemakeover:gray_tapestry", "crookedcrooks:stone_crook"],
  ]);

  event.remove({
    output: "minecraft:evoker_spawn_egg"
  });
  event.shaped(item.of("minecraft:evoker_spawn_egg"), [
    ["biomemakeover:gray_tapestry", "minecraft:totem_of_undying", "biomemakeover:gray_tapestry"],
    ["minecraft:totem_of_undying", "minecraft:enderman_spawn_egg", "minecraft:totem_of_undying"],
    ["biomemakeover:gray_tapestry", "minecraft:totem_of_undying", "biomemakeover:gray_tapestry"],
  ]);

  // fox_spawn_egg 

  event.remove({
    output: "minecraft:fox_spawn_egg"
  });
  event.shaped(item.of("minecraft:fox_spawn_egg"), [
    ["minecraft:orange_dye", "betterend:charina_orange", "minecraft:orange_dye"],
    ["croptopia:orange", "givemehats:fox_ears", "croptopia:orange"],
    ["minecraft:orange_dye", "croptopia:orange", "minecraft:orange_dye"],
  ]);

  event.remove({
    output: "minecraft:fox_spawn_egg"
  });
  event.shaped(item.of("minecraft:fox_spawn_egg"), [
    ["minecraft:orange_dye", "minecraft:orange_dye", "minecraft:orange_dye"],
    ["minecraft:orange_dye", "minecraft:evoker_spawn_egg", "minecraft:orange_dye"],
    ["minecraft:orange_dye", "minecraft:orange_dye", "minecraft:orange_dye"],
  ]);

  // guardian_spawn_egg 	

  event.remove({
    output: "minecraft:guardian_spawn_egg"
  });
  event.shaped(item.of("minecraft:guardian_spawn_egg"), [
    ["minecraft:cyan_dye", "minecraft:turtle_helmet", "minecraft:cyan_dye"],
    ["minecraft:turtle_helmet", "minecraft:heart_of_the_sea", "minecraft:turtle_helmet"],
    ["minecraft:cyan_dye", "minecraft:turtle_helmet", "minecraft:cyan_dye"],
  ]);

  event.remove({
    output: "minecraft:guardian_spawn_egg"
  });
  event.shaped(item.of("minecraft:guardian_spawn_egg"), [
    ["minecraft:cyan_dye", "minecraft:turtle_helmet", "minecraft:cyan_dye"],
    ["minecraft:turtle_helmet", "minecraft:fox_spawn_egg", "minecraft:turtle_helmet"],
    ["minecraft:cyan_dye", "minecraft:turtle_helmet", "minecraft:cyan_dye"],
  ]);

  // hoglin_spawn_egg 	

  event.remove({
    output: "minecraft:hoglin_spawn_egg"
  });
  event.shaped(item.of("minecraft:hoglin_spawn_egg"), [
    ["minecraft:beef", "minecraft:beef", "minecraft:beef"],
    ["minecraft:beef", "artifacts:everlasting_beef", "minecraft:beef"],
    ["minecraft:beef", "minecraft:beef", "minecraft:beef"],
  ]);

  // horse_spawn_egg 	

  event.remove({
    output: "minecraft:horse_spawn_egg"
  });
  event.shaped(item.of("minecraft:horse_spawn_egg"), [
    ["minecraft:beef", "minecraft:saddle", "minecraft:beef"],
    ["minecraft:saddle", "netherite_plus:netherite_horse_armor", "minecraft:saddle"],
    ["minecraft:beef", "minecraft:saddle", "minecraft:beef"],
  ]);

  event.remove({
    output: "minecraft:horse_spawn_egg"
  });
  event.shaped(item.of("minecraft:horse_spawn_egg"), [
    ["minecraft:hay_block", "minecraft:saddle", "minecraft:hay_block"],
    ["minecraft:saddle", "minecraft:hoglin_spawn_egg", "minecraft:saddle"],
    ["minecraft:hay_block", "minecraft:saddle", "minecraft:hay_block"],
  ]);

  // husk_spawn_egg 

  event.remove({
    output: "minecraft:husk_spawn_egg"
  });
  event.shaped(item.of("minecraft:husk_spawn_egg"), [
    ["minecraft:sand", "croptosis:fertilized_sand", "minecraft:sand"],
    ["croptosis:fertilized_sand", "morediscs:music_disc_sand", "croptosis:fertilized_sand"],
    ["minecraft:sand", "croptosis:fertilized_sand", "minecraft:sand"],
  ]);

  event.remove({
    output: "minecraft:husk_spawn_egg"
  });
  event.shaped(item.of("minecraft:husk_spawn_egg"), [
    ["minecraft:sand", "minecraft:sand", "minecraft:sand"],
    ["minecraft:sand", "minecraft:horse_spawn_egg", "minecraft:sand"],
    ["minecraft:sand", "minecraft:sand", "minecraft:sand"],
  ]);

  // llama_spawn_egg 

  event.remove({
    output: "minecraft:llama_spawn_egg"
  });
  event.shaped(item.of("minecraft:llama_spawn_egg"), [
    ["minecraft:saddle", "betterend:leather_stripe", "minecraft:saddle"],
    ["betterend:leather_stripe", "morediscs:music_disc_sand", "betterend:leather_stripe"],
    ["minecraft:saddle", "betterend:leather_stripe", "minecraft:saddle"],
  ]);

  event.remove({
    output: "minecraft:llama_spawn_egg"
  });
  event.shaped(item.of("minecraft:llama_spawn_egg"), [
    ["minecraft:leather", "minecraft:sand", "minecraft:leather"],
    ["minecraft:sand", "minecraft:husk_spawn_egg", "minecraft:sand"],
    ["minecraft:leather", "minecraft:sand", "minecraft:leather"],
  ]);

  // magma_cube_spawn_egg 

  event.remove({
    output: "magma_cube_spawn_egg"
  });
  event.shaped(item.of("magma_cube_spawn_egg"), [
    ["minecraft:magma_cream", "gofish:magma_cod", "minecraft:magma_cream"],
    ["gofish:magma_cod", "minecraft:magma_block", "gofish:magma_cod"],
    ["minecraft:magma_cream", "gofish:magma_cod", "minecraft:magma_cream"],
  ]);

  event.remove({
    output: "magma_cube_spawn_egg"
  });
  event.shaped(item.of("magma_cube_spawn_egg"), [
    ["minecraft:magma_cream", "minecraft:magma_cream", "minecraft:magma_cream"],
    ["minecraft:magma_cream", "minecraft:llama_spawn_egg", "minecraft:magma_cream"],
    ["minecraft:magma_cream", "minecraft:magma_cream", "minecraft:magma_cream"],
  ]);

  // mooshroom_spawn_egg

  event.remove({
    output: "minecraft:mooshroom_spawn_egg"
  });
  event.shaped(item.of("minecraft:mooshroom_spawn_egg"), [
    ["promenade:yellow_mushroom", "minecraft:brown_mushroom", "promenade:yellow_mushroom"],
    ["minecraft:brown_mushroom", "betterend:bolux_mushroom", "minecraft:brown_mushroom"],
    ["promenade:yellow_mushroom", "minecraft:brown_mushroom", "promenade:yellow_mushroom"],
  ]);

  event.remove({
    output: "minecraft:mooshroom_spawn_egg"
  });
  event.shaped(item.of("minecraft:mooshroom_spawn_egg"), [
    ["minecraft:brown_mushroom", "minecraft:brown_mushroom", "minecraft:brown_mushroom"],
    ["minecraft:brown_mushroom", "magma_cube_spawn_egg", "minecraft:brown_mushroom"],
    ["minecraft:brown_mushroom", "minecraft:brown_mushroom", "minecraft:brown_mushroom"],
  ]);

  // phantom_spawn_egg

  event.remove({
    output: "minecraft:phantom_spawn_egg"
  });
  event.shaped(item.of("minecraft:phantom_spawn_egg"), [
    ["biomemakeover:dragonfly_wings", "minecraft:phantom_membrane", "biomemakeover:dragonfly_wings"],
    ["minecraft:phantom_membrane", "betterend:enchanted_membrane", "minecraft:phantom_membrane"],
    ["biomemakeover:dragonfly_wings", "minecraft:phantom_membrane", "biomemakeover:dragonfly_wings"],
  ]);

  event.remove({
    output: "minecraft:phantom_spawn_egg"
  });
  event.shaped(item.of("minecraft:phantom_spawn_egg"), [
    ["minecraft:phantom_membrane", "minecraft:phantom_membrane", "minecraft:phantom_membrane"],
    ["minecraft:phantom_membrane", "minecraft:mooshroom_spawn_egg", "minecraft:phantom_membrane"],
    ["minecraft:phantom_membrane", "minecraft:phantom_membrane", "minecraft:phantom_membrane"],
  ]);

  // pig_spawn_egg

  event.remove({
    output: "minecraft:pig_spawn_egg"
  });
  event.shaped(item.of("minecraft:pig_spawn_egg"), [
    ["minecraft:beef", "croptopia:beef_jerky", "minecraft:beef"],
    ["croptopia:beef_jerky", "mysticalagriculture:pig_essence", "croptopia:beef_jerky"],
    ["minecraft:beef", "croptopia:beef_jerky", "minecraft:beef"],
  ]);

  event.remove({
    output: "minecraft:pig_spawn_egg"
  });
  event.shaped(item.of("minecraft:pig_spawn_egg"), [
    ["minecraft:beef", "minecraft:beef", "minecraft:beef"],
    ["minecraft:beef", "minecraft:phantom_spawn_egg", "minecraft:beef"],
    ["minecraft:beef", "minecraft:beef", "minecraft:beef"],
  ]);

  // piglin_spawn_egg

  event.remove({
    output: "minecraft:piglin_spawn_egg"
  });
  event.shaped(item.of("minecraft:piglin_spawn_egg"), [
    ["minecraft:beef", "croptopia:beef_jerky", "minecraft:leather"],
    ["croptopia:beef_jerky", "inmis:baby_backpack", "croptopia:beef_jerky"],
    ["minecraft:leather", "croptopia:beef_jerky", "minecraft:beef"],
  ]);

  event.remove({
    output: "minecraft:piglin_spawn_egg"
  });
  event.shaped(item.of("minecraft:piglin_spawn_egg"), [
    ["minecraft:leather", "minecraft:beef", "minecraft:leather"],
    ["minecraft:beef", "minecraft:pig_spawn_egg", "minecraft:beef"],
    ["minecraft:leather", "minecraft:beef", "minecraft:leather"],
  ]);

  // sheep_spawn_egg

  event.remove({
    output: "minecraft:sheep_spawn_egg"
  });
  event.shaped(item.of("minecraft:sheep_spawn_egg"), [
    ["minecraft:red_wool", "croptopia:beef_jerky", "minecraft:light_gray_wool"],
    ["croptopia:beef_jerky", "minecraft:white_wool", "croptopia:beef_jerky"],
    ["minecraft:light_blue_wool", "croptopia:beef_jerky", "minecraft:green_wool"],
  ]);

  event.remove({
    output: "minecraft:sheep_spawn_egg"
  });
  event.shaped(item.of("minecraft:sheep_spawn_egg"), [
    ["minecraft:white_wool", "minecraft:beef", "minecraft:white_wool"],
    ["minecraft:beef", "piglin_spawn_egg", "minecraft:beef"],
    ["minecraft:white_wool", "minecraft:beef", "minecraft:white_wool"],
  ]);

  // blaze_spawn_egg

  event.remove({
    output: "minecraft:blaze_spawn_egg"
  });
  event.shaped(item.of("minecraft:blaze_spawn_egg"), [
    ["mysticalagriculture:blaze_essence", "minecraft:blaze_rod", "mysticalagriculture:blaze_essence"],
    ["minecraft:blaze_rod", "mysticalagriculture:blaze_seeds", "minecraft:blaze_rod"],
    ["mysticalagriculture:blaze_essence", "minecraft:blaze_rod", "mysticalagriculture:blaze_essence"],
  ]);

  event.remove({
    output: "minecraft:blaze_spawn_egg"
  });
  event.shaped(item.of("minecraft:blaze_spawn_egg"), [
    ["mysticalagriculture:blaze_essence", "minecraft:blaze_rod", "mysticalagriculture:blaze_essence"],
    ["minecraft:blaze_rod", "minecraft:sheep_spawn_egg", "minecraft:blaze_rod"],
    ["mysticalagriculture:blaze_essence", "minecraft:blaze_rod", "mysticalagriculture:blaze_essence"],
  ]);

  // caracal_spawn_egg

  event.remove({
    output: "aqupd:caracal_spawn_egg"
  });
  event.shaped(item.of("aqupd:caracal_spawn_egg"), [
    ["minecraft:brown_dye", "minecraft:brown_concrete_powder", "minecraft:brown_dye"],
    ["minecraft:brown_concrete", "gofish:baked_endfish", "minecraft:brown_concrete"],
    ["minecraft:brown_wool", "minecraft:brown_concrete", "minecraft:brown_wool"],
  ]);

  event.remove({
    output: "aqupd:caracal_spawn_egg"
  });
  event.shaped(item.of("aqupd:caracal_spawn_egg"), [
    ["minecraft:brown_wool", "minecraft:brown_concrete", "minecraft:brown_wool"],
    ["minecraft:brown_dye", "alaskanativecraft:moose_spawn_egg", "minecraft:brown_dye"],
    ["minecraft:brown_wool", "minecraft:brown_concrete", "minecraft:brown_wool"],
  ]);

  event.remove({
    output: "aqupd:grizzly_bear_spawn_egg"
  });
  event.shaped(item.of("aqupd:grizzly_bear_spawn_egg"), [
    ["minecraft:brown_dye", "minecraft:brown_concrete_powder", "minecraft:brown_dye"],
    ["minecraft:brown_concrete", "gofish:rainy_bass", "minecraft:brown_concrete"],
    ["minecraft:brown_wool", "minecraft:brown_concrete", "minecraft:brown_wool"],
  ]);

  // spawn_egg_cubozoa

  event.remove({
    output: "betterend:spawn_egg_cubozoa"
  });
  event.shaped(item.of("betterend:spawn_egg_cubozoa"), [
    ["gofish:seaweed", "gofish:charfish", "gofish:seaweed"],
    ["gofish:charfish", "betterend:bucket_cubozoa", "gofish:charfish"],
    ["gofish:seaweed", "gofish:charfish", "gofish:seaweed"],
  ]);

  event.remove({
    output: "betterend:spawn_egg_cubozoa"
  });
  event.shaped(item.of("betterend:spawn_egg_cubozoa"), [
    ["gofish:seaweed", "gofish:seaweed", "gofish:seaweed"],
    ["gofish:seaweed", "aqupd:grizzly_bear_spawn_egg", "gofish:seaweed"],
    ["gofish:seaweed", "gofish:seaweed", "gofish:seaweed"],
  ]);

  // spawn_egg_dragonfly

  event.remove({
    output: "betterend:spawn_egg_dragonfly"
  });
  event.shaped(item.of("betterend:spawn_egg_dragonfly"), [
    ["betterend:dragon_tree_button", "biomemakeover:dragonfly_wings", "betterend:dragon_tree_button"],
    ["biomemakeover:dragonfly_wings", "winged:dragon_scale", "biomemakeover:dragonfly_wings"],
    ["betterend:dragon_tree_button", "biomemakeover:dragonfly_wings", "betterend:dragon_tree_button"],
  ]);

  event.remove({
    output: "betterend:spawn_egg_dragonfly"
  });
  event.shaped(item.of("betterend:spawn_egg_dragonfly"), [
    ["biomemakeover:dragonfly_wings", "winged:dragon_scale", "biomemakeover:dragonfly_wings"],
    ["winged:dragon_scale", "betterend:spawn_egg_cubozoa", "winged:dragon_scale"],
    ["biomemakeover:dragonfly_wings", "winged:dragon_scale", "biomemakeover:dragonfly_wings"],
  ]);

  // spawn_egg_end_fish

  event.remove({
    output: "betterend:spawn_egg_end_fish"
  });
  event.shaped(item.of("betterend:spawn_egg_end_fish"), [
    ["minecraft:pufferfish", "untitledduckmod:duck_egg", "minecraft:pufferfish"],
    ["untitledduckmod:duck_egg", "gofish:endfish", "untitledduckmod:duck_egg"],
    ["minecraft:pufferfish", "untitledduckmod:duck_egg", "minecraft:pufferfish"],
  ]);

  event.remove({
    output: "betterend:spawn_egg_end_fish"
  });
  event.shaped(item.of("betterend:spawn_egg_end_fish"), [
    ["minecraft:salmon", "untitledduckmod:duck_egg", "minecraft:salmon"],
    ["untitledduckmod:duck_egg", "betterend:spawn_egg_dragonfly", "untitledduckmod:duck_egg"],
    ["minecraft:salmon", "untitledduckmod:duck_egg", "minecraft:salmon"],
  ]);

  // spawn_egg_silk_moth

  event.remove({
    output: "betterend:spawn_egg_silk_moth"
  });
  event.shaped(item.of("betterend:spawn_egg_silk_moth"), [
    ["betterend:silk_fiber", "betterend:silk_moth_matrix", "betterend:silk_fiber"],
    ["betterend:silk_moth_matrix", "untitledduckmod:duck_egg", "betterend:silk_moth_matrix"],
    ["betterend:silk_fiber", "betterend:silk_moth_matrix", "betterend:silk_fiber"],
  ]);

  event.remove({
    output: "betterend:spawn_egg_silk_moth"
  });
  event.shaped(item.of("betterend:spawn_egg_silk_moth"), [
    ["betterend:silk_fiber", "minecraft:egg", "betterend:silk_fiber"],
    ["minecraft:egg", "betterend:spawn_egg_end_fish", "minecraft:egg"],
    ["betterend:silk_fiber", "minecraft:egg", "betterend:silk_fiber"],
  ]);

  // spawn_egg_end_slime

  event.remove({
    output: "betterend:spawn_egg_end_slime"
  });
  event.shaped(item.of("betterend:spawn_egg_end_slime"), [
    ["minecraft:slime_block", "gofish:slimefish", "minecraft:slime_block"],
    ["gofish:slimefish", "betterend:spawn_egg_silk_moth", "gofish:slimefish"],
    ["minecraft:slime_block", "gofish:slimefish", "minecraft:slime_block"],
  ]);

  event.remove({
    output: "betterend:spawn_egg_end_slime"
  });
  event.shaped(item.of("betterend:spawn_egg_end_slime"), [
    ["minecraft:slime_ball", "minecraft:slime_ball", "minecraft:slime_ball"],
    ["minecraft:slime_ball", "betterend:spawn_egg_silk_moth", "minecraft:slime_ball"],
    ["minecraft:slime_ball", "minecraft:slime_ball", "minecraft:slime_ball"],
  ]);

  // spawn_egg_shadow_walker

  event.remove({
    output: "betterend:spawn_egg_shadow_walker"
  });
  event.shaped(item.of("betterend:spawn_egg_shadow_walker"), [
    ["betterend:shadow_berry_jelly", "betterend:shadow_berry_raw", "betterend:shadow_berry_jelly"],
    ["betterend:shadow_berry_raw", "betterend:shadow_plant", "betterend:shadow_berry_raw"],
    ["betterend:shadow_berry_jelly", "betterend:shadow_berry_raw", "betterend:shadow_berry_jelly"],
  ]);

  event.remove({
    output: "betterend:spawn_egg_shadow_walker"
  });
  event.shaped(item.of("betterend:spawn_egg_shadow_walker"), [
    ["betterend:shadow_berry_cooked", "betterend:shadow_berry_cooked", "betterend:shadow_berry_cooked"],
    ["betterend:shadow_berry_raw", "betterend:spawn_egg_end_slime", "betterend:shadow_berry_raw"],
    ["betterend:shadow_berry_cooked", "betterend:shadow_berry_cooked", "betterend:shadow_berry_cooked"],
  ]);

  // blightbat_spawn_egg

  event.remove({
    output: "biomemakeover:blightbat_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:blightbat_spawn_egg"), [
    ["winged:bat_wing", "biomemakeover:blightbat_wing", "winged:bat_wing"],
    ["biomemakeover:blightbat_wing", "charm:bat_bucket", "biomemakeover:blightbat_wing"],
    ["winged:bat_wing", "biomemakeover:blightbat_wing", "winged:bat_wing"],
  ]);

  event.remove({
    output: "biomemakeover:blightbat_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:blightbat_spawn_egg"), [
    ["winged:bat_wing", "biomemakeover:bat_wing", "winged:bat_wing"],
    ["biomemakeover:bat_wing", "betterend:spawn_egg_shadow_walker", "biomemakeover:bat_wing"],
    ["winged:bat_wing", "biomemakeover:bat_wing", "winged:bat_wing"],
  ]);

  // cowboy_spawn_egg

  event.remove({
    output: "biomemakeover:cowboy_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:cowboy_spawn_egg"), [
    ["minecraft:leather", "betterend:leather_stripe", "minecraft:leather"],
    ["betterend:leather_stripe", "givemehats:cowboy_hat", "betterend:leather_stripe"],
    ["minecraft:leather", "betterend:leather_stripe", "minecraft:leather"],
  ]);

  event.remove({
    output: "biomemakeover:cowboy_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:cowboy_spawn_egg"), [
    ["minecraft:leather", "minecraft:leather", "minecraft:leather"],
    ["minecraft:leather", "biomemakeover:blightbat_spawn_egg", "minecraft:leather"],
    ["minecraft:leather", "minecraft:leather", "minecraft:leather"],
  ]);

  // decayed_spawn_egg

  event.remove({
    output: "biomemakeover:decayed_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:decayed_spawn_egg"), [
    ["minecraft:shield", "minecraft:bucket", "minecraft:shield"],
    ["minecraft:bucket", "morediscs:music_disc_drowned_anthem", "minecraft:bucket"],
    ["minecraft:shield", "minecraft:bucket", "minecraft:shield"],
  ]);

  event.remove({
    output: "biomemakeover:decayed_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:decayed_spawn_egg"), [
    ["minecraft:shield", "minecraft:shield", "minecraft:shield"],
    ["minecraft:shield", "biomemakeover:cowboy_spawn_egg", "minecraft:shield"],
    ["minecraft:shield", "minecraft:shield", "minecraft:shield"],
  ]);

  // dragonfly_spawn_egg

  event.remove({
    output: "biomemakeover:dragonfly_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:dragonfly_spawn_egg"), [
    ["croptopia:dragonfruit", "croptopia:dragonfruit", "croptopia:dragonfruit"],
    ["croptopia:dragonfruit", "minecraft:nether_star", "croptopia:dragonfruit"],
    ["croptopia:dragonfruit", "croptopia:dragonfruit", "croptopia:dragonfruit"],
  ]);

  event.remove({
    output: "biomemakeover:dragonfly_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:dragonfly_spawn_egg"), [
    ["croptopia:dragonfruit", "betterend:dragon_tree_button", "croptopia:dragonfruit"],
    ["betterend:dragon_tree_button", "biomemakeover:decayed_spawn_egg", "betterend:dragon_tree_button"],
    ["croptopia:dragonfruit", "betterend:dragon_tree_button", "croptopia:dragonfruit"],
  ]);

  // ghost_spawn_egg

  event.remove({
    output: "biomemakeover:ghost_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:ghost_spawn_egg"), [
    ["biomemakeover:ectoplasm", "glassential:glass_ghostly", "biomemakeover:ectoplasm"],
    ["glassential:glass_ghostly", "biomemakeover:ghost_town_music_disk", "glassential:glass_ghostly"],
    ["biomemakeover:ectoplasm", "glassential:glass_ghostly", "biomemakeover:ectoplasm"],
  ]);

  event.remove({
    output: "biomemakeover:ghost_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:ghost_spawn_egg"), [
    ["biomemakeover:ectoplasm", "biomemakeover:ectoplasm", "biomemakeover:ectoplasm"],
    ["biomemakeover:ectoplasm", "biomemakeover:dragonfly_spawn_egg", "biomemakeover:ectoplasm"],
    ["biomemakeover:ectoplasm", "biomemakeover:ectoplasm", "biomemakeover:ectoplasm"],
  ]);

  // giant_slime_spawn_egg

  event.remove({
    output: "biomemakeover:giant_slime_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:giant_slime_spawn_egg"), [
    ["minecraft:slime_block", "biomemakeover:ectoplasm", "minecraft:slime_block"],
    ["biomemakeover:ectoplasm", "gofish:slimey_crate", "biomemakeover:ectoplasm"],
    ["minecraft:slime_block", "biomemakeover:ectoplasm", "minecraft:slime_block"],
  ]);

  event.remove({
    output: "biomemakeover:giant_slime_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:giant_slime_spawn_egg"), [
    ["minecraft:slime_ball", "biomemakeover:ectoplasm", "minecraft:slime_ball"],
    ["biomemakeover:ectoplasm", "biomemakeover:ghost_spawn_egg", "biomemakeover:ectoplasm"],
    ["minecraft:slime_ball", "biomemakeover:ectoplasm", "minecraft:slime_ball"],
  ]);

  // glowfish_spawn_egg

  event.remove({
    output: "biomemakeover:glowfish_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:glowfish_spawn_egg"), [
    ["byg:blue_glowcane_dust", "minecraft:glowstone", "byg:blue_glowcane_dust"],
    ["minecraft:glowstone", "betterend:glowing_bulb", "minecraft:glowstone"],
    ["byg:blue_glowcane_dust", "minecraft:glowstone", "byg:blue_glowcane_dust"],
  ]);

  event.remove({
    output: "biomemakeover:glowfish_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:glowfish_spawn_egg"), [
    ["minecraft:glowstone_dust", "minecraft:glowstone_dust", "minecraft:glowstone_dust"],
    ["minecraft:glowstone_dust", "biomemakeover:giant_slime_spawn_egg", "minecraft:glowstone_dust"],
    ["minecraft:glowstone_dust", "minecraft:glowstone_dust", "minecraft:glowstone_dust"],
  ]);

  // lightning_bug_spawn_egg

  event.remove({
    output: "biomemakeover:lightning_bug_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:lightning_bug_spawn_egg"), [
    ["gofish:slimefish", "minecraft:slime_ball", "gofish:slimefish"],
    ["minecraft:slime_ball", "biomemakeover:lightning_bottle", "minecraft:slime_ball"],
    ["gofish:slimefish", "minecraft:slime_ball", "gofish:slimefish"],
  ]);

  event.remove({
    output: "biomemakeover:lightning_bug_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:lightning_bug_spawn_egg"), [
    ["minecraft:slime_ball", "minecraft:slime_ball", "minecraft:slime_ball"],
    ["minecraft:slime_ball", "biomemakeover:glowfish_spawn_egg", "minecraft:slime_ball"],
    ["minecraft:slime_ball", "minecraft:slime_ball", "minecraft:slime_ball"],
  ]);

  // moth_spawn_egg

  event.remove({
    output: "biomemakeover:moth_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:moth_spawn_egg"), [
    ["minecraft:lily_pad", "biomemakeover:moth_scales", "minecraft:lily_pad"],
    ["biomemakeover:moth_scales", "biomemakeover:moth_blossom", "biomemakeover:moth_scales"],
    ["minecraft:lily_pad", "biomemakeover:moth_scales", "minecraft:lily_pad"],
  ]);

  // mushroom_trader_spawn_egg

  event.remove({
    output: "biomemakeover:mushroom_trader_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:mushroom_trader_spawn_egg"), [
    ["artifacts:lucky_scarf", "minecraft:emerald", "artifacts:lucky_scarf"],
    ["byg:emeraldite_shards", "artifacts:superstitious_hat", "byg:emeraldite_shards"],
    ["artifacts:lucky_scarf", "byg:emeraldite_shards", "artifacts:lucky_scarf"],
  ]);

  event.remove({
    output: "biomemakeover:mushroom_trader_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:mushroom_trader_spawn_egg"), [
    ["minecraft:emerald_block", "minecraft:emerald", "minecraft:emerald_block"],
    ["minecraft:emerald", "biomemakeover:moth_spawn_egg", "minecraft:emerald"],
    ["minecraft:emerald_block", "minecraft:emerald", "minecraft:emerald_block"],
  ]);

  // owl_spawn_egg	

  event.remove({
    output: "biomemakeover:owl_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:owl_spawn_egg"), [
    ["betterend:nightshade_moss", "betterend:nightshade_moss", "betterend:nightshade_moss"],
    ["betterend:nightshade_moss", "ringsofascension:ring_night_vision", "betterend:nightshade_moss"],
    ["betterend:nightshade_moss", "betterend:nightshade_moss", "betterend:nightshade_moss"],
  ]);

  event.remove({
    output: "biomemakeover:owl_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:owl_spawn_egg"), [
    ["betterend:nightshade_moss", "betterend:nightshade_moss", "betterend:nightshade_moss"],
    ["betterend:nightshade_moss", "artifacts:night_vision_goggles", "betterend:nightshade_moss"],
    ["betterend:nightshade_moss", "betterend:nightshade_moss", "betterend:nightshade_moss"],
  ]);

  event.remove({
    output: "biomemakeover:owl_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:owl_spawn_egg"), [
    ["byg:nightshade_berries", "betterend:nightshade_moss", "byg:nightshade_berries"],
    ["betterend:nightshade_moss", "biomemakeover:mushroom_trader_spawn_egg", "betterend:nightshade_moss"],
    ["byg:nightshade_berries", "betterend:nightshade_moss", "byg:nightshade_berries"],
  ]);

  // rootling_spawn_egg	

  event.remove({
    output: "biomemakeover:rootling_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:rootling_spawn_egg"), [
    ["minecraft:beetroot", "biomemakeover:bulbus_root", "minecraft:beetroot"],
    ["biomemakeover:bulbus_root", "minecraft:flower_pot", "biomemakeover:bulbus_root"],
    ["minecraft:beetroot", "biomemakeover:bulbus_root", "minecraft:beetroot"],
  ]);

  event.remove({
    output: "biomemakeover:rootling_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:rootling_spawn_egg"), [
    ["biomemakeover:roasted_bulbus_root", "biomemakeover:bulbus_root", "biomemakeover:roasted_bulbus_root"],
    ["biomemakeover:bulbus_root", "biomemakeover:owl_spawn_egg", "biomemakeover:bulbus_root"],
    ["biomemakeover:roasted_bulbus_root", "biomemakeover:bulbus_root", "biomemakeover:roasted_bulbus_root"],
  ]);

  event.remove({
    output: "biomemakeover:rootling_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:rootling_spawn_egg"), [
    ["minecraft:brown_dye", "biomemakeover:bulbus_root", "minecraft:brown_dye"],
    ["biomemakeover:bulbus_root", "minecraft:flower_pot", "biomemakeover:bulbus_root"],
    ["minecraft:brown_dye", "biomemakeover:bulbus_root", "minecraft:brown_dye"],
  ]);

  // flamingo_spawn_egg

  event.remove({
    output: "flamingo_ooo:flamingo_spawn_egg"
  });
  event.shaped(item.of("flamingo_ooo:flamingo_spawn_egg"), [
    ["untitledduckmod:duck_feather", "flamingo_ooo:pink_feather", "untitledduckmod:duck_feather"],
    ["flamingo_ooo:pink_feather", "flamingo_ooo:flamingo_egg", "flamingo_ooo:pink_feather"],
    ["untitledduckmod:duck_feather", "flamingo_ooo:pink_feather", "untitledduckmod:duck_feather"],
  ]);

  event.remove({
    output: "flamingo_ooo:flamingo_spawn_egg"
  });
  event.shaped(item.of("flamingo_ooo:flamingo_spawn_egg"), [
    ["flamingo_ooo:flamingo_egg", "flamingo_ooo:pink_feather", "flamingo_ooo:flamingo_egg"],
    ["flamingo_ooo:pink_feather", "artifacts:helium_flamingo", "flamingo_ooo:pink_feather"],
    ["flamingo_ooo:flamingo_egg", "flamingo_ooo:pink_feather", "flamingo_ooo:flamingo_egg"],
  ]);

  // patmigan_spawn_egg

  event.remove({
    output: "alaskanativecraft:ptarmigan_spawn_egg"
  });
  event.shaped(item.of("alaskanativecraft:ptarmigan_spawn_egg"), [
    ["untitledduckmod:duck_feather", "croptosis:feather_meal", "untitledduckmod:duck_feather"],
    ["croptosis:feather_meal", "winged:phoenix_feather", "croptosis:feather_meal"],
    ["untitledduckmod:duck_feather", "croptosis:feather_meal", "untitledduckmod:duck_feather"],
  ]);

  // scuttler_spawn_egg	

  event.remove({
    output: "biomemakeover:scuttler_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:scuttler_spawn_egg"), [
    ["biomemakeover:scuttler_tail", "minecraft:scute", "biomemakeover:scuttler_tail"],
    ["minecraft:scute", "croptopia:soy_milk", "minecraft:scute"],
    ["biomemakeover:scuttler_tail", "minecraft:scute", "biomemakeover:scuttler_tail"],
  ]);

  event.remove({
    output: "biomemakeover:scuttler_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:scuttler_spawn_egg"), [
    ["biomemakeover:scuttler_tail", "minecraft:scute", "biomemakeover:scuttler_tail"],
    ["minecraft:scute", "croptopia:milk_bottle", "minecraft:scute"],
    ["biomemakeover:scuttler_tail", "minecraft:scute", "biomemakeover:scuttler_tail"],
  ]);

  event.remove({
    output: "biomemakeover:scuttler_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:scuttler_spawn_egg"), [
    ["minecraft:scute", "betterend:ruscus", "minecraft:scute"],
    ["betterend:ruscus", "mysticalagriculture:earth_seeds", "betterend:ruscus"],
    ["biomemakeover:scuttler_tail", "betterend:ruscus", "biomemakeover:scuttler_tail"],
  ]);

  // tadpole_spawn_egg

  event.remove({
    output: "biomemakeover:tadpole_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:tadpole_spawn_egg"), [
    ["alaskanativecraft:dry_fish", "biomemakeover:water_lily", "alaskanativecraft:dry_fish"],
    ["biomemakeover:water_lily", "biomemakeover:tadpole_bucket", "biomemakeover:water_lily"],
    ["alaskanativecraft:dry_fish", "biomemakeover:water_lily", "alaskanativecraft:dry_fish"],
  ]);

  event.remove({
    output: "biomemakeover:tadpole_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:tadpole_spawn_egg"), [
    ["minecraft:lily_pad", "biomemakeover:water_lily", "minecraft:lily_pad"],
    ["biomemakeover:water_lily", "biomemakeover:scuttler_spawn_egg", "biomemakeover:water_lily"],
    ["minecraft:lily_pad", "biomemakeover:water_lily", "minecraft:lily_pad"],
  ]);

  event.remove({
    output: "biomemakeover:toad_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:toad_spawn_egg"), [
    ["biomemakeover:raw_toad", "biomemakeover:wart", "biomemakeover:raw_toad"],
    ["biomemakeover:wart", "biomemakeover:ectoplasm", "biomemakeover:wart"],
    ["biomemakeover:raw_toad", "biomemakeover:wart", "biomemakeover:raw_toad"],
  ]);

  event.remove({
    output: "biomemakeover:toad_spawn_egg"
  });
  event.shaped(item.of("biomemakeover:toad_spawn_egg"), [
    ["biomemakeover:raw_toad", "biomemakeover:cooked_toad", "biomemakeover:raw_toad"],
    ["biomemakeover:cooked_toad", "biomemakeover:tadpole_spawn_egg", "biomemakeover:cooked_toad"],
    ["biomemakeover:raw_toad", "biomemakeover:cooked_toad", "biomemakeover:raw_toad"],
  ]);

  // coral_squid_spawn_egg

  event.remove({
    output: "charm:coral_squid_spawn_egg"
  });
  event.shaped(item.of("charm:coral_squid_spawn_egg"), [
    ["byg:warped_coral_block", "betterend:bubble_coral", "byg:warped_coral_block"],
    ["betterend:bubble_coral", "minecraft:tube_coral", "betterend:bubble_coral"],
    ["byg:warped_coral_block", "betterend:bubble_coral", "byg:warped_coral_block"],
  ]);

  event.remove({
    output: "charm:coral_squid_spawn_egg"
  });
  event.shaped(item.of("charm:coral_squid_spawn_egg"), [
    ["minecraft:brain_coral", "minecraft:horn_coral", "minecraft:brain_coral"],
    ["minecraft:horn_coral", "biomemakeover:toad_spawn_egg", "minecraft:horn_coral"],
    ["minecraft:brain_coral", "minecraft:horn_coral", "minecraft:brain_coral"],
  ]);

  // anthermite_egg

  event.remove({
    output: "dungeonsmod:anthermite_egg"
  });
  event.shaped(item.of("dungeonsmod:anthermite_egg"), [
    ["minecraft:spider_spawn_egg", "minecraft:cave_spider_spawn_egg", "minecraft:spider_spawn_egg"],
    ["minecraft:cave_spider_spawn_egg", "minecraft:cobweb", "minecraft:cave_spider_spawn_egg"],
    ["minecraft:spider_spawn_egg", "minecraft:cave_spider_spawn_egg", "minecraft:spider_spawn_egg"],
  ]);

  // mimic_egg

  event.remove({
    output: "dungeonsmod:mimic_egg"
  });
  event.shaped(item.of("dungeonsmod:mimic_egg"), [
    ["expandedstorage:vanilla_wood_mini_chest_with_sparrow", "minecraft:barrel", "expandedstorage:vanilla_wood_mini_chest_with_sparrow"],
    ["minecraft:barrel", "minecraft:ender_chest", "minecraft:barrel"],
    ["minecraft:chest", "minecraft:barrel", "minecraft:chest"],
  ]);

  // piranha_egg

  event.remove({
    output: "dungeonsmod:piranha_egg"
  });
  event.shaped(item.of("dungeonsmod:piranha_egg"), [
    ["minecraft:chicken", "croptopia:fish_and_chips", "minecraft:chicken"],
    ["croptopia:fish_and_chips", "croptopia:pepper", "croptopia:fish_and_chips"],
    ["minecraft:chicken", "croptopia:fish_and_chips", "minecraft:chicken"],
  ]);

  // rogue_egg	

  event.remove({
    output: "dungeonsmod:rogue_egg"
  });
  event.shaped(item.of("dungeonsmod:rogue_egg"), [
    ["minecraft:nether_star", "gofish:starry_salmon", "minecraft:nether_star"],
    ["gofish:starry_salmon", "minecraft:leather_chestplate", "gofish:starry_salmon"],
    ["minecraft:nether_star", "gofish:starry_salmon", "minecraft:nether_star"],
  ]);

  event.remove({
    output: "dungeonsmod:rogue_egg"
  });
  event.shaped(item.of("dungeonsmod:rogue_egg"), [
    ["minecraft:nether_star", "promenade:autumn_oak_leaf_pile", "minecraft:nether_star"],
    ["promenade:autumn_oak_leaf_pile", "dungeonsmod:piranha_egg", "promenade:autumn_oak_leaf_pile"],
    ["minecraft:nether_star", "promenade:autumn_oak_leaf_pile", "minecraft:nether_star"],
  ]);

  // scientist_egg	

  event.remove({
    output: "dungeonsmod:scientist_egg"
  });
  event.shaped(item.of("dungeonsmod:scientist_egg"), [
    ["biomemakeover:illunite_shard", "biomemakeover:soul_embers", "biomemakeover:illunite_shard"],
    ["biomemakeover:soul_embers", "inmis:plated_backpack", "biomemakeover:soul_embers"],
    ["biomemakeover:illunite_shard", "biomemakeover:soul_embers", "biomemakeover:illunite_shard"],
  ]);

  event.remove({
    output: "dungeonsmod:scientist_egg"
  });
  event.shaped(item.of("dungeonsmod:scientist_egg"), [
    ["croptopia:rum", "biomemakeover:soul_embers", "croptopia:rum"],
    ["biomemakeover:soul_embers", "dungeonsmod:rogue_egg", "biomemakeover:soul_embers"],
    ["croptopia:rum", "biomemakeover:soul_embers", "croptopia:rum"],
  ]);

  // slimewolf_egg	

  event.remove({
    output: "dungeonsmod:slimewolf_egg"
  });
  event.shaped(item.of("dungeonsmod:slimewolf_egg"), [
    ["terrarianslimes:rainbow_slime_ball", "minecraft:lime_wool", "terrarianslimes:rainbow_slime_ball"],
    ["minecraft:lime_wool", "givemehats:slime_hat", "minecraft:lime_wool"],
    ["terrarianslimes:rainbow_slime_ball", "minecraft:lime_wool", "terrarianslimes:rainbow_slime_ball"],
  ]);

  // slimond_egg	

  event.remove({
    output: "dungeonsmod:slimond_egg"
  });
  event.shaped(item.of("dungeonsmod:slimond_egg"), [
    ["gofish:lilyfish", "gofish:ender_eel", "gofish:lilyfish"],
    ["gofish:ender_eel", "mysticalagriculture:slime_essence", "gofish:ender_eel"],
    ["gofish:lilyfish", "gofish:ender_eel", "gofish:lilyfish"],
  ]);

  event.remove({
    output: "dungeonsmod:slimond_egg"
  });
  event.shaped(item.of("dungeonsmod:slimond_egg"), [
    ["gofish:lilyfish", "gofish:lilyfish", "gofish:lilyfish"],
    ["gofish:lilyfish", "dungeonsmod:slimewolf_egg", "gofish:lilyfish"],
    ["gofish:lilyfish", "gofish:lilyfish", "gofish:lilyfish"],
  ]);

  // mule_spawn_egg

  event.remove({
    output: "minecraft:mule_spawn_egg"
  });
  event.shaped(item.of("minecraft:mule_spawn_egg"), [
    ["betterend:helix_tree_barrel", "minecraft:barrel", "betterend:helix_tree_barrel"],
    ["minecraft:barrel", "minecraft:golden_horse_armor", "minecraft:barrel"],
    ["betterend:helix_tree_barrel", "minecraft:barrel", "betterend:helix_tree_barrel"],
  ]);

  // ocelot_spawn_egg

  event.remove({
    output: "minecraft:ocelot_spawn_egg"
  });
  event.shaped(item.of("minecraft:ocelot_spawn_egg"), [
    ["croptopia:pork_jerky", "minecraft:porkchop", "croptopia:pork_jerky"],
    ["minecraft:porkchop", "winged:broken_core_of_flight_75", "minecraft:porkchop"],
    ["croptopia:pork_jerky", "minecraft:porkchop", "croptopia:pork_jerky"],
  ]);

  event.remove({
    output: "minecraft:ocelot_spawn_egg"
  });
  event.shaped(item.of("minecraft:ocelot_spawn_egg"), [
    ["croptopia:pork_jerky", "minecraft:porkchop", "croptopia:pork_jerky"],
    ["minecraft:porkchop", "winged:broken_core_of_flight_75", "minecraft:porkchop"],
    ["croptopia:pork_jerky", "minecraft:porkchop", "croptopia:pork_jerky"],
  ]);

  // piglin_brute_spawn_egg

  event.remove({
    output: "minecraft:piglin_brute_spawn_egg"
  });
  event.shaped(item.of("minecraft:piglin_brute_spawn_egg"), [
    ["sandwichable:pork_cuts", "pigsteel:pigsteel_nugget", "sandwichable:pork_cuts"],
    ["pigsteel:pigsteel_nugget", "minecraft:music_disc_pigstep", "pigsteel:pigsteel_nugget"],
    ["sandwichable:pork_cuts", "pigsteel:pigsteel_nugget", "sandwichable:pork_cuts"],
  ]);

  event.remove({
    output: "minecraft:piglin_brute_spawn_egg"
  });
  event.shaped(item.of("minecraft:piglin_brute_spawn_egg"), [
    ["sandwichable:pork_cuts", "sandwichable:pork_cuts", "sandwichable:pork_cuts"],
    ["sandwichable:pork_cuts", "pigsteel:pigsteel_block", "sandwichable:pork_cuts"],
    ["sandwichable:pork_cuts", "sandwichable:pork_cuts", "sandwichable:pork_cuts"],
  ]);

  event.remove({
    output: "minecraft:piglin_brute_spawn_egg"
  });
  event.shaped(item.of("minecraft:piglin_brute_spawn_egg"), [
    ["minecraft:porkchop", "sandwichable:pork_cuts", "minecraft:porkchop"],
    ["sandwichable:pork_cuts", "minecraft:ocelot_spawn_egg", "sandwichable:pork_cuts"],
    ["minecraft:porkchop", "sandwichable:pork_cuts", "minecraft:porkchop"],
  ]);

  // piglin_spawn_egg

  event.remove({
    output: "minecraft:piglin_spawn_egg"
  });
  event.shaped(item.of("minecraft:piglin_spawn_egg"), [
    ["croptopia:pork_jerky", "minecraft:porkchop", "croptopia:pork_jerky"],
    ["minecraft:porkchop", "winged:broken_core_of_flight_75", "minecraft:porkchop"],
    ["croptopia:pork_jerky", "minecraft:porkchop", "croptopia:pork_jerky"],
  ]);

  // pillager_spawn_egg

  event.remove({
    output: "minecraft:pillager_spawn_egg"
  });
  event.shaped(item.of("minecraft:pillager_spawn_egg"), [
    ["adorn:egg_crate", "minecraft:piglin_spawn_egg", "adorn:egg_crate"],
    ["minecraft:piglin_spawn_egg", "minecraft:end_crystal", "minecraft:piglin_spawn_egg"],
    ["adorn:egg_crate", "minecraft:piglin_spawn_egg", "adorn:egg_crate"],
  ]);

  // polar_bear_spawn_egg

  event.remove({
    output: "minecraft:polar_bear_spawn_egg"
  });
  event.shaped(item.of("minecraft:polar_bear_spawn_egg"), [
    ["minecraft:beef", "minecraft:packed_ice", "minecraft:beef"],
    ["minecraft:packed_ice", "conjuring:soul_slice", "minecraft:packed_ice"],
    ["minecraft:beef", "minecraft:packed_ice", "minecraft:beef"],
  ]);

  event.remove({
    output: "minecraft:polar_bear_spawn_egg"
  });
  event.shaped(item.of("minecraft:polar_bear_spawn_egg"), [
    ["minecraft:beef", "minecraft:ice", "minecraft:beef"],
    ["minecraft:ice", "minecraft:honey_bottle", "minecraft:ice"],
    ["minecraft:beef", "minecraft:ice", "minecraft:beef"],
  ]);

  // pufferfish_spawn_egg

  event.remove({
    output: "minecraft:pufferfish_spawn_egg"
  });
  event.shaped(item.of("minecraft:pufferfish_spawn_egg"), [
    ["minecraft:bone_meal", "byg:black_puff", "minecraft:bone_meal"],
    ["byg:black_puff", "minecraft:pufferfish", "byg:black_puff"],
    ["minecraft:bone_meal", "byg:black_puff", "minecraft:bone_meal"],
  ]);

  // rabbit_spawn_egg

  event.remove({
    output: "minecraft:rabbit_spawn_egg"
  });
  event.shaped(item.of("minecraft:rabbit_spawn_egg"), [
    ["minecraft:rabbit", "minecraft:rabbit_stew", "minecraft:rabbit"],
    ["minecraft:rabbit_stew", "minecraft:cooked_rabbit", "minecraft:rabbit_stew"],
    ["minecraft:rabbit", "minecraft:rabbit_stew", "minecraft:rabbit"],
  ]);

  event.remove({
    output: "minecraft:rabbit_spawn_egg"
  });
  event.shaped(item.of("minecraft:rabbit_spawn_egg"), [
    ["minecraft:rabbit", "minecraft:rabbit_hide", "minecraft:rabbit"],
    ["minecraft:rabbit_hide", "minecraft:pufferfish_spawn_egg", "minecraft:rabbit_hide"],
    ["minecraft:rabbit", "minecraft:rabbit_hide", "minecraft:rabbit"],
  ]);

  // ravager_spawn_egg

  event.remove({
    output: "minecraft:ravager_spawn_egg"
  });
  event.shaped(item.of("minecraft:ravager_spawn_egg"), [
    ["minecraft:iron_ingot", "kibe:diamond_ring", "minecraft:iron_ingot"],
    ["kibe:diamond_ring", "morediscs:music_disc_ravage", "kibe:diamond_ring"],
    ["minecraft:iron_ingot", "kibe:diamond_ring", "minecraft:iron_ingot"],
  ]);

  // salmon_spawn_egg

  event.remove({
    output: "minecraft:salmon_spawn_egg"
  });
  event.shaped(item.of("minecraft:salmon_spawn_egg"), [
    ["sandwichable:salmon_filet", "gofish:soul_salmon", "sandwichable:salmon_filet"],
    ["gofish:soul_salmon", "minecraft:salmon_bucket", "gofish:soul_salmon"],
    ["sandwichable:salmon_filet", "gofish:soul_salmon", "sandwichable:salmon_filet"],
  ]);

  event.remove({
    output: "minecraft:salmon_spawn_egg"
  });
  event.shaped(item.of("minecraft:salmon_spawn_egg"), [
    ["gofish:smokey_salmon", "gofish:soul_salmon", "gofish:smokey_salmon"],
    ["gofish:soul_salmon", "gofish:starry_salmon", "gofish:soul_salmon"],
    ["gofish:smokey_salmon", "gofish:soul_salmon", "gofish:smokey_salmon"],
  ]);

  event.remove({
    output: "minecraft:salmon_spawn_egg"
  });
  event.shaped(item.of("minecraft:salmon_spawn_egg"), [
    ["gofish:smokey_salmon", "minecraft:salmon", "gofish:smokey_salmon"],
    ["minecraft:salmon", "minecraft:ravager_spawn_egg", "minecraft:salmon"],
    ["gofish:smokey_salmon", "minecraft:salmon", "gofish:smokey_salmon"],
  ]);

  // shulker_spawn_egg

  event.remove({
    output: "minecraft:shulker_spawn_egg"
  });
  event.shaped(item.of("minecraft:shulker_spawn_egg"), [
    ["winged:wing_shulker", "minecraft:iron_nugget", "winged:wing_shulker"],
    ["minecraft:iron_nugget", "minecraft:shulker_shell", "minecraft:iron_nugget"],
    ["winged:wing_shulker", "minecraft:iron_nugget", "winged:wing_shulker"],
  ]);

  event.remove({
    output: "minecraft:shulker_spawn_egg"
  });
  event.shaped(item.of("minecraft:shulker_spawn_egg"), [
    ["winged:wing_shulker", "minecraft:white_shulker_box", "winged:wing_shulker"],
    ["minecraft:white_shulker_box", "minecraft:salmon_spawn_egg", "minecraft:white_shulker_box"],
    ["winged:wing_shulker", "minecraft:white_shulker_box", "winged:wing_shulker"],
  ]);

  // silverfish_spawn_egg	

  event.remove({
    output: "minecraft:silverfish_spawn_egg"
  });
  event.shaped(item.of("minecraft:silverfish_spawn_egg"), [
    ["mysticalagriculture:fish_seeds", "croptopia:basil", "mysticalagriculture:fish_seeds"],
    ["croptopia:basil", "mysticalagriculture:silver_essence", "croptopia:basil"],
    ["mysticalagriculture:fish_seeds", "croptopia:basil", "mysticalagriculture:fish_seeds"],
  ]);

  event.remove({
    output: "minecraft:silverfish_spawn_egg"
  });
  event.shaped(item.of("minecraft:silverfish_spawn_egg"), [
    ["mysticalagriculture:fish_seeds", "gofish:soul_lure", "mysticalagriculture:fish_seeds"],
    ["gofish:soul_lure", "minecraft:shulker_spawn_egg", "gofish:soul_lure"],
    ["mysticalagriculture:fish_seeds", "gofish:soul_lure", "mysticalagriculture:fish_seeds"],
  ]);

  // skeleton_horse_spawn_egg

  event.remove({
    output: "minecraft:skeleton_horse_spawn_egg"
  });
  event.shaped(item.of("minecraft:skeleton_horse_spawn_egg"), [
    ["minecraft:skeleton_skull", "minecraft:skeleton_skull", "minecraft:skeleton_skull"],
    ["minecraft:skeleton_skull", "minecraft:leather", "minecraft:skeleton_skull"],
    ["minecraft:skeleton_skull", "minecraft:skeleton_skull", "minecraft:skeleton_skull"],
  ]);

  // squid_spawn_egg

  event.remove({
    output: "minecraft:squid_spawn_egg"
  });
  event.shaped(item.of("minecraft:squid_spawn_egg"), [
    ["byg:warped_coral", "minecraft:horn_coral_fan", "byg:warped_coral"],
    ["minecraft:horn_coral_fan", "charm:coral_squid_bucket", "minecraft:horn_coral_fan"],
    ["byg:warped_coral", "minecraft:horn_coral_fan", "byg:warped_coral"],
  ]);

  // stray_spawn_egg

  event.remove({
    output: "minecraft:stray_spawn_egg"
  });
  event.shaped(item.of("minecraft:stray_spawn_egg"), [
    ["minecraft:bone", "minecraft:skeleton_skull", "minecraft:bone"],
    ["minecraft:skeleton_skull", "gofish:astral_crate", "minecraft:skeleton_skull"],
    ["minecraft:bone", "minecraft:skeleton_skull", "minecraft:bone"],
  ]);

  event.remove({
    output: "minecraft:stray_spawn_egg"
  });
  event.shaped(item.of("minecraft:stray_spawn_egg"), [
    ["minecraft:bone", "minecraft:skeleton_skull", "minecraft:bone"],
    ["minecraft:skeleton_skull", "minecraft:music_disc_strad", "minecraft:skeleton_skull"],
    ["minecraft:bone", "minecraft:skeleton_skull", "minecraft:bone"],
  ]);

  event.remove({
    output: "minecraft:stray_spawn_egg"
  });
  event.shaped(item.of("minecraft:stray_spawn_egg"), [
    ["minecraft:skeleton_skull", "minecraft:skeleton_skull", "minecraft:skeleton_skull"],
    ["minecraft:skeleton_skull", "minecraft:squid_spawn_egg", "minecraft:skeleton_skull"],
    ["minecraft:skeleton_skull", "minecraft:skeleton_skull", "minecraft:skeleton_skull"],
  ]);

  // strider_spawn_egg

  event.remove({
    output: "minecraft:strider_spawn_egg"
  });
  event.shaped(item.of("minecraft:strider_spawn_egg"), [
    ["minecraft:nether_wart", "minecraft:netherrack", "minecraft:nether_wart"],
    ["minecraft:netherrack", "givemehats:strider_hat", "minecraft:netherrack"],
    ["minecraft:nether_wart", "minecraft:netherrack", "minecraft:nether_wart"],
  ]);

  event.remove({
    output: "minecraft:strider_spawn_egg"
  });
  event.shaped(item.of("minecraft:strider_spawn_egg"), [
    ["minecraft:netherrack", "minecraft:netherrack", "minecraft:netherrack"],
    ["minecraft:netherrack", "givemehats:strider_hat", "minecraft:netherrack"],
    ["minecraft:netherrack", "minecraft:netherrack", "minecraft:netherrack"],
  ]);

  event.remove({
    output: "minecraft:strider_spawn_egg"
  });
  event.shaped(item.of("minecraft:strider_spawn_egg"), [
    ["minecraft:quartz", "byg:blue_nether_brick", "minecraft:quartz"],
    ["byg:blue_nether_brick", "givemehats:strider_hat", "byg:blue_nether_brick"],
    ["minecraft:quartz", "byg:blue_nether_brick", "minecraft:quartz"],
  ]);

  // trader_llama_spawn_egg

  event.remove({
    output: "minecraft:trader_llama_spawn_egg"
  });
  event.shaped(item.of("minecraft:trader_llama_spawn_egg"), [
    ["#charm:chests/wooden", "minecraft:emerald_block", "#charm:chests/wooden"],
    ["minecraft:emerald_block", "minecraft:llama_spawn_egg", "minecraft:emerald_block"],
    ["#charm:chests/wooden", "minecraft:emerald_block", "#charm:chests/wooden"],
  ]);

  event.remove({
    output: "minecraft:trader_llama_spawn_egg"
  });
  event.shaped(item.of("minecraft:trader_llama_spawn_egg"), [
    ["mysticalagriculture:emerald_seeds", "adorn:trading_station", "mysticalagriculture:emerald_seeds"],
    ["minecraft:emerald_block", "minecraft:strider_spawn_egg", "minecraft:emerald_block"],
    ["minecraft:emerald_block", "minecraft:emerald_block", "minecraft:emerald_block"],
  ]);

  event.remove({
    output: "minecraft:tropical_fish_spawn_egg"
  });
  event.shaped(item.of("minecraft:tropical_fish_spawn_egg"), [
    ["minecraft:tropical_fish", "charm:oak_crate", "minecraft:tropical_fish"],
    ["charm:oak_crate", "minecraft:tropical_fish_bucket", "charm:oak_crate"],
    ["minecraft:tropical_fish", "charm:oak_crate", "minecraft:tropical_fish"],
  ]);

  // turtle_spawn_egg

  event.remove({
    output: "minecraft:turtle_spawn_egg"
  });
  event.shaped(item.of("minecraft:turtle_egg"), [
    ["gofish:seaweed", "gofish:seaweed", "gofish:seaweed"],
    ["gofish:seaweed", "winged:wing_turtle_cape", "gofish:seaweed"],
    ["gofish:seaweed", "gofish:seaweed", "gofish:seaweed"],
  ]);

  event.remove({
    output: "minecraft:turtle_spawn_egg"
  });
  event.shaped(item.of("minecraft:turtle_spawn_egg"), [
    ["gofish:seaweed", "minecraft:tropical_fish_spawn_egg", "gofish:seaweed"],
    ["minecraft:tropical_fish_spawn_egg", "winged:wing_turtle_cape", "minecraft:tropical_fish_spawn_egg"],
    ["gofish:seaweed", "minecraft:tropical_fish_spawn_egg", "gofish:seaweed"],
  ]);

  event.remove({
    output: "minecraft:turtle_egg"
  });
  event.shaped(item.of("minecraft:turtle_egg"), [
    ["gofish:coral_tube", "minecraft:egg", "minecraft:coral_tube"],
    ["minecraft:egg", "winged:wing_turtle_cape", "minecraft:egg"],
    ["gofish:coral_tube", "minecraft:egg", "gofish:coral_tube"],
  ]);

  // vex_spawn_egg

  event.remove({
    output: "minecraft:vex_spawn_egg"
  });
  event.shaped(item.of("minecraft:vex_spawn_egg"), [
    ["winged:vex_essence", "winged:black_feather", "winged:vex_essence"],
    ["winged:black_feather", "minecraft:totem_of_undying", "winged:black_feather"],
    ["winged:vex_essence", "winged:black_feather", "winged:vex_essence"],
  ]);

  event.remove({
    output: "minecraft:vex_spawn_egg"
  });
  event.shaped(item.of("minecraft:vex_spawn_egg"), [
    ["winged:vex_essence", "winged:vex_essence", "winged:vex_essence"],
    ["winged:vex_essence", "minecraft:turtle_egg", "winged:vex_essence"],
    ["winged:vex_essence", "winged:vex_essence", "winged:vex_essence"],
  ]);

  // villager_spawn_egg

  event.remove({
    output: "minecraft:villager_spawn_egg"
  });
  event.shaped(item.of("minecraft:vindicator_spawn_egg"), [
    ["adorn:trading_station", "artifacts:villager_hat", "adorn:trading_station"],
    ["artifacts:villager_hat", "artifacts:crystal_heart", "artifacts:villager_hat"],
    ["adorn:trading_station", "artifacts:villager_hat", "adorn:trading_station"],
  ]);

  event.remove({
    output: "minecraft:villager_spawn_egg"
  });
  event.shaped(item.of("minecraft:villager_spawn_egg"), [
    ["minecraft:emerald_block", "minecraft:emerald_block", "minecraft:emerald_block"],
    ["artifacts:villager_hat", "minecraft:vex_spawn_egg", "artifacts:villager_hat"],
    ["minecraft:emerald_block", "minecraft:emerald_block", "minecraft:emerald_block"],
  ]);

  // vindicator_spawn_egg

  event.remove({
    output: "minecraft:vindicator_spawn_egg"
  });
  event.shaped(item.of("minecraft:vindicator_spawn_egg"), [
    ["minecraft:shears", "minecraft:shears", "minecraft:shears"],
    ["minecraft:shears", "minecraft:emerald_block", "minecraft:shears"],
    ["minecraft:shears", "minecraft:shears", "minecraft:shears"],
  ]);

  event.remove({
    output: "minecraft:vindicator_spawn_egg"
  });
  event.shaped(item.of("minecraft:vindicator_spawn_egg"), [
    ["minecraft:emerald_block", "minecraft:shears", "minecraft:emerald_block"],
    ["minecraft:shears", "minecraft:villager_spawn_egg", "minecraft:shears"],
    ["minecraft:emerald_block", "minecraft:shears", "minecraft:emerald_block"],
  ]);

  // wandering_trader_spawn_egg

  event.remove({
    output: "minecraft:wandering_trader_spawn_egg"
  });
  event.shaped(item.of("minecraft:wandering_trader_spawn_egg"), [
    ["minecraft:emerald_block", "minecraft:lead", "minecraft:emerald_block"],
    ["minecraft:lead", "artifacts:crystal_heart", "minecraft:lead"],
    ["minecraft:emerald_block", "minecraft:lead", "minecraft:emerald_block"],
  ]);

  // wolf_spawn_egg

  event.remove({
    output: "minecraft:wolf_spawn_egg"
  });
  event.shaped(item.of("minecraft:wolf_spawn_egg"), [
    ["minecraft:bone_meal", "minecraft:diamond", "minecraft:bone_meal"],
    ["minecraft:diamond", "givemehats:wolf_ears", "minecraft:diamond"],
    ["minecraft:bone_meal", "minecraft:diamond", "minecraft:bone_meal"],
  ]);

  // zoglin_spawn_egg

  event.remove({
    output: "minecraft:zoglin_spawn_egg"
  });
  event.shaped(item.of("minecraft:zoglin_spawn_egg"), [
    ["minecraft:cooked_porkchop", "artifacts:everlasting_beef", "minecraft:cooked_porkchop"],
    ["artifacts:everlasting_beef", "artifacts:eternal_steak", "artifacts:everlasting_beef"],
    ["minecraft:cooked_porkchop", "artifacts:everlasting_beef", "minecraft:cooked_porkchop"],
  ]);

  event.remove({
    output: "minecraft:zoglin_spawn_egg"
  });
  event.shaped(item.of("minecraft:zoglin_spawn_egg"), [
    ["minecraft:cooked_porkchop", "artifacts:everlasting_beef", "minecraft:cooked_porkchop"],
    ["artifacts:everlasting_beef", "charm:raid_horn", "artifacts:everlasting_beef"],
    ["minecraft:cooked_porkchop", "artifacts:everlasting_beef", "minecraft:cooked_porkchop"],
  ]);

  event.remove({
    output: "minecraft:zoglin_spawn_egg"
  });
  event.shaped(item.of("minecraft:zoglin_spawn_egg"), [
    ["minecraft:cooked_porkchop", "artifacts:everlasting_beef", "minecraft:cooked_porkchop"],
    ["artifacts:everlasting_beef", "minecraft:wolf_spawn_egg", "artifacts:everlasting_beef"],
    ["minecraft:cooked_porkchop", "artifacts:everlasting_beef", "minecraft:cooked_porkchop"],
  ]);

  // zombie_horse_spawn_egg

  event.remove({
    output: "minecraft:zombie_horse_spawn_egg"
  });
  event.shaped(item.of("minecraft:zombie_horse_spawn_egg"), [
    ["minecraft:zombie_head", "winged:demonic_flesh", "minecraft:zombie_head"],
    ["winged:demonic_flesh", "netherite_plus:netherite_horse_armor", "winged:demonic_flesh"],
    ["minecraft:zombie_head", "winged:demonic_flesh", "minecraft:zombie_head"],
  ]);

  event.remove({
    output: "minecraft:zombie_horse_spawn_egg"
  });
  event.shaped(item.of("minecraft:zombie_horse_spawn_egg"), [
    ["minecraft:zombie_head", "minecraft:rotten_flesh", "minecraft:zombie_head"],
    ["minecraft:rotten_flesh", "minecraft:zoglin_spawn_egg", "minecraft:rotten_flesh"],
    ["minecraft:zombie_head", "minecraft:rotten_flesh", "minecraft:zombie_head"],
  ]);

  // zombie_villager_spawn_egg

  event.remove({
    output: "minecraft:zombie_villager_spawn_egg"
  });
  event.shaped(item.of("minecraft:zombie_villager_spawn_egg"), [
    ["minecraft:emerald", "artifacts:villager_hat", "minecraft:emerald"],
    ["artifacts:villager_hat", "minecraft:enchanted_golden_apple", "artifacts:villager_hat"],
    ["minecraft:emerald", "artifacts:villager_hat", "minecraft:emerald"],
  ]);

  // zombified_piglin_spawn_egg

  event.remove({
    output: "minecraft:zombified_piglin_spawn_egg"
  });
  event.shaped(item.of("minecraft:zombified_piglin_spawn_egg"), [
    ["untitledduckmod:duck_egg", "minecraft:rotten_flesh", "untitledduckmod:duck_egg"],
    ["minecraft:rotten_flesh", "minecraft:rotten_flesh", "minecraft:rotten_flesh"],
    ["untitledduckmod:duck_egg", "minecraft:rotten_flesh", "untitledduckmod:duck_egg"],
  ]);

  // duck_spawn_egg 1

  event.remove({
    output: "untitledduckmod:duck_spawn_egg"
  });
  event.shaped(item.of("untitledduckmod:duck_spawn_egg"), [
    ["untitledduckmod:duck_feather", "untitledduckmod:raw_duck", "untitledduckmod:duck_feather"],
    ["untitledduckmod:raw_duck", "minecraft:egg", "untitledduckmod:raw_duck"],
    ["untitledduckmod:duck_feather", "untitledduckmod:raw_duck", "untitledduckmod:duck_feather"],
  ]);

  // goose_spawn_egg

  event.remove({
    output: "untitledduckmod:goose_spawn_egg"
  });
  event.shaped(item.of("untitledduckmod:goose_spawn_egg"), [
    ["untitledduckmod:goose_foot", "untitledduckmod:goose_egg", "untitledduckmod:goose_foot"],
    ["untitledduckmod:goose_egg", "minecraft:egg", "untitledduckmod:goose_egg"],
    ["untitledduckmod:goose_foot", "untitledduckmod:goose_egg", "untitledduckmod:goose_foot"],
  ]);
});
