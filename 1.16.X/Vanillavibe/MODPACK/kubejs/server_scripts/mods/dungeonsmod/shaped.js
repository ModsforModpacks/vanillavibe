//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {

  //╔════════════════════════════════════════╗
  //║              BOSS EGGS                 ║
  //╚════════════════════════════════════════╝


  // Crawler
  event.remove({
    output: "dungeonsmod:crawler_egg"
  });
  event.shaped(item.of("dungeonsmod:crawler_egg"), [
    ["biomemakeover:enchanted_totem", "mysticalagriculture:master_infusion_crystal", "biomemakeover:enchanted_totem"],
    ["kibe:void_totem", "bosses_of_mass_destruction:blazing_eye", "kibe:void_totem"],
    ["biomemakeover:enchanted_totem", "mysticalagriculture:master_infusion_crystal", "biomemakeover:enchanted_totem"],
  ]);

  // Deserted
  event.remove({
    output: "dungeonsmod:deserted_egg"
  });
  event.shaped(item.of("dungeonsmod:deserted_egg"), [
    ["columns:sandstone_column", "minecraft:end_crystal", "columns:sandstone_column"],
    ["minecraft:end_crystal", "kibe:angel_ring", "minecraft:end_crystal"],
    ["columns:sandstone_column", "minecraft:end_crystal", "columns:sandstone_column"],
  ]);

  // Guard
  event.remove({
    output: "dungeonsmod:guard_egg"
  });
  event.shaped(item.of("dungeonsmod:guard_egg"), [
    ["betterend:elytra_armored", "betterend:aeternium_block", "minecraft:elytra"],
    ["bosses_of_mass_destruction:mob_ward", "mysticalagriculture:tinkering_table", "bosses_of_mass_destruction:mob_ward"],
    ["truerooms:camolock_eye", "betterend:aeternium_block", "truerooms:camolock_eye"],
  ]);

  // Haunter
  event.remove({
    output: "dungeonsmod:haunter_egg"
  });
  event.shaped(item.of("dungeonsmod:haunter_egg"), [
    ["kibe:light_ring", "minecraft:command_block", "kibe:light_ring"],
    ["minecraft:end_crystal", "dungeonsmod:home_gem", "minecraft:end_crystal"],
    ["kibe:light_ring", "betterend:infusion_pedestral", "kibe:light_ring"],
  ]);

  // Iron Slime
  event.remove({
    output: "dungeonsmod:ironslime_egg"
  });
  event.shaped(item.of("dungeonsmod:ironslime_egg"), [
    ["techreborn:iron_dust", "fabric-furnaces:ethereal_furnace", "techreborn:iron_dust"],
    ["fabric-furnaces:ethereal_furnace", "minecraft:iron_block", "fabric-furnaces:ethereal_furnace"],
    ["techreborn:iron_dust", "fabric-furnaces:ethereal_furnace", "techreborn:iron_dust"],
  ]);

  // King
  event.remove({
    output: "dungeonsmod:king_egg"
  });
  event.shaped(item.of("dungeonsmod:king_egg"), [
    ["givemehats:crown", "terrarianslimes:king_slime_ball", "givemehats:crown"],
    ["terrarianslimes:king_slime_ball", "bosses_of_mass_destruction:blazing_eye", "terrarianslimes:king_slime_ball"],
    ["givemehats:crown", "bosses_of_mass_destruction:levitation_block", "givemehats:crown"],
  ]);

  // Kraken
  event.remove({
    output: "dungeonsmod:kraken_egg"
  });
  event.shaped(item.of("dungeonsmod:kraken_egg"), [
    ["minecraft:heart_of_the_sea", "bosses_of_mass_destruction:ancient_anima", "minecraft:heart_of_the_sea"],
    ["bosses_of_mass_destruction:obsidian_heart", "winged:heart_of_the_sky", "bosses_of_mass_destruction:obsidian_heart"],
    ["minecraft:heart_of_the_sea", "bosses_of_mass_destruction:ancient_anima", "minecraft:heart_of_the_sea"],
  ]);

  // Sun
  event.remove({
    output: "dungeonsmod:sun_egg"
  });
  event.shaped(item.of("dungeonsmod:sun_egg"), [
    ["ringsofascension:ring_health", "bosses_of_mass_destruction:obsidian_heart", "ringsofascension:ring_growth"],
    ["bosses_of_mass_destruction:obsidian_heart", "dungeonsmod:sun_overdrive", "bosses_of_mass_destruction:obsidian_heart"],
    ["ringsofascension:ring_mining", "bosses_of_mass_destruction:obsidian_heart", "ringsofascension:ring_wither"],
  ]);
})
