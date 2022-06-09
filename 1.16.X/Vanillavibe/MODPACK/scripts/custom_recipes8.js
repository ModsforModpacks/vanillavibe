//╔════════════════════════════════════════╗
//║             CREATED BY CSS             ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {
	
	// Medievalweapons - DragonLoot Weapons missing //
	
  event.smithing('medievalweapons:dragon_small_axe', 'medievalweapons:netherite_small_axe', 'dragonloot:dragon_scale')
  event.smithing('medievalweapons:dragon_long_sword', 'medievalweapons:netherite_long_sword', 'dragonloot:dragon_scale')
  event.smithing('medievalweapons:dragon_dagger', 'medievalweapons:netherite_dagger', 'dragonloot:dragon_scale')
  event.smithing('medievalweapons:dragon_big_axe', 'medievalweapons:netherite_big_axe', 'dragonloot:dragon_scale')
  event.smithing('medievalweapons:dragon_lance', 'medievalweapons:netherite_lance', 'dragonloot:dragon_scale')
  event.smithing('medievalweapons:dragon_healing_staff', 'medievalweapons:netherite_healing_staff', 'dragonloot:dragon_scale')
  event.smithing('medievalweapons:dragon_mace', 'medievalweapons:netherite_mace', 'dragonloot:dragon_scale')
  event.smithing('medievalweapons:dragon_francisca', 'medievalweapons:netherite_francisca', 'dragonloot:dragon_scale')
  event.smithing('medievalweapons:dragon_javelin', 'medievalweapons:netherite_javelin', 'dragonloot:dragon_scale')  
  
  
	// Dungeon Weapoins // Katana //
	
	event.remove({ output: "mcdw:sword_katana" });
	event.shaped(item.of("mcdw:sword_katana"), [
	["null"                  , "null"                 , "minecraft:iron_ingot"],
	["null"                  , "minecraft:iron_ingot" , "null"                ],
	["campanion:wooden_rod"  , "null"                 , "null"                ],
	]);

	// Dungeon Weapoins // Bee Stinger rapier //
	
	event.remove({ output: "mcdw:sword_beestinger" });
	event.shaped(item.of("mcdw:sword_beestinger"), [
	["null"                , "minecraft:iron_ingot" , "beebetter:bee_stinger"],
	["minecraft:gold_ingot", "mcdw:sword_rapier"    , "minecraft:iron_ingot"],
	["minecraft:stick"     , "minecraft:gold_ingot" , "null"        ],
	]);
	
		// Medieval Weapons & Gate of Babylon - Daggers //
	
	event.remove({ output: "gateofbabylon:wooden_dagger" });
	event.shapeless('gateofbabylon:wooden_dagger', ['medievalweapons:wooden_dagger'])
	event.shapeless('medievalweapons:wooden_dagger', ['gateofbabylon:wooden_dagger'])

	event.remove({ output: "gateofbabylon:stone_dagger" });
	event.shapeless('gateofbabylon:stone_dagger', ['medievalweapons:stone_dagger'])
	event.shapeless('medievalweapons:stone_dagger', ['gateofbabylon:stone_dagger'])

	event.remove({ output: "gateofbabylon:iron_dagger" });
	event.shapeless('gateofbabylon:iron_dagger', ['medievalweapons:iron_dagger'])
	event.shapeless('medievalweapons:iron_dagger', ['gateofbabylon:iron_dagger'])

	event.remove({ output: "gateofbabylon:golden_dagger" });
	event.shapeless('gateofbabylon:golden_dagger', ['medievalweapons:golden_dagger'])
	event.shapeless('medievalweapons:golden_dagger', ['gateofbabylon:golden_dagger'])

	event.remove({ output: "gateofbabylon:diamond_dagger" });
	event.shapeless('gateofbabylon:diamond_dagger', ['medievalweapons:diamond_dagger'])
	event.shapeless('medievalweapons:diamond_dagger', ['gateofbabylon:diamond_dagger'])

	// Medieval Weapons - Lance & Javelins //
	
	event.remove({ output: "medievalweapons:wooden_lance" });
	event.shapeless('medievalweapons:wooden_lance', ['medievalweapons:wooden_javelin'])
	event.shapeless('medievalweapons:wooden_javelin', ['medievalweapons:wooden_lance'])

	event.remove({ output: "medievalweapons:stone_lance" });
	event.shapeless('medievalweapons:stone_lance', ['medievalweapons:stone_javelin'])
	event.shapeless('medievalweapons:stone_javelin', ['medievalweapons:stone_lance'])

	event.remove({ output: "medievalweapons:iron_lance" });
	event.shapeless('medievalweapons:iron_lance', ['medievalweapons:iron_javelin'])
	event.shapeless('medievalweapons:iron_javelin', ['medievalweapons:iron_lance'])

	event.remove({ output: "medievalweapons:golden_lance" });
	event.shapeless('medievalweapons:golden_lance', ['medievalweapons:golden_javelin'])
	event.shapeless('medievalweapons:golden_javelin', ['medievalweapons:golden_lance'])

	event.remove({ output: "medievalweapons:diamond_lance" });
	event.shapeless('medievalweapons:diamond_lance', ['medievalweapons:diamond_javelin'])
	event.shapeless('medievalweapons:diamond_javelin', ['medievalweapons:diamond_lance'])

	event.remove({ output: "medievalweapons:thallasium_lance" });
	event.shapeless('medievalweapons:thallasium_lance', ['medievalweapons:thallasium_javelin'])
	event.shapeless('medievalweapons:thallasium_javelin', ['medievalweapons:thallasium_lance'])

	event.remove({ output: "medievalweapons:aeternium_lance" });
	event.shapeless('medievalweapons:aeternium_lance', ['medievalweapons:aeternium_javelin'])
	event.shapeless('medievalweapons:aeternium_javelin', ['medievalweapons:aeternium_lance'])

	event.remove({ output: "medievalweapons:terminite_lance" });
	event.shapeless('medievalweapons:terminite_lance', ['medievalweapons:terminite_javelin'])
	event.shapeless('medievalweapons:terminite_javelin', ['medievalweapons:terminite_lance'])
	
	// Gate of Babylon - Broadswords //
	
	event.remove({ output: "gateofbabylon:diamond_broadsword" });
	event.shaped(item.of("gateofbabylon:diamond_broadsword"), [
	["null"                           , "null"             , "minecraft:diamond"],
	["minecraft:diamond"              , "minecraft:diamond", "null"             ],
	["gateofbabylon:extended_stick"   , "minecraft:diamond", "null"             ],
	]); 
	
	event.remove({ output: "gateofbabylon:golden_broadsword" });
	event.shaped(item.of("gateofbabylon:golden_broadsword"), [
	["null"                           , "null"                , "minecraft:gold_ingot"],
	["minecraft:gold_ingot"           , "minecraft:gold_ingot", "null"                ],
	["gateofbabylon:extended_stick"   , "minecraft:gold_ingot", "null"                ],
	]); 

	event.remove({ output: "gateofbabylon:iron_broadsword" });
	event.shaped(item.of("gateofbabylon:iron_broadsword"), [
	["null"                           , "null"                , "minecraft:iron_ingot"],
	["minecraft:iron_ingot"           , "minecraft:iron_ingot", "null"                ],
	["gateofbabylon:extended_stick"   , "minecraft:iron_ingot", "null"                ],
	]); 

	event.remove({ output: "gateofbabylon:stone_broadsword" });
	event.shaped(item.of("gateofbabylon:stone_broadsword"), [
	["null"                           , "null"                           , "#minecraft:stone_tool_materials"],
	["#minecraft:stone_tool_materials", "#minecraft:stone_tool_materials", "null"                           ],
	["gateofbabylon:extended_stick"   , "#minecraft:stone_tool_materials", "null"                           ],
	]); 

	event.remove({ output: "gateofbabylon:wooden_broadsword" });
	event.shaped(item.of("gateofbabylon:wooden_broadsword"), [
	["null"                         , "null"             , "#minecraft:planks"],
	["#minecraft:planks"            , "#minecraft:planks", "null"             ],
	["gateofbabylon:extended_stick" , "#minecraft:planks", "null"             ],
	]); 

	// Gate of Babylon - Haladie & Staff of Healings //
	
	event.remove({ output: "gateofbabylon:diamond_haladie" });
	event.shaped(item.of("gateofbabylon:diamond_haladie"), [
	["null"             , "null"                        , "minecraft:diamond"],
	["null"             , "gateofbabylon:extended_stick", "null"             ],
	["minecraft:diamond", "null"                        , "null"             ],
	]);

	event.remove({ output: "gateofbabylon:golden_haladie" });
	event.shaped(item.of("gateofbabylon:golden_haladie"), [
	["null"                , "null"                        , "minecraft:gold_ingot"],
	["null"                , "gateofbabylon:extended_stick", "null"                ],
	["minecraft:gold_ingot", "null"                        , "null"                ],
	]);

	event.remove({ output: "gateofbabylon:iron_haladie" });
	event.shaped(item.of("gateofbabylon:iron_haladie"), [
	["null"                , "null"                        , "minecraft:iron_ingot"],
	["null"                , "gateofbabylon:extended_stick", "null"                ],
	["minecraft:iron_ingot", "null"                        , "null"                ],
	]);

	event.remove({ output: "gateofbabylon:stone_haladie" });
	event.shaped(item.of("gateofbabylon:stone_haladie"), [
	["null"                           , "null"                        , "#minecraft:stone_tool_materials"],
	["null"                           , "gateofbabylon:extended_stick", "null"                           ],
	["#minecraft:stone_tool_materials", "null"                        , "null"                           ],
	]);

	event.remove({ output: "gateofbabylon:wooden_haladie" });
	event.shaped(item.of("gateofbabylon:wooden_haladie"), [
	["null"             , "null"                        , "#minecraft:planks"],
	["null"             , "gateofbabylon:extended_stick", "null"             ],
	["#minecraft:planks", "null"                        , "null"             ],
	]);
	
		// Sleeping Bags //
	
	event.remove({ output: "comforts:sleeping_bag_black" });
	event.shaped(item.of("comforts:sleeping_bag_black"), [
	["minecraft:black_wool", "extrapieces:black_wool_slab", "extrapieces:black_wool_slab"],
	]);
	
	event.remove({ output: "comforts:sleeping_bag_white" });
	event.shaped(item.of("comforts:sleeping_bag_white"), [
	["minecraft:white_wool", "extrapieces:white_wool_slab", "extrapieces:white_wool_slab"],
	]);
	
	event.remove({ output: "comforts:sleeping_bag_cyan" });
	event.shaped(item.of("comforts:sleeping_bag_cyan"), [
	["minecraft:cyan_wool", "extrapieces:cyan_wool_slab", "extrapieces:cyan_wool_slab"],
	]);

	event.remove({ output: "comforts:sleeping_bag_pink" });
	event.shaped(item.of("comforts:sleeping_bag_pink"), [
	["minecraft:pink_wool", "extrapieces:pink_wool_slab", "extrapieces:pink_wool_slab"],
	]);

	event.remove({ output: "comforts:sleeping_bag_orange" });
	event.shaped(item.of("comforts:sleeping_bag_orange"), [
	["minecraft:orange_wool", "extrapieces:orange_wool_slab", "extrapieces:orange_wool_slab"],
	]);
	
	event.remove({ output: "comforts:sleeping_bag_yellow" });
	event.shaped(item.of("comforts:sleeping_bag_yellow"), [
	["minecraft:yellow_wool", "extrapieces:yellow_wool_slab", "extrapieces:yellow_wool_slab"],
	]);
	
	event.remove({ output: "comforts:sleeping_bag_red" });
	event.shaped(item.of("comforts:sleeping_bag_red"), [
	["minecraft:red_wool", "extrapieces:red_wool_slab", "extrapieces:red_wool_slab"],
	]);

	event.remove({ output: "comforts:sleeping_bag_gray" });
	event.shaped(item.of("comforts:sleeping_bag_gray"), [
	["minecraft:gray_wool", "extrapieces:gray_wool_slab", "extrapieces:gray_wool_slab"],
	]);

	event.remove({ output: "comforts:sleeping_bag_light_gray" });
	event.shaped(item.of("comforts:sleeping_bag_light_gray"), [
	["minecraft:light_gray_wool", "extrapieces:light_gray_wool_slab", "extrapieces:light_gray_wool_slab"],
	]);

	event.remove({ output: "comforts:sleeping_bag_light_blue" });
	event.shaped(item.of("comforts:sleeping_bag_light_blue"), [
	["minecraft:light_blue_wool", "extrapieces:light_blue_wool_slab", "extrapieces:light_blue_wool_slab"],
	]);

	event.remove({ output: "comforts:sleeping_bag_blue" });
	event.shaped(item.of("comforts:sleeping_bag_blue"), [
	["minecraft:blue_wool", "extrapieces:blue_wool_slab", "extrapieces:blue_wool_slab"],
	]);

	event.remove({ output: "comforts:sleeping_bag_brown" });
	event.shaped(item.of("comforts:sleeping_bag_brown"), [
	["minecraft:brown_wool", "extrapieces:brown_wool_slab", "extrapieces:brown_wool_slab"],
	]);

	event.remove({ output: "comforts:sleeping_bag_magenta" });
	event.shaped(item.of("comforts:sleeping_bag_magenta"), [
	["minecraft:magenta_wool", "extrapieces:magenta_wool_slab", "extrapieces:magenta_wool_slab"],
	]);

	event.remove({ output: "comforts:sleeping_bag_green" });
	event.shaped(item.of("comforts:sleeping_bag_green"), [
	["minecraft:green_wool", "extrapieces:green_wool_slab", "extrapieces:green_wool_slab"],
	]);

	event.remove({ output: "comforts:sleeping_bag_lime" });
	event.shaped(item.of("comforts:sleeping_bag_lime"), [
	["minecraft:lime_wool", "extrapieces:lime_wool_slab", "extrapieces:lime_wool_slab"],
	]);

	event.remove({ output: "comforts:sleeping_bag_purple" });
	event.shaped(item.of("comforts:sleeping_bag_purple"), [
	["minecraft:purple_wool", "extrapieces:purple_wool_slab", "extrapieces:purple_wool_slab"],
	]);
	
///////////////////////////////////////////////////////////////////////////////////////////////////////
console.info('Removed Erroring Entity')
events.listen('worldgen.remove', event => {
	event.removeSpawnsByID(spawns => {
		spawns.entities.values = [
                'entity.dungeonsmod.anthermite',
                'entity.dungeonsmod.rogue',
                'entity.dungeonsmod.mimic',
				'entity.dungeonsmod.slimond',
    ]
  })
})
///////////////////////////////////////////////////////////////////////////////////////////////////////
})