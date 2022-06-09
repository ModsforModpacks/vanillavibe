//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║   TERRARIAN SLIMES SPAWN EGG RECIPES   ║
  //╚════════════════════════════════════════╝

  // baby_slime_spawn_egg 

  event.shaped(item.of("terrarianslimes:baby_slime_spawn_egg", 1), [
    ["terrarianslimes:green_gel", "terrarianslimes:pinky_gel", "terrarianslimes:blue_gel"],
    ["terrarianslimes:illuminant_gel", "mysticalagriculture:slime_essence", "terrarianslimes:yellow_gel"],
    ["terrarianslimes:ice_gel", "terrarianslimes:crimson_gel", "terrarianslimes:corrupt_gel"],
  ]);

  // black_slime_spawn_egg

  event.shaped(item.of("terrarianslimes:black_slime_spawn_egg", 1), [
    ["mocolors:colored_slime", "terrarianslimes:black_gel", "mocolors:colored_slime"],
    ["terrarianslimes:black_gel", "minecraft:slime_block", "terrarianslimes:black_gel"],
    ["mocolors:colored_slime", "terrarianslimes:king_slime_ball", "mocolors:colored_slime"],
  ]);

  // blue_slime_spawn_egg

  event.shaped(item.of("terrarianslimes:blue_slime_spawn_egg", 1), [
    ["terrarianslimes:blue_slime_ball", "terrarianslimes:blue_gel", "terrarianslimes:blue_slime_ball"],
    ["terrarianslimes:blue_gel", "mysticalagriculture:slime_essence", "terrarianslimes:blue_gel"],
    ["terrarianslimes:blue_slime_ball", "terrarianslimes:blue_gel", "terrarianslimes:blue_slime_ball"],
  ]);

  //corrupt_slime_spawn_egg

  event.shaped(item.of("terrarianslimes:corrupt_slime_spawn_egg", 1), [
    ["terrarianslimes:corrupt_slime_block", "terrarianslimes:corrupt_slime_ball", "terrarianslimes:corrupt_slime_block"],
    ["terrarianslimes:corrupt_slime_ball", "terrarianslimes:glowstick", "terrarianslimes:corrupt_slime_ball"],
    ["terrarianslimes:corrupt_slime_block", "terrarianslimes:corrupt_slime_ball", "terrarianslimes:corrupt_slime_block"],
  ]);


  // crimslime_spawn_egg

  event.shaped(item.of("terrarianslimes:crimslime_spawn_egg", 1), [
    ["terrarianslimes:crimson_slime_block", "terrarianslimes:crimson_slime_ball", "terrarianslimes:crimson_slime_block"],
    ["terrarianslimes:crimson_slime_ball", "terrarianslimes:blessed_apple", "terrarianslimes:crimson_slime_ball"],
    ["terrarianslimes:crimson_slime_block", "terrarianslimes:crimson_slime_ball", "terrarianslimes:crimson_slime_block"],
  ]);

  // green_slime_spawn_egg

  event.shaped(item.of("terrarianslimes:green_slime_spawn_egg", 1), [
    ["minecraft:slime_block", "minecraft:slime_ball", "minecraft:slime_block"],
    ["terrarianslimes:green_gel", "mysticalagriculture:slime_seeds", "terrarianslimes:green_gel"],
    ["minecraft:slime_ball", "vanilla-hammers:slime_hammer", "minecraft:slime_ball"],
  ]);

  // ice_slime_spawn_egg

  event.shaped(item.of("terrarianslimes:ice_slime_spawn_egg", 1), [
    ["terrarianslimes:ice_slime_block", "terrarianslimes:ice_slime_ball", "terrarianslimes:ice_slime_block"],
    ["terrarianslimes:ice_slime_ball", "terrarianslimes:blessed_apple", "terrarianslimes:ice_slime_ball"],
    ["terrarianslimes:ice_slime_block", "terrarianslimes:ice_slime_ball", "terrarianslimes:ice_slime_block"],
  ]);

  // illuminant_slime_spawn_egg

  event.shaped(item.of("terrarianslimes:illuminant_slime_spawn_egg", 1), [
    ["terrarianslimes:illuminant_slime_block", "terrarianslimes:illuminant_slime_ball", "terrarianslimes:illuminant_slime_block"],
    ["terrarianslimes:illuminant_slime_ball", "terrarianslimes:blessed_apple", "terrarianslimes:illuminant_slime_ball"],
    ["terrarianslimes:illuminant_slime_block", "terrarianslimes:illuminant_slime_ball", "terrarianslimes:illuminant_slime_block"],
  ]);

  // jungle_slime_spawn_egg

  event.shaped(item.of("terrarianslimes:jungle_slime_spawn_egg", 1), [
    ["terrarianslimes:jungle_slime_block", "terrarianslimes:jungle_slime_ball", "terrarianslimes:jungle_slime_block"],
    ["terrarianslimes:jungle_slime_ball", "terrarianslimes:blessed_apple", "terrarianslimes:jungle_slime_ball"],
    ["terrarianslimes:jungle_slime_block", "terrarianslimes:jungle_slime_ball", "terrarianslimes:jungle_slime_block"],
  ]);

  // king_slime_spawn_egg

  event.shaped(item.of("terrarianslimes:king_slime_spawn_egg", 1), [
    ["terrarianslimes:king_slime_ball", "terrarianslimes:king_slime_ball", "terrarianslimes:king_slime_ball"],
    ["terrarianslimes:king_slime_ball", "terrarianslimes:dynamite", "terrarianslimes:king_slime_ball"],
    ["terrarianslimes:king_slime_ball", "terrarianslimes:king_slime_ball", "terrarianslimes:king_slime_ball"],
  ]);

  // lava_slime_spawn_egg

  event.shaped(item.of("terrarianslimes:lava_slime_spawn_egg", 1), [
    ["minecraft:orange_dye", "minecraft:lava_bucket", "minecraft:orange_dye"],
    ["minecraft:lava_bucket", "appliedenergistics2:orange_paint_ball", "minecraft:lava_bucket"],
    ["minecraft:orange_dye", "minecraft:lava_bucket", "minecraft:orange_dye"],
  ]);

  // mother_slime_spawn_egg

  event.shaped(item.of("terrarianslimes:mother_slime_spawn_egg", 1), [
    ["terrarianslimes:dirt_bomb", "terrarianslimes:sticky_bomb", "terrarianslimes:dirt_bomb"],
    ["terrarianslimes:sticky_bomb", "terrarianslimes:apple_pie", "terrarianslimes:sticky_bomb"],
    ["terrarianslimes:dirt_bomb", "terrarianslimes:sticky_bomb", "terrarianslimes:dirt_bomb"],
  ]);

  // pinky_egg

  event.shaped(item.of("terrarianslimes:pinky_spawn_egg", 1), [
    ["terrarianslimes:pinky_slime_block", "terrarianslimes:pinky_slime_ball", "terrarianslimes:pinky_slime_block"],
    ["terrarianslimes:pinky_slime_ball", "mysticalagriculture:slime_essence", "terrarianslimes:pinky_slime_ball"],
    ["terrarianslimes:pinky_slime_block", "terrarianslimes:pinky_slime_ball", "terrarianslimes:pinky_slime_block"],
  ]);

  // purple_slime_spawn_egg

  event.shaped(item.of("terrarianslimes:purple_slime_spawn_egg", 1), [
    ["terrarianslimes:pinky_slime_block", "terrarianslimes:pinky_slime_ball", "terrarianslimes:pinky_slime_block"],
    ["terrarianslimes:pinky_slime_ball", "minecraft:enchanted_golden_apple", "terrarianslimes:pinky_slime_ball"],
    ["terrarianslimes:pinky_slime_block", "terrarianslimes:pinky_slime_ball", "terrarianslimes:pinky_slime_block"],
  ]);

  // rainbow_slime_spawn_egg

  event.shaped(item.of("terrarianslimes:rainbow_slime_spawn_egg", 1), [
    ["terrarianslimes:rainbow_slime_block", "terrarianslimes:rainbow_slime_ball", "terrarianslimes:rainbow_slime_block"],
    ["terrarianslimes:rainbow_slime_ball", "minecraft:enchanted_golden_apple", "terrarianslimes:rainbow_slime_ball"],
    ["terrarianslimes:rainbow_slime_block", "terrarianslimes:rainbow_slime_ball", "terrarianslimes:rainbow_slime_block"],
  ]);

  // red_slime_spawn_egg

  event.shaped(item.of("terrarianslimes:red_slime_spawn_egg", 1), [
    ["terrarianslimes:red_slime_block", "terrarianslimes:red_slime_ball", "terrarianslimes:red_slime_block"],
    ["terrarianslimes:red_slime_ball", "terrarianslimes:ice_cream", "terrarianslimes:red_slime_ball"],
    ["terrarianslimes:red_slime_block", "terrarianslimes:red_slime_ball", "terrarianslimes:red_slime_block"],
  ]);

  // sand_slime_spawn_egg

  event.shaped(item.of("terrarianslimes:sand_slime_spawn_egg", 1), [
    ["terrarianslimes:sand_slime_block", "terrarianslimes:sand_slime_ball", "terrarianslimes:sand_slime_block"],
    ["terrarianslimes:sand_slime_ball", "minecraft:enchanted_golden_apple", "terrarianslimes:sand_slime_ball"],
    ["terrarianslimes:sand_slime_block", "terrarianslimes:sand_slime_ball", "terrarianslimes:sand_slime_block"],
  ]);

  // spiked_ice_slime_spawn_egg

  event.shaped(item.of("terrarianslimes:spiked_ice_slime_spawn_egg", 1), [
    ["terrarianslimes:bomb", "terrarianslimes:sand_slime_ball", "terrarianslimes:bomb"],
    ["terrarianslimes:sand_slime_ball", "kibe:diamond_spikes", "terrarianslimes:sand_slime_ball"],
    ["terrarianslimes:bomb", "terrarianslimes:sand_slime_ball", "terrarianslimes:bomb"],
  ]);

  // spiked_jungle_slime_spawn_egg

  event.shaped(item.of("terrarianslimes:spiked_jungle_slime_spawn_egg", 1), [
    ["terrarianslimes:jungle_slime_ball", "terrarianslimes:sand_slime_ball", "terrarianslimes:jungle_slime_ball"],
    ["terrarianslimes:sand_slime_ball", "kibe:diamond_spikes", "terrarianslimes:sand_slime_ball"],
    ["terrarianslimes:jungle_slime_ball", "terrarianslimes:sand_slime_ball", "terrarianslimes:jungle_slime_ball"],
  ]);

  // spiked_slime_spawn_egg

  event.shaped(item.of("terrarianslimes:spiked_slime_spawn_egg", 1), [
    ["terrarianslimes:sticky_dynamite", "terrarianslimes:bouncy_bomb", "terrarianslimes:sticky_dynamite"],
    ["terrarianslimes:bouncy_bomb", "kibe:diamond_spikes", "terrarianslimes:bouncy_bomb"],
    ["terrarianslimes:sticky_dynamite", "terrarianslimes:bouncy_bomb", "terrarianslimes:sticky_dynamite"],
  ]);

  // umbrella_slime_spawn_egg

  event.shaped(item.of("terrarianslimes:umbrella_slime_spawn_egg", 1), [
    ["terrarianslimes:sticky_glowstick", "terrarianslimes:bouncy_bomb", "terrarianslimes:sticky_glowstick"],
    ["terrarianslimes:bouncy_bomb", "terrarianslimes:umbrella", "terrarianslimes:bouncy_bomb"],
    ["terrarianslimes:sticky_glowstick", "terrarianslimes:bouncy_bomb", "terrarianslimes:sticky_glowstick"],
  ]);

  // yellow_slime_spawn_egg

  event.shaped(item.of("terrarianslimes:yellow_slime_spawn_egg", 1), [
    ["terrarianslimes:sand_slime_block", "terrarianslimes:yellow_slime_block", "terrarianslimes:sand_slime_block"],
    ["terrarianslimes:yellow_slime_block", "minecraft:enchanted_golden_apple", "terrarianslimes:yellow_slime_block"],
    ["terrarianslimes:sand_slime_block", "terrarianslimes:yellow_slime_block", "terrarianslimes:sand_slime_block"],
  ]);

  // slimeling_spawn_egg

  event.shaped(item.of("terrarianslimes:slimeling_spawn_egg", 1), [
    ["minecraft:slime_block", "terrarianslimes:grenade", "minecraft:slime_block"],
    ["terrarianslimes:grenade", "kibe:slime_sling", "terrarianslimes:grenade"],
    ["minecraft:slime_block", "terrarianslimes:grenade", "minecraft:slime_block"],
  ]);

  //╔════════════════════════════════════════╗
  //║            BLESSED APPLE               ║
  //╚════════════════════════════════════════╝
  event.shaped(item.of("terrarianslimes:blessed_apple", 1), [
    ["minecraft:golden_apple", "minecraft:enchanted_golden_apple", "minecraft:golden_apple"],
    ["minecraft:enchanted_golden_apple", "terrarianslimes:king_slime_ball", "minecraft:enchanted_golden_apple"],
    ["minecraft:golden_apple", "minecraft:enchanted_golden_apple", "minecraft:golden_apple"],
  ]);
})
