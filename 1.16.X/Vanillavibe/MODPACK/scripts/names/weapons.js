//__________________________________________________________________//
//                                                                  //
//                           C R E D I T                            //
//               https://github.com/szumaster/modpack               //
//                                                                  //
//__________________________________________________________________//
//                                                                  //
//                 This script was made by Team CSS                 //
//                       github.com/szumaster                       //
//                       github.com/vanillavibe                     //
//__________________________________________________________________//
onEvent('item.tooltip', (event) => {
	
const recipes = [
	{
		items: [			
			'crimsonmoon:bloodthirsty_bow',
			'dragonloot:dragon_bow',
			'emerald_tools:emerald_bow',
			'emerald_tools:obsidian_bow',
			'emerald_tools:ruby_bow',
			'emerald_tools:steel_bow',
			'gateofbabylon:diamond_bow',
			'gateofbabylon:golden_bow',
			'gateofbabylon:iron_bow',
			'gateofbabylon:netherite_bow',
			'gateofbabylon:stone_bow',
			'mcdw:bow_ancient_bow',
			'mcdw:bow_bonebow',
			'mcdw:bow_bubble_bow',
			'mcdw:bow_bubble_burster',
			'mcdw:bow_burst_gale_bow',
			'mcdw:bow_echo_of_the_valley',
			'mcdw:bow_elite_power_bow',
			'mcdw:bow_green_menace',
			'mcdw:bow_guardian_bow',
			'mcdw:bow_haunted_bow',
			'mcdw:bow_hunters_promise',
			'mcdw:bow_hunting_bow',
			'mcdw:bow_longbow',
			'mcdw:bow_lost_souls',
			'mcdw:bow_love_spell_bow',
			'mcdw:bow_masters_bow',
			'mcdw:bow_mechanical_shortbow',
			'mcdw:bow_nocturnal_bow',
			'mcdw:bow_pink_scoundrel',
			'mcdw:bow_power_bow',
			'mcdw:bow_purple_storm',
			'mcdw:bow_red_snake',
			'mcdw:bow_sabrewing',
			'mcdw:bow_shivering_bow',
			'mcdw:bow_shortbow',
			'mcdw:bow_snow_bow',
			'mcdw:bow_soul_bow',
			'mcdw:bow_trickbow',
			'mcdw:bow_wind_bow',
			'mcdw:bow_winters_touch',
			'medievalweapons:long_bow',
			'medievalweapons:recurve_bow',
			'minecraft:bow',
			'netherite_plus:netherite_bow',
			'dragonloot:dragon_crossbow',
			'mcdw:crossbow_auto_crossbow',
			'mcdw:crossbow_azure_seeker',
			'mcdw:crossbow_baby_crossbow',
			'mcdw:crossbow_burst_crossbow',
			'mcdw:crossbow_butterfly_crossbow',
			'mcdw:crossbow_cog_crossbow',
			'mcdw:crossbow_corrupted_crossbow',
			'mcdw:crossbow_doom_crossbow',
			'mcdw:crossbow_dual_crossbow',
			'mcdw:crossbow_exploding_crossbow',
			'mcdw:crossbow_feral_soul_crossbow',
			'mcdw:crossbow_firebolt_thrower',
			'mcdw:crossbow_harp_crossbow',
			'mcdw:crossbow_harpoon_crossbow',
			'mcdw:crossbow_heavy_crossbow',
			'mcdw:crossbow_imploding_crossbow',
			'mcdw:crossbow_lightning_harp_crossbow',
			'mcdw:crossbow_nautical_crossbow',
			'mcdw:crossbow_pride_of_the_piglins',
			'mcdw:crossbow_rapid_crossbow',
			'mcdw:crossbow_scatter_crossbow',
			'mcdw:crossbow_slayer_crossbow',
			'mcdw:crossbow_soul_crossbow',
			'mcdw:crossbow_soul_hunter_crossbow',
			'mcdw:crossbow_spellbound_crossbow',
			'mcdw:crossbow_the_slicer',
			'mcdw:crossbow_voidcaller_crossbow',
			'minecraft:crossbow',
			'netherite_plus:netherite_crossbow',
			'dragonloot:dragon_trident',
			'gateofbabylon:diamond_boomerang',
			'gateofbabylon:golden_boomerang',
			'gateofbabylon:iron_boomerang',
			'gateofbabylon:netherite_boomerang',
			'gateofbabylon:stone_boomerang',
			'gateofbabylon:wooden_boomerang',
			'minecraft:trident',
			'netherite_plus:netherite_trident',
			'campanion:diamond_spear',
			'campanion:golden_spear',
			'campanion:iron_spear',
			'campanion:netherite_spear',	
			'campanion:stone_spear',
			'campanion:wooden_spear',
			'gateofbabylon:diamond_spear',
			'gateofbabylon:golden_spear',
			'gateofbabylon:iron_spear',
			'gateofbabylon:netherite_spear',	
			'gateofbabylon:stone_spear',
			'gateofbabylon:wooden_spear',
			'musketmod:musket'
			],
			text: [Text.of('Ranged Weapons').gold()]
	},
	{
		items: [
			'gateofbabylon:wooden_yoyo',
			'gateofbabylon:stone_yoyo',
			'gateofbabylon:iron_yoyo',
			'gateofbabylon:golden_yoyo',
			'gateofbabylon:diamond_yoyo',
			'gateofbabylon:netherite_yoyo'
			],
			text: [Text.of('Toys').gold()]
	},
	{
		items: [
			'adabraniummod:adamantium_sword',
			'adabraniummod:nether_sword',
			'adabraniummod:oneshotium_sword',
			'adabraniummod:vibranium_sword',
			'alaskanativecraft:diamond_harpoon',
			'alaskanativecraft:golden_harpoon',
			'alaskanativecraft:iron_harpoon',
			'alaskanativecraft:netherite_harpoon',
			'alaskanativecraft:stone_harpoon',
			'alaskanativecraft:wooden_harpoon',
			'battletowers:key_sword',
			'betterend:aeternium_sword',
			'betterend:terminite_sword',
			'betterend:thallasium_sword',
			'byg:pendorite_battleaxe',
			'byg:pendorite_sword',
			'cdsam:bone_sword',
			'cdsam:flint_sword',
			'cdsam:netherrack_sword',
			'cdsam:sandstone_sword',
			'crimsonmoon:carnage',
			'crimsonmoon:crimson_bone_blade',
			'crimsonmoon:crimson_crusher',
			'crimsonmoon:rib_destroyer',		
			'gateofbabylon:diamond_broadsword',
			'gateofbabylon:diamond_dagger',
			'gateofbabylon:diamond_haladie',
			'gateofbabylon:diamond_katana',
			'gateofbabylon:diamond_rapier',
			'gateofbabylon:diamond_waraxe',
			'gateofbabylon:golden_broadsword',
			'gateofbabylon:golden_dagger',
			'gateofbabylon:golden_haladie',
			'gateofbabylon:golden_katana',
			'gateofbabylon:golden_rapier',
			'gateofbabylon:golden_waraxe',
			'gateofbabylon:iron_broadsword',
			'gateofbabylon:iron_dagger',
			'gateofbabylon:iron_haladie',
			'gateofbabylon:iron_katana',
			'gateofbabylon:iron_rapier',
			'gateofbabylon:iron_waraxe',
			'gateofbabylon:netherite_broadsword',
			'gateofbabylon:netherite_dagger',
			'gateofbabylon:netherite_haladie',
			'gateofbabylon:netherite_katana',
			'gateofbabylon:netherite_rapier',
			'gateofbabylon:netherite_waraxe',
			'gateofbabylon:stone_broadsword',
			'gateofbabylon:stone_dagger',
			'gateofbabylon:stone_haladie',
			'gateofbabylon:stone_katana',
			'gateofbabylon:stone_rapier',
			'gateofbabylon:stone_waraxe',
			'gateofbabylon:wooden_broadsword',
			'gateofbabylon:wooden_dagger',
			'gateofbabylon:wooden_haladie',
			'gateofbabylon:wooden_katana',
			'gateofbabylon:wooden_rapier',
			'gateofbabylon:wooden_waraxe',
			'mcdw:axe',
			'mcdw:axe_anchor',
			'mcdw:axe_cursed',
			'mcdw:axe_double',
			'mcdw:axe_encrusted_anchor',
			'mcdw:axe_firebrand',
			'mcdw:axe_highland',
			'mcdw:axe_whirlwind',
			'mcdw:dagger_chill_gale_knife',
			'mcdw:dagger_dagger',
			'mcdw:dagger_eternal_knife',
			'mcdw:dagger_fangs_of_frost',
			'mcdw:dagger_moon',
			'mcdw:dagger_resolute_tempest_knife',
			'mcdw:dagger_shear_dagger',
			'mcdw:dagger_soul_knife',
			'mcdw:dagger_tempest_knife',
			'mcdw:gauntlet_gauntlet',
			'mcdw:gauntlet_maulers',
			'mcdw:gauntlet_soul_fists',
			'mcdw:hammer_bone_cudgel',
			'mcdw:hammer_boneclub',
			'mcdw:hammer_flail',
			'mcdw:hammer_gravity',
			'mcdw:hammer_great',
			'mcdw:hammer_stormlander',
			'mcdw:hammer_suns_grace',
			'mcdw:sickle_frost_scythe',
			'mcdw:sickle_jailors_scythe',
			'mcdw:sickle_last_laugh_gold',
			'mcdw:sickle_last_laugh_silver',
			'mcdw:sickle_nightmares_bite',
			'mcdw:sickle_sickle',
			'mcdw:sickle_soul_scythe',
			'mcdw:spear_fortune',
			'mcdw:spear_glaive',
			'mcdw:spear_grave_bane',
			'mcdw:spear_spear',
			'mcdw:spear_venom_glaive',
			'mcdw:spear_whispering_spear',
			'mcdw:staff_battlestaff',
			'mcdw:staff_battlestaff_of_terror',
			'mcdw:staff_growing_staff',
			'mcdw:sword_beestinger',
			'mcdw:sword_broadsword',
			'mcdw:sword_broken_sawblade',
			'mcdw:sword_claymore',
			'mcdw:sword_coral_blade',
			'mcdw:sword_cutlass',
			'mcdw:sword_dancers_sword',
			'mcdw:sword_dark_katana',
			'mcdw:sword_diamond_sword_var',
			'mcdw:sword_freezing_foil',
			'mcdw:sword_frost_slayer',
			'mcdw:sword_great_axeblade',
			'mcdw:sword_hawkbrand',
			'mcdw:sword_heartstealer',
			'mcdw:sword_iron_sword_var',
			'mcdw:sword_katana',
			'mcdw:sword_masters_katana',
			'mcdw:sword_mechanized_sawblade',
			'mcdw:sword_nameless_blade',
			'mcdw:sword_rapier',
			'mcdw:sword_sponge_striker',
			'mcdw:sword_truthseeker',
			'medievalweapons.aeternium_small_axe',
			'medievalweapons.diamond_small_axe',
			'medievalweapons.dragon_small_axe',
			'medievalweapons.golden_small_axe',
			'medievalweapons.iron_small_axe',
			'medievalweapons.netherite_small_axe',
			'medievalweapons.stone_small_axe',
			'medievalweapons.terminite_small_axe',
			'medievalweapons.thallasium_small_axe',	
			'medievalweapons.wooden_small_axe',
			'medievalweapons:aeternium_big_axe',
			'medievalweapons:aeternium_dagger',
			'medievalweapons:aeternium_francisca',
			'medievalweapons:aeternium_healing_staff',
			'medievalweapons:aeternium_javelin',
			'medievalweapons:aeternium_lance',
			'medievalweapons:aeternium_long_sword',
			'medievalweapons:aeternium_mace',
			'medievalweapons:aeternium_small_axe',
			'medievalweapons:diamond_big_axe',
			'medievalweapons:diamond_dagger',
			'medievalweapons:diamond_francisca',
			'medievalweapons:diamond_healing_staff',
			'medievalweapons:diamond_javelin',
			'medievalweapons:diamond_lance',
			'medievalweapons:diamond_long_sword',
			'medievalweapons:diamond_mace',
			'medievalweapons:diamond_small_axe',
			'medievalweapons:golden_big_axe',
			'medievalweapons:golden_dagger',
			'medievalweapons:golden_francisca',
			'medievalweapons:golden_healing_staff',
			'medievalweapons:golden_javelin',
			'medievalweapons:golden_lance',
			'medievalweapons:golden_long_sword',
			'medievalweapons:golden_mace',
			'medievalweapons:golden_small_axe',
			'medievalweapons:iron_big_axe',
			'medievalweapons:iron_dagger',
			'medievalweapons:iron_francisca',
			'medievalweapons:iron_healing_staff',
			'medievalweapons:iron_javelin',
			'medievalweapons:iron_lance',
			'medievalweapons:iron_long_sword',
			'medievalweapons:iron_mace',
			'medievalweapons:iron_small_axe',
			'medievalweapons:netherite_big_axe',
			'medievalweapons:netherite_dagger',
			'medievalweapons:netherite_francisca',
			'medievalweapons:netherite_healing_staff',
			'medievalweapons:netherite_javelin',
			'medievalweapons:netherite_lance',
			'medievalweapons:netherite_long_sword',
			'medievalweapons:netherite_mace',
			'medievalweapons:netherite_small_axe',
			'medievalweapons:stone_big_axe',
			'medievalweapons:stone_dagger',
			'medievalweapons:stone_francisca',
			'medievalweapons:stone_healing_staff',
			'medievalweapons:stone_javelin',
			'medievalweapons:stone_lance',
			'medievalweapons:stone_long_sword',
			'medievalweapons:stone_mace',
			'medievalweapons:stone_small_axe',
			'medievalweapons:terminite_big_axe',
			'medievalweapons:terminite_dagger',
			'medievalweapons:terminite_francisca',
			'medievalweapons:terminite_healing_staff',
			'medievalweapons:terminite_javelin',
			'medievalweapons:terminite_lance',
			'medievalweapons:terminite_long_sword',
			'medievalweapons:terminite_mace',
			'medievalweapons:terminite_small_axe',
			'medievalweapons:thallasium_big_axe',
			'medievalweapons:thallasium_dagger',
			'medievalweapons:thallasium_francisca',
			'medievalweapons:thallasium_healing_staff',
			'medievalweapons:thallasium_javelin',
			'medievalweapons:thallasium_lance',
			'medievalweapons:thallasium_long_sword',
			'medievalweapons:thallasium_mace',
			'medievalweapons:thallasium_small_axe',
			'medievalweapons:thalleous_sword',
			'medievalweapons:wooden_big_axe',
			'medievalweapons:wooden_dagger',
			'medievalweapons:wooden_francisca',
			'medievalweapons:wooden_healing_staff',
			'medievalweapons:wooden_javelin',
			'medievalweapons:wooden_lance',
			'medievalweapons:wooden_long_sword',
			'medievalweapons:wooden_mace',
			'medievalweapons:wooden_small_axe',
			'minecraft:diamond_sword',
			'minecraft:golden_sword',
			'minecraft:iron_sword',
			'minecraft:netherite_sword',
			'minecraft:stone_sword',
			'minecraft:wooden_sword'
			],
			text: [Text.of('Meele Weapons').gold()]
	},
	{
		items: [
			'minecraft:shield',
			'netherite_plus:netherite_shield',
			'mcdw:shield_royal_guard',
			'mcdw:shield_vanguard',
			'gateofbabylon:golden_shield',
			'gateofbabylon:stone_shield',
			'gateofbabylon:netherite_shield',
			'gateofbabylon:iron_shield',
			'gateofbabylon:diamond_shield',
			],
			text: [Text.of('Defence').gold()]
	},
	];
			recipes.forEach((recipe) => {
			event.add(recipe.items, recipe.text);
			});
});


////////////////////////////////////////////////////////////////////////////////////////////////////////

// Bows //

tooltip.add(['crimsonmoon:bloodthirsty_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['dragonloot:dragon_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['emerald_tools:emerald_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['emerald_tools:obsidian_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['emerald_tools:ruby_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['emerald_tools:steel_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['gateofbabylon:diamond_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['gateofbabylon:golden_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['gateofbabylon:iron_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['gateofbabylon:netherite_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['gateofbabylon:stone_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_ancient_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_bonebow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_bubble_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_bubble_burster'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_burst_gale_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_echo_of_the_valley'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_elite_power_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_green_menace'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_guardian_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_haunted_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_hunters_promise'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_hunting_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_longbow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_lost_souls'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_love_spell_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_masters_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_mechanical_shortbow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_nocturnal_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_pink_scoundrel'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_power_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_purple_storm'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_red_snake'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_sabrewing'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_shivering_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_shortbow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_snow_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_soul_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_trickbow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_wind_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['mcdw:bow_winters_touch'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['medievalweapons:long_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['medievalweapons:recurve_bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['minecraft:bow'],[Text.of('Bows').color('#FFAA00')])
tooltip.add(['netherite_plus:netherite_bow'],[Text.of('Bows').color('#FFAA00')])

// Crossbows //

tooltip.add(['dragonloot:dragon_crossbow'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_auto_crossbow'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_azure_seeker'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_baby_crossbow'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_burst_crossbow'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_butterfly_crossbow'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_cog_crossbow'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_corrupted_crossbow'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_doom_crossbow'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_dual_crossbow'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_exploding_crossbow'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_feral_soul_crossbow'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_firebolt_thrower'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_harp_crossbow'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_harpoon_crossbow'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_heavy_crossbow'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_imploding_crossbow'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_lightning_harp_crossbow'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_nautical_crossbow'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_pride_of_the_piglins'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_rapid_crossbow'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_scatter_crossbow'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_slayer_crossbow'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_soul_crossbow'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_soul_hunter_crossbow'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_spellbound_crossbow'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_the_slicer'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['mcdw:crossbow_voidcaller_crossbow'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['minecraft:crossbow'],[Text.of('Crossbows').color('#FFAA00')])
tooltip.add(['netherite_plus:netherite_crossbow'],[Text.of('Crossbows').color('#FFAA00')])

// Throw Weapons //

tooltip.add(['dragonloot:dragon_trident'],[Text.of('Throwing Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:diamond_boomerang'],[Text.of('Throwing Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:golden_boomerang'],[Text.of('Throwing Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:iron_boomerang'],[Text.of('Throwing Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:netherite_boomerang'],[Text.of('Throwing Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:stone_boomerang'],[Text.of('Throwing Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:wooden_boomerang'],[Text.of('Throwing Weapons').color('#FFAA00')])
tooltip.add(['minecraft:trident'],[Text.of('Throwing Weapons').color('#FFAA00')])
tooltip.add(['netherite_plus:netherite_trident'],[Text.of('Throwing Weapons').color('#FFAA00')])

// Spears //

tooltip.add(['campanion:diamond_spear'],[Text.of('Throwing Weapons').color('#FFAA00')])
tooltip.add(['campanion:golden_spear'],[Text.of('Throwing Weapons').color('#FFAA00')])
tooltip.add(['campanion:iron_spear'],[Text.of('Throwing Weapons').color('#FFAA00')])
tooltip.add(['campanion:netherite_spear'],[Text.of('Throwing Weapons').color('#FFAA00')])	
tooltip.add(['campanion:stone_spear'],[Text.of('Throwing Weapons').color('#FFAA00')])
tooltip.add(['campanion:wooden_spear'],[Text.of('Throwing Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:diamond_spear'],[Text.of('Throwing Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:golden_spear'],[Text.of('Throwing Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:iron_spear'],[Text.of('Throwing Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:netherite_spear'],[Text.of('Throwing Weapons').color('#FFAA00')])	
tooltip.add(['gateofbabylon:stone_spear'],[Text.of('Throwing Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:wooden_spear'],[Text.of('Throwing Weapons').color('#FFAA00')])

// Shooting Weapons //

tooltip.add(['musketmod:musket'],[Text.of('Shooting Weapons').color('#FFAA00')])

// Toys //

tooltip.add(['gateofbabylon:wooden_yoyo'],[Text.of('Toys').color('#FFAA00')])
tooltip.add(['gateofbabylon:stone_yoyo'],[Text.of('Toys').color('#FFAA00')])
tooltip.add(['gateofbabylon:iron_yoyo'],[Text.of('Toys').color('#FFAA00')])
tooltip.add(['gateofbabylon:golden_yoyo'],[Text.of('Toys').color('#FFAA00')])
tooltip.add(['gateofbabylon:diamond_yoyo'],[Text.of('Toys').color('#FFAA00')])
tooltip.add(['gateofbabylon:netherite_yoyo'],[Text.of('Toys').color('#FFAA00')])

// Weapons //

tooltip.add(['adabraniummod:adamantium_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['adabraniummod:nether_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['adabraniummod:oneshotium_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['adabraniummod:vibranium_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['alaskanativecraft:diamond_harpoon'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['alaskanativecraft:golden_harpoon'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['alaskanativecraft:iron_harpoon'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['alaskanativecraft:netherite_harpoon'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['alaskanativecraft:stone_harpoon'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['alaskanativecraft:wooden_harpoon'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['battletowers:key_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['betterend:aeternium_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['betterend:terminite_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['betterend:thallasium_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['byg:pendorite_battleaxe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['byg:pendorite_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['cdsam:bone_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['cdsam:flint_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['cdsam:netherrack_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['cdsam:sandstone_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['crimsonmoon:carnage'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['crimsonmoon:crimson_bone_blade'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['crimsonmoon:crimson_crusher'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['crimsonmoon:rib_destroyer'],[Text.of('Weapons').color('#FFAA00')])		
tooltip.add(['dragonloot:dragon_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['emerald_tools:emerald_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['emerald_tools:obsidian_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['emerald_tools:ruby_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['emerald_tools:steel_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:diamond_broadsword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:diamond_dagger'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:diamond_haladie'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:diamond_katana'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:diamond_rapier'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:diamond_shield'],[Text.of('Defence Shield').color('#FFAA00')])
tooltip.add(['gateofbabylon:diamond_waraxe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:golden_broadsword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:golden_dagger'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:golden_haladie'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:golden_katana'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:golden_rapier'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:golden_shield'],[Text.of('Defence Shield').color('#FFAA00')])
tooltip.add(['gateofbabylon:golden_waraxe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:iron_broadsword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:iron_dagger'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:iron_haladie'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:iron_katana'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:iron_rapier'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:iron_shield'],[Text.of('Defence Shield').color('#FFAA00')])
tooltip.add(['gateofbabylon:iron_waraxe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:netherite_broadsword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:netherite_dagger'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:netherite_haladie'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:netherite_katana'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:netherite_rapier'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:netherite_shield'],[Text.of('Defence Shield').color('#FFAA00')])
tooltip.add(['gateofbabylon:netherite_waraxe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:stone_broadsword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:stone_dagger'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:stone_haladie'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:stone_katana'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:stone_rapier'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:stone_shield'],[Text.of('Defence Shield').color('#FFAA00')])
tooltip.add(['gateofbabylon:stone_waraxe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:wooden_broadsword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:wooden_dagger'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:wooden_haladie'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:wooden_katana'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:wooden_rapier'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['gateofbabylon:wooden_waraxe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:axe_anchor'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:axe_cursed'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:axe_double'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:axe_encrusted_anchor'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:axe_firebrand'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:axe_highland'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:axe_whirlwind'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:dagger_chill_gale_knife'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:dagger_dagger'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:dagger_eternal_knife'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:dagger_fangs_of_frost'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:dagger_moon'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:dagger_resolute_tempest_knife'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:dagger_shear_dagger'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:dagger_soul_knife'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:dagger_tempest_knife'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:gauntlet_gauntlet'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:gauntlet_maulers'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:gauntlet_soul_fists'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:hammer_bone_cudgel'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:hammer_boneclub'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:hammer_flail'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:hammer_gravity'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:hammer_great'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:hammer_stormlander'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:hammer_suns_grace'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:shield_royal_guard'],[Text.of('Defence Shield').color('#FFAA00')])
tooltip.add(['mcdw:shield_vanguard'],[Text.of('Defence Shield').color('#FFAA00')])
tooltip.add(['mcdw:sickle_frost_scythe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sickle_jailors_scythe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sickle_last_laugh_gold'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sickle_last_laugh_silver'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sickle_nightmares_bite'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sickle_sickle'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sickle_soul_scythe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:spear_fortune'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:spear_glaive'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:spear_grave_bane'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:spear_spear'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:spear_venom_glaive'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:spear_whispering_spear'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:staff_battlestaff'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:staff_battlestaff_of_terror'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:staff_growing_staff'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sword_beestinger'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sword_broadsword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sword_broken_sawblade'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sword_claymore'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sword_coral_blade'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sword_cutlass'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sword_dancers_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sword_dark_katana'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sword_diamond_sword_var'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sword_freezing_foil'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sword_frost_slayer'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sword_great_axeblade'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sword_hawkbrand'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sword_heartstealer'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sword_iron_sword_var'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sword_katana'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sword_masters_katana'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sword_mechanized_sawblade'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sword_nameless_blade'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sword_rapier'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sword_sponge_striker'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['mcdw:sword_truthseeker'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons.aeternium_small_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons.diamond_small_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons.dragon_small_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons.golden_small_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons.iron_small_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons.netherite_small_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons.stone_small_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons.terminite_small_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons.thallasium_small_axe'],[Text.of('Weapons').color('#FFAA00')])	
tooltip.add(['medievalweapons.wooden_small_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:aeternium_big_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:aeternium_dagger'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:aeternium_francisca'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:aeternium_healing_staff'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:aeternium_javelin'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:aeternium_lance'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:aeternium_long_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:aeternium_mace'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:aeternium_small_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:diamond_big_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:diamond_dagger'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:diamond_francisca'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:diamond_healing_staff'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:diamond_javelin'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:diamond_lance'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:diamond_long_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:diamond_mace'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:diamond_small_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:golden_big_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:golden_dagger'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:golden_francisca'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:golden_healing_staff'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:golden_javelin'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:golden_lance'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:golden_long_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:golden_mace'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:golden_small_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:iron_big_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:iron_dagger'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:iron_francisca'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:iron_healing_staff'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:iron_javelin'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:iron_lance'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:iron_long_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:iron_mace'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:iron_small_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:netherite_big_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:netherite_dagger'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:netherite_francisca'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:netherite_healing_staff'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:netherite_javelin'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:netherite_lance'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:netherite_long_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:netherite_mace'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:netherite_small_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:stone_big_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:stone_dagger'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:stone_francisca'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:stone_healing_staff'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:stone_javelin'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:stone_lance'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:stone_long_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:stone_mace'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:stone_small_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:terminite_big_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:terminite_dagger'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:terminite_francisca'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:terminite_healing_staff'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:terminite_javelin'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:terminite_lance'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:terminite_long_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:terminite_mace'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:terminite_small_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:thallasium_big_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:thallasium_dagger'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:thallasium_francisca'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:thallasium_healing_staff'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:thallasium_javelin'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:thallasium_lance'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:thallasium_long_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:thallasium_mace'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:thallasium_small_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:thalleous_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:wooden_big_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:wooden_dagger'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:wooden_francisca'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:wooden_healing_staff'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:wooden_javelin'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:wooden_lance'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:wooden_long_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:wooden_mace'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['medievalweapons:wooden_small_axe'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['minecraft:diamond_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['minecraft:golden_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['minecraft:iron_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['minecraft:netherite_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['minecraft:stone_sword'],[Text.of('Weapons').color('#FFAA00')])
tooltip.add(['minecraft:wooden_sword'],[Text.of('Weapons').color('#FFAA00')])

// Shields //

tooltip.add(['minecraft:shield'],[Text.of('Defence Shield').color('#FFAA00')])
tooltip.add(['netherite_plus:netherite_shield'],[Text.of('Defence Shield').color('#FFAA00')])

})