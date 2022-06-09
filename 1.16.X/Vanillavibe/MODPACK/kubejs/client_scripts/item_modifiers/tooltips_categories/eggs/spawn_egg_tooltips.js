//╔════════════════════════════════════════╗
//║            CREATED BY CSS              ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
onEvent('item.tooltip', (event) => {

  const recipes = [{
    items: [
      'agape_space:space_cat',
      'alaskanativecraft:moose_spawn_egg',
      'alaskanativecraft:ptarmigan_spawn_egg',
      'alaskanativecraft:seal_spawn_egg',
      'aqupd:caracal_spawn_egg',
      'aqupd:grizzly_bear_spawn_egg',
      'artifacts:mimic_spawn_egg',
      'battletowers:tower_guardian_spawn_egg',
      'betterend:spawn_egg_cubozoa',
      'betterend:spawn_egg_dragonfly',
      'betterend:spawn_egg_end_fish',
      'betterend:spawn_egg_end_slime',
      'betterend:spawn_egg_shadow_walker',
      'betterend:spawn_egg_silk_moth',
      'biomemakeover:blightbat_spawn_egg',
      'biomemakeover:cowboy_spawn_egg',
      'biomemakeover:decayed_spawn_egg',
      'biomemakeover:dragonfly_spawn_egg',
      'biomemakeover:ghost_spawn_egg',
      'biomemakeover:giant_slime_spawn_egg',
      'biomemakeover:glowfish_spawn_egg',
      'biomemakeover:lightning_bug_spawn_egg',
      'biomemakeover:moth_spawn_egg',
      'biomemakeover:mushroom_trader_spawn_egg',
      'biomemakeover:owl_spawn_egg',
      'biomemakeover:rootling_spawn_egg',
      'biomemakeover:scuttler_spawn_egg',
      'biomemakeover:tadpole_spawn_egg',
      'biomemakeover:toad_spawn_egg',
      'charm:coral_squid_spawn_egg',
      'desolation:ash_scuttler_spawn_egg',
      'desolation:blackened_spawn_egg',
      'dungeonsmod:anthermite_egg',
      'dungeonsmod:crow_egg',
      'dungeonsmod:deadhound_egg',
      'dungeonsmod:leech_egg',
      'dungeonsmod:lordskeleton_egg',
      'dungeonsmod:mimic_egg',
      'dungeonsmod:notehead_egg',
      'dungeonsmod:pice_egg',
      'dungeonsmod:piranha_egg',
      'dungeonsmod:pitcher_egg',
      'dungeonsmod:rogue_egg',
      'dungeonsmod:scientist_egg',
      'dungeonsmod:slimewolf_egg',
      'dungeonsmod:slimond_egg',
      'minecraft:bat_spawn_egg',
      'minecraft:bee_spawn_egg',
      'minecraft:blaze_spawn_egg',
      'minecraft:cat_spawn_egg',
      'minecraft:cave_spider_spawn_egg',
      'minecraft:chicken_spawn_egg',
      'minecraft:cod_spawn_egg',
      'minecraft:cow_spawn_egg',
      'minecraft:creeper_spawn_egg',
      'minecraft:dolphin_spawn_egg',
      'minecraft:donkey_spawn_egg',
      'minecraft:drowned_spawn_egg',
      'minecraft:elder_guardian_spawn_egg',
      'minecraft:enderman_spawn_egg',
      'minecraft:endermite_spawn_egg',
      'minecraft:evoker_spawn_egg',
      'minecraft:fox_spawn_egg',
      'minecraft:ghast_spawn_egg',
      'minecraft:guardian_spawn_egg',
      'minecraft:hoglin_spawn_egg',
      'minecraft:horse_spawn_egg',
      'minecraft:husk_spawn_egg',
      'minecraft:llama_spawn_egg',
      'minecraft:magma_cube_spawn_egg',
      'minecraft:mooshroom_spawn_egg',
      'minecraft:mule_spawn_egg',
      'minecraft:ocelot_spawn_egg',
      'minecraft:panda_spawn_egg',
      'minecraft:parrot_spawn_egg',
      'minecraft:phantom_spawn_egg',
      'minecraft:pig_spawn_egg',
      'minecraft:piglin_brute_spawn_egg',
      'minecraft:piglin_spawn_egg',
      'minecraft:pillager_spawn_egg',
      'minecraft:polar_bear_spawn_egg',
      'minecraft:pufferfish_spawn_egg',
      'minecraft:rabbit_spawn_egg',
      'minecraft:ravager_spawn_egg',
      'minecraft:salmon_spawn_egg',
      'minecraft:sheep_spawn_egg',
      'minecraft:shulker_spawn_egg',
      'minecraft:silverfish_spawn_egg',
      'minecraft:skeleton_horse_spawn_egg',
      'minecraft:skeleton_spawn_egg',
      'minecraft:slime_spawn_egg',
      'minecraft:spider_spawn_egg',
      'minecraft:squid_spawn_egg',
      'minecraft:stray_spawn_egg',
      'minecraft:strider_spawn_egg',
      'minecraft:trader_llama_spawn_egg',
      'minecraft:tropical_fish_spawn_egg',
      'minecraft:turtle_egg',
      'minecraft:turtle_spawn_egg',
      'minecraft:vex_spawn_egg',
      'minecraft:villager_spawn_egg',
      'minecraft:vindicator_spawn_egg',
      'minecraft:wandering_trader_spawn_egg',
      'minecraft:witch_spawn_egg',
      'minecraft:wither_skeleton_spawn_egg',
      'minecraft:wolf_spawn_egg',
      'minecraft:zoglin_spawn_egg',
      'minecraft:zombie_horse_spawn_egg',
      'minecraft:zombie_spawn_egg',
      'minecraft:zombie_villager_spawn_egg',
      'minecraft:zombified_piglin_spawn_egg',
      'promenade:duck_spawn_egg',
      'ratsmischief:rat_spawn_egg',
      'terrarianslimes:baby_slime_spawn_egg',
      'terrarianslimes:black_slime_spawn_egg',
      'terrarianslimes:blue_slime_spawn_egg',
      'terrarianslimes:corrupt_slime_spawn_egg',
      'terrarianslimes:crimslime_spawn_egg',
      'terrarianslimes:green_slime_spawn_egg',
      'terrarianslimes:ice_slime_spawn_egg',
      'terrarianslimes:illuminant_slime_spawn_egg',
      'terrarianslimes:jungle_slime_spawn_egg',
      'terrarianslimes:lava_slime_spawn_egg',
      'terrarianslimes:mother_slime_spawn_egg',
      'terrarianslimes:pinky_spawn_egg',
      'terrarianslimes:purple_slime_spawn_egg',
      'terrarianslimes:rainbow_slime_spawn_egg',
      'terrarianslimes:red_slime_spawn_egg',
      'terrarianslimes:sand_slime_spawn_egg',
      'terrarianslimes:slimeling_spawn_egg',
      'terrarianslimes:spiked_ice_slime_spawn_egg',
      'terrarianslimes:spiked_jungle_slime_spawn_egg',
      'terrarianslimes:spiked_slime_spawn_egg',
      'terrarianslimes:umbrella_slime_spawn_egg',
      'terrarianslimes:yellow_slime_spawn_egg',
      'untitledduckmod:duck_spawn_egg',
      'untitledduckmod:goose_spawn_egg',
      'bewitchment:baphomet_spawn_egg',
      'bewitchment:demon_spawn_egg',
      'bewitchment:ghost_spawn_egg',
      'bewitchment:hellhound_spawn_egg',
      'bewitchment:herne_spawn_egg',
      'bewitchment:leonard_spawn_egg',
      'bewitchment:lilith_spawn_egg',
      'bewitchment:owl_spawn_egg',
      'bewitchment:raven_spawn_egg',
      'bewitchment:snake_spawn_egg',
      'bewitchment:toad_spawn_egg',
      'bewitchment:vampire_spawn_egg',
      'bewitchment:werewolf_spawn_egg',
      'graveyard:skeleton_creeper_spawn_egg',
    ],
    text: [Text.of("Craftable").white()]
  }];

  recipes.forEach((recipe) => {
    event.add(recipe.items, recipe.text);
  });
});
