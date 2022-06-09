//╔════════════════════════════════════════╗
//║         Copyright © 2022 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {
// Ceremonial knife

event.remove({ output: "sandwichable:kitchen_knife" });
event.shaped(item.of("sandwichable:kitchen_knife"), [
["minecraft:iron_nugget"],
["minecraft:iron_nugget"],
["adorn:stone_rod"],
]);

// Iron Machete //

event.shaped(item.of("harvest_scythes:iron_machete"), [
["minecraft:iron_ingot", "minecraft:iron_ingot", "null"],
["null"			       , "minecraft:iron_ingot", "null"],
["null"				   , "minecraft:stick"     , "null"],
]);

// Iron Scythe //

event.shaped(item.of("harvest_scythes:iron_scythe"), [
["minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:iron_ingot"],
["null"			       , "null"				   , "minecraft:stick"     ],
["null"				   , "null"     		   , "minecraft:stick"     ],
]);

// Iron Hammer //

event.shaped(item.of("vanilla-hammers:iron_hammer"), [
["pigsteel:pigsteel_block", "pigsteel:pigsteel_ingot", "pigsteel:pigsteel_block"],
["null", "minecraft:stick", "null"],
["null", "minecraft:stick", "null"],
]);

// Fiery Hammer //

event.remove({ output: "vanilla-hammers:fiery_hammer" });	
event.shaped(item.of("vanilla-hammers:fiery_hammer"), [
["minecraft:magma_block", "minecraft:magma_block", "minecraft:magma_block"],
["null", "adabraniummod:obsidian_rod", "null"],
["null", "adabraniummod:obsidian_rod", "null"],
]);

// Obsidian Hammer //

event.remove({ output: "vanilla-hammers:obsidian_hammer" });	
event.shaped(item.of("vanilla-hammers:obsidian_hammer"), [
["minecraft:obsidian", "minecraft:obsidian", "minecraft:obsidian"],
["null", "adabraniummod:obsidian_rod", "null"],
["null", "adabraniummod:obsidian_rod", "null"],
]);

// Diamond Hammer //

event.remove({ output: "vanilla-hammers:diamond_hammer" });	
event.shaped(item.of("vanilla-hammers:diamond_hammer"), [
["minecraft:diamond_block", "minecraft:diamond", "minecraft:diamond_block"],
["null", "adorn:stone_rod", "null"],
["null", "adorn:stone_rod", "null"],
]);

// Stone Hammer //
	
event.remove({ output: "vanilla-hammers:stone_hammer" });	
event.shaped(item.of("vanilla-hammers:stone_hammer"), [
["#c:stone", "#c:stone"       , "#c:stone"],
["null"    , "adorn:stone_rod", "null"    ],
["null"    , "adorn:stone_rod", "null"    ],
]);

// Ender Hammer //
	
event.remove({ output: "vanilla-hammers:ender_hammer" });	
event.shaped(item.of("vanilla-hammers:ender_hammer"), [
["minecraft:end_stone_bricks", "minecraft:dragon_head", "minecraft:end_stone_bricks"],
["null", "adabraniummod:obsidian_rod", "null"],
["null", "adabraniummod:obsidian_rod", "null"],
]);	

// Iron Excavator //

event.shaped(item.of("vanillaexcavators:iron_excavator"), [
["null"					  , "pigsteel:pigsteel_ingot", "null"					],
["pigsteel:pigsteel_block", "minecraft:stick"		 , "pigsteel:pigsteel_block"],
["null"					  , "minecraft:stick"		 , "null"					],
]);

// Fiery Excavator //

event.remove({ output: "vanillaexcavators:fiery_excavator" });	
event.shaped(item.of("vanillaexcavators:fiery_excavator"), [
["null"                 , "minecraft:magma_block"     , "null"				   ],
["minecraft:magma_block", "adabraniummod:obsidian_rod", "minecraft:magma_block"],
["null"                 , "adabraniummod:obsidian_rod", "null"				   ],
]);

// Obsidian Excavator //

event.remove({ output: "vanillaexcavators:obsidian_excavator" });	
event.shaped(item.of("vanillaexcavators:obsidian_excavator"), [
["null"		  , "#c:obsidian"		        , "null"       ],
["#c:obsidian", "adabraniummod:obsidian_rod", "#c:obsidian"],
["null"       , "adabraniummod:obsidian_rod", "null"       ],
]);

// Diamond Excavator //

event.remove({ output: "vanillaexcavators:diamond_excavator" });	
event.shaped(item.of("vanillaexcavators:diamond_excavator"), [
["null"				   	  , "minecraft:diamond", "null"                   ],
["minecraft:diamond_block", "adorn:stone_rod"  , "minecraft:diamond_block"],
["null"					  , "adorn:stone_rod"  , "null"                   ],
]);

// Stone Excavator //

event.remove({ output: "vanillaexcavators:stone_excavator" });	
event.shaped(item.of("vanillaexcavators:stone_excavator"), [
["null"    , "#c:stone"	      , "null"    ],
["#c:stone", "adorn:stone_rod", "#c:stone"],
["null"	   , "adorn:stone_rod", "null"    ],
]);

// Ender Excavator //

event.remove({ output: "vanillaexcavators:ender_excavator" });	
event.shaped(item.of("vanillaexcavators:ender_excavator"), [
["null"						 , "minecraft:dragon_head"	   , "null"                      ],
["minecraft:end_stone_bricks", "adabraniummod:obsidian_rod", "minecraft:end_stone_bricks"],
["null"						 , "adabraniummod:obsidian_rod", "null"                      ],
]);	

// Ethereal Furnace //

event.shapeless('fabric-furnaces:iron_furnace', ['fabric-furnaces:crystal_iron_furnace'])
event.shapeless('fabric-furnaces:ethereal_furnace', ['fabric-furnaces:crystal_ethereal_furnace'])

event.shaped(item.of("fabric-furnaces:crystal_ethereal_furnace"), [
["#c:glass", "#c:glass"                         , "#c:glass"],
["#c:glass", "fabric-furnaces:ethereal_furnace" , "#c:glass"],
["#c:glass", "#c:glass"                         , "#c:glass"],
]);	

event.remove({ output: "fabric-furnaces:ethereal_furnace" });
event.shaped(item.of("fabric-furnaces:ethereal_furnace"), [
["charm:smooth_glowstone"   , "minecraft:dragon_head"      , "charm:smooth_glowstone"   ],
["minecraft:netherite_block", "blockus:nether_stars_block" , "minecraft:netherite_block"],
["minecraft:sea_lantern"    , "fabric-furnaces:end_furnace", "minecraft:sea_lantern"    ],
]);	

// Steel Furnace //

event.remove({ output: "fabric-furnaces:crystal_iron_furnace" });
event.shaped(item.of("fabric-furnaces:crystal_iron_furnace"), [
["#c:glass", "#c:glass"                     , "#c:glass"],
["#c:glass", "fabric-furnaces:iron_furnace" , "#c:glass"],
["#c:glass", "#c:glass"                     , "#c:glass"],
]);	

event.remove({ output: "fabric-furnaces:iron_furnace" });
event.shaped(item.of("fabric-furnaces:iron_furnace"), [
["pigsteel:pigsteel_ingot", "pigsteel:pigsteel_ingot"       , "pigsteel:pigsteel_ingot"],
["pigsteel:pigsteel_ingot", "fabric-furnaces:fabric_furnace", "pigsteel:pigsteel_ingot"],
["pigsteel:pigsteel_ingot", "pigsteel:pigsteel_ingot"       , "pigsteel:pigsteel_ingot"],
]);		

// Glass variants //

event.remove({ output: "fabric-furnaces:crystal_gold_furnace" });
event.shaped(item.of("fabric-furnaces:crystal_gold_furnace"), [
["#c:glass", "#c:glass"                     , "#c:glass"],
["#c:glass", "fabric-furnaces:gold_furnace" , "#c:glass"],
["#c:glass", "#c:glass"                     , "#c:glass"],
]);	

event.remove({ output: "fabric-furnaces:crystal_diamond_furnace" });
event.shaped(item.of("fabric-furnaces:crystal_diamond_furnace"), [
["#c:glass", "#c:glass"                        , "#c:glass"],
["#c:glass", "fabric-furnaces:diamond_furnace" , "#c:glass"],
["#c:glass", "#c:glass"                        , "#c:glass"],
]);	

event.remove({ output: "fabric-furnaces:crystal_emerald_furnace" });
event.shaped(item.of("fabric-furnaces:crystal_emerald_furnace"), [
["#c:glass", "#c:glass"                        , "#c:glass"],
["#c:glass", "fabric-furnaces:emerald_furnace" , "#c:glass"],
["#c:glass", "#c:glass"                        , "#c:glass"],
]);	

event.remove({ output: "fabric-furnaces:crystal_nether_furnace" });
event.shaped(item.of("fabric-furnaces:crystal_nether_furnace"), [
["#c:glass", "#c:glass"                       , "#c:glass"],
["#c:glass", "fabric-furnaces:nether_furnace" , "#c:glass"],
["#c:glass", "#c:glass"                       , "#c:glass"],
]);	

event.remove({ output: "fabric-furnaces:crystal_obsidian_furnace" });
event.shaped(item.of("fabric-furnaces:crystal_obsidian_furnace"), [
["#c:glass"   , "#c:glass"                      , "#c:glass"],
["#c:glass", "fabric-furnaces:obsidian_furnace" , "#c:glass"],
["#c:glass"    , "#c:glass"                     , "#c:glass"],
]);	

event.remove({ output: "fabric-furnaces:crystal_end_furnace" });
event.shaped(item.of("fabric-furnaces:crystal_end_furnace"), [
["#c:glass", "#c:glass"      		       , "#c:glass"],
["#c:glass", "fabric-furnaces:end_furnace" , "#c:glass"],
["#c:glass", "#c:glass"                    , "#c:glass"],
]);	

event.remove({ output: "fabric-furnaces:crystal_fabric_furnace" });
event.shaped(item.of("fabric-furnaces:crystal_fabric_furnace"), [
["#c:glass", "#c:glass"                       , "#c:glass"],
["#c:glass", "fabric-furnaces:fabric_furnace" , "#c:glass"],
["#c:glass", "#c:glass"                       , "#c:glass"],
]);	

// Battletower Key //

event.remove({ output: "battletowers:boss_key"});
event.shaped(item.of("battletowers:boss_key"), [
["minecraft:gold_block" , "null", "null"],
["minecraft:gold_nugget", "null", "null"],
["minecraft:gold_ingot" , "null", "null"],
]);

// Staff of Buildings - Diamond //

event.remove({ output: "staffofbuilding:diamond_builder_staff" });
event.shaped(item.of("staffofbuilding:diamond_builder_staff"), [
["null"                , "null"           , "minecraft:diamond"],
["null"                , "adorn:stone_rod", "null"             ],
["adorn:stone_rod"     , "null"           , "null"             ],
]); 

// Staff of Buildings - Golden //

event.remove({ output: "staffofbuilding:golden_builder_staff" });
event.shaped(item.of("staffofbuilding:golden_builder_staff"), [
["null"                , "null"           , "minecraft:gold_ingot"],
["null"                , "adorn:stone_rod", "null"                ],
["adorn:stone_rod"     , "null"           , "null"                ],
]);

// Staff of Buildings - Iron //

event.remove({ output: "staffofbuilding:iron_builder_staff" });
event.shaped(item.of("staffofbuilding:iron_builder_staff"), [
["null"                , "null"           , "minecraft:iron_ingot"],
["null"                , "adorn:stone_rod", "null"                ],
["adorn:stone_rod"     , "null"           , "null"                ],
]); 

// Staff of Buildings - Stone //

event.remove({ output: "staffofbuilding:stone_builder_staff" });
event.shaped(item.of("staffofbuilding:stone_builder_staff"), [
["null"                , "null"           , "#c:stone"],
["null"                , "adorn:stone_rod", "null"    ],
["adorn:stone_rod"     , "null"           , "null"    ],
]);

// Staff of Buildings - Wooden //

event.remove({ output: "staffofbuilding:wooden_builder_staff" });
event.shaped(item.of("staffofbuilding:wooden_builder_staff"), [
["null"                                , "null"                           , "#minecraft:planks"],
["null"                                , "betterend:leather_wrapped_stick", "null"             ],
["betterend:leather_wrapped_stick"     , "null"                           , "null"             ],
]); 

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

// Dungeon Weapoins - Katana //

event.remove({ output: "mcdw:sword_katana" });
event.shaped(item.of("mcdw:sword_katana"), [
["null"                  , "null"                 , "minecraft:iron_ingot"],
["null"                  , "minecraft:iron_ingot" , "null"                ],
["campanion:wooden_rod"  , "null"                 , "null"                ],
]);

// Dungeon Weapoins - Bee Stinger rapier //

event.remove({ output: "mcdw:sword_beestinger" });
event.shaped(item.of("mcdw:sword_beestinger"), [
["null"                , "minecraft:iron_ingot" , "mysticalagriculture:honey_essence"],
["minecraft:gold_ingot", "mcdw:sword_rapier"    , "minecraft:iron_ingot" ],
["minecraft:stick"     , "minecraft:gold_ingot" , "null"                 ],
]);

// Medieval Weapons & Gate of Babylon - Daggers //

event.remove({ output: "gateofbabylon:wooden_dagger" });
event.shaped(item.of("gateofbabylon:wooden_dagger"), [
["#minecraft:logs", "null" , "null"],
["betterend:leather_wrapped_stick", "null" , "null"],
["null"           , "null" , "null"],
]);	

event.remove({ output: "gateofbabylon:stone_dagger" });
event.shaped(item.of("gateofbabylon:stone_dagger"), [
["#c:stone"       , "null" , "null"],
["betterend:leather_wrapped_stick", "null" , "null"],
["null"           , "null" , "null"],
]);	

event.remove({ output: "gateofbabylon:iron_dagger" });
event.shaped(item.of("gateofbabylon:iron_dagger"), [
["minecraft:iron_ingot", "null" , "null"],
["adorn:stone_rod"     , "null" , "null"],
["null"                , "null" , "null"],
]);	

event.remove({ output: "gateofbabylon:iron_dagger" });	
event.shaped(item.of("gateofbabylon:iron_dagger"), [
["pigsteel:pigsteel_ingot", "null" , "null"],
["adorn:stone_rod"        , "null" , "null"],
["null"                   , "null" , "null"],
]);	

event.remove({ output: "gateofbabylon:golden_dagger" });
event.shaped(item.of("gateofbabylon:golden_dagger"), [
["minecraft:gold_ingot", "null" , "null"],
["adorn:stone_rod"     , "null" , "null"],
["null"                , "null" , "null"],
]);	

event.remove({ output: "gateofbabylon:diamond_dagger" });
event.shaped(item.of("gateofbabylon:diamond_dagger"), [
["minecraft:diamond", "null" , "null"],
["adorn:stone_rod"     , "null" , "null"],
["null"                , "null" , "null"],
]);	

// Medieval Weapons - Lances //

event.remove({ output: "medievalweapons:wooden_lance" });
event.shaped(item.of("medievalweapons:wooden_lance"), [
["null"                  , "null"                 , "#minecraft:logs"],
["null"                  , "campanion:wooden_rod" , "null"           ],
["campanion:wooden_rod"  , "null"                 , "null"           ],
]);	

event.remove({ output: "medievalweapons:stone_lance" });
event.shaped(item.of("medievalweapons:stone_lance"), [
["null"                  , "null"                 , "#c:stone"],
["null"                  , "campanion:wooden_rod" , "null"    ],
["campanion:wooden_rod"  , "null"                 , "null"    ],
]);	

event.remove({ output: "medievalweapons:iron_lance" });
event.shaped(item.of("medievalweapons:iron_lance"), [
["null"                  , "null"                 , "minecraft:iron_ingot"],
["null"                  , "campanion:wooden_rod" , "null"                ],
["campanion:wooden_rod"  , "null"                 , "null"                ],
]);	

event.remove({ output: "medievalweapons:golden_lance" });
event.shaped(item.of("medievalweapons:golden_lance"), [
["null"                  , "null"                 , "minecraft:gold_ingot"],
["null"                  , "campanion:wooden_rod" , "null"                ],
["campanion:wooden_rod"  , "null"                 , "null"                ],
]);

event.remove({ output: "medievalweapons:diamond_lance" });
event.shaped(item.of("medievalweapons:diamond_lance"), [
["null"                  , "null"                 , "minecraft:diamond"],
["null"                  , "campanion:wooden_rod" , "null"             ],
["campanion:wooden_rod"  , "null"                 , "null"             ],
]);

event.remove({ output: "medievalweapons:thallasium_lance" });
event.shaped(item.of("medievalweapons:thallasium_lance"), [
["null"                  , "null"                 , "betterend:thallasium_ingot"],
["null"                  , "campanion:wooden_rod" , "null"             		    ],
["campanion:wooden_rod"  , "null"                 , "null"             		    ],
]);	

event.remove({ output: "medievalweapons:aeternium_lance" });
event.shaped(item.of("medievalweapons:aeternium_lance"), [
["null"                  , "null"                 , "betterend:aeternium_ingot"],
["null"                  , "campanion:wooden_rod" , "null"              	   ],
["campanion:wooden_rod"  , "null"                 , "null"              	   ],
]);	

event.remove({ output: "medievalweapons:terminite_lance" });
event.shaped(item.of("medievalweapons:terminite_lance"), [
["null"                  , "null"                 , "betterend:terminite_ingot"],
["null"                  , "campanion:wooden_rod" , "null"             		   ],
["campanion:wooden_rod"  , "null"                 , "null"             		   ],
]);
})