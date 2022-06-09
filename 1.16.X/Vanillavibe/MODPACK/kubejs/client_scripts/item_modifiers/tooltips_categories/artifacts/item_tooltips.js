//╔════════════════════════════════════════╗
//║        Copyright © 2021 CSS            ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
onEvent('item.tooltip', (event) => {
//╔════════════════════════════════════════╗
//║            ARTIFACT ITEMS              ║
//╚════════════════════════════════════════╝
  const recipes = [{
      items: [
        'artifacts:antidote_vessel',
        'artifacts:bunny_hoppers',
        'artifacts:cloud_in_a_bottle',
        'artifacts:cross_necklace',
        'artifacts:crystal_heart',
        'artifacts:digging_claws',
        'artifacts:eternal_steak',
        'artifacts:everlasting_beef',
        'artifacts:feral_claws',
        'artifacts:fire_gauntlet',
        'artifacts:flame_pendant',
        'artifacts:flippers',
        'artifacts:golden_hook',
        'artifacts:helium_flamingo',
        'artifacts:kitty_slippers',
        'artifacts:lucky_scarf',
        'artifacts:night_vision_goggles',
        'artifacts:novelty_drinking_hat',
        'artifacts:obsidian_skull',
        'artifacts:panic_necklace',
        'artifacts:plastic_drinking_hat',
        'artifacts:pocket_piston',
        'artifacts:power_glove',
        'artifacts:running_shoes',
        'artifacts:scarf_of_invisibility',
        'artifacts:shock_pendant',
        'artifacts:snorkel',
        'artifacts:steadfast_spikes',
        'artifacts:superstitious_hat',
        'artifacts:thorn_pendant',
        'artifacts:umbrella',
        'artifacts:universal_attractor',
        'artifacts:vampiric_glove',
        'artifacts:villager_hat',
        'artifacts:whoopee_cushion',
      ],
      text: [Text.of('Artifacts').white()]
    },
	
  //╔════════════════════════════════════════╗
  //║              RING ITEMS                ║
  //╚════════════════════════════════════════╝
    {
      items: [
	    'ringsofascension:ring_dolphin',
	    'ringsofascension:ring_experience',
        'ringsofascension:ring_fire_resistance',
        'ringsofascension:ring_flight',
        'ringsofascension:ring_growth',
        'ringsofascension:ring_health',
        'ringsofascension:ring_hungerless',
        'ringsofascension:ring_invisibility',
        'ringsofascension:ring_jump_boost',
        'ringsofascension:ring_knockback_resistance',
        'ringsofascension:ring_luck',
        'ringsofascension:ring_magnetism',
        'ringsofascension:ring_mining',
        'ringsofascension:ring_night_vision',
        'ringsofascension:ring_poison_resistance',
        'ringsofascension:ring_regeneration',
        'ringsofascension:ring_slow_falling',
        'ringsofascension:ring_slow_resistance',
        'ringsofascension:ring_speed',
        'ringsofascension:ring_sponge',
        'ringsofascension:ring_strength',
        'ringsofascension:ring_undying',
        'ringsofascension:ring_water_breathing',
        'ringsofascension:ring_water_walking',
        'ringsofascension:ring_wither',
      ],
      text: [Text.of('Artifacts').white()]
    },
  ];
  recipes.forEach((recipe) => {
    event.add(recipe.items, recipe.text);
  });
});
