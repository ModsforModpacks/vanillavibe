//╔════════════════════════════════════════╗
//║         Copyright © 2022 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {

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
["adorn:stone_rod", "null" , "null"],
["null"           , "null" , "null"],
]);	

event.remove({ output: "gateofbabylon:stone_dagger" });
event.shaped(item.of("gateofbabylon:stone_dagger"), [
["#c:stone"       , "null" , "null"],
["adorn:stone_rod", "null" , "null"],
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

// Medieval Weapons - Lances

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

// Removed Items //

event.remove({ output: "mcdw:hammer_flail" });
event.remove({ output: "mcdw:item_bee_stinger" });
event.remove({ output: "mcdw:pick_diamond_pickaxe_var" });
event.remove({ output: "mcdw:sword_diamond_sword_var" });
event.remove({ output: "mcdw:whip_vine_whip" });
event.remove({ output: "mcdw:whip_whip" });
event.remove({ output: "appliedenergistics2:grindstone" });  
});