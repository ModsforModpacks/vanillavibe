//╔════════════════════════════════════════╗
//║            CREATED BY CSS              ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {

// Campfire Cauldron //

event.remove({ output: "dehydration:campfire_cauldron" });	
event.shaped(item.of("dehydration:campfire_cauldron"), [
["null"          , "#minecraft:wooden_slabs", "null"          ],
["null"          , "minecraft:cauldron"     , "null"          ],
["#c:wooden_rods", "minecraft:leather"      , "#c:wooden_rods"],
]);

// Explorer Compass //

event.remove({ output: "explorerscompass:explorerscompass" });	
event.shaped(item.of("explorerscompass:explorerscompass"), [
["#minecraft:beacon_payment_items",  "techreborn:lead_plate"  , "#minecraft:beacon_payment_items"],
[ "techreborn:lead_plate"         , "biome_locator:compass"   , "techreborn:lead_plate"          ],
["#minecraft:beacon_payment_items", "techreborn:lead_plate"   , "#minecraft:beacon_payment_items"],
]);

// Quest Book //

event.remove({ output: "ftbquests:book" });	
event.shaped(item.of("ftbquests:book"), [
["minecraft:leather", "minecraft:leather" , "minecraft:leather"],
["minecraft:paper"  , "minecraft:cyan_dye", "minecraft:paper"  ],
["minecraft:leather", "minecraft:leather" , "minecraft:leather"],
]);

// Magnet //

event.remove({ output: "kibe:magnet" });	
event.shaped(item.of("kibe:magnet"), [
["minecraft:red_dye"             , "#minecraft:beacon_payment_items", "#minecraft:beacon_payment_items"],
["#minecraft:beacon_payment_items", "minecraft:ender_eye"           , "null"                          ],
["minecraft:red_dye"             , "#minecraft:beacon_payment_items", "#minecraft:beacon_payment_items"],
]);

// Etheric Gem //

event.shaped(item.of("respawnablepets:etheric_gem"), [
["#c:iron_nuggets", "null"                 , "#c:iron_nuggets"],
["#c:iron_nuggets", "minecraft:ender_pearl", "#c:iron_nuggets"],
["null"           , "#c:iron_nuggets"      , "null"           ],
]); 

event.shaped(item.of("respawnablepets:etheric_gem"), [
["pigsteel:pigsteel_nugget", "null"                    , "pigsteel:pigsteel_nugget"],
["pigsteel:pigsteel_nugget", "minecraft:ender_pearl"   , "pigsteel:pigsteel_nugget"],
["null"                    , "pigsteel:pigsteel_nugget", "null"                    ],
]); 

// Recipes Book Fix - created by Trent87

event.remove({ id: "byg:gray_dye" });

// Rotten Flesh to Leather

event.smelting('minecraft:leather', 'minecraft:rotten_flesh').xp(0.1)
event.blasting('minecraft:leather', 'minecraft:rotten_flesh').xp(0.1)

// Sap & Slime

event.shapeless('ecotones:sap_ball', ['techreborn:sap'])
event.shapeless('minecraft:slime_ball', ['ecotones:sap_ball'])

// Buckets

event.shaped(item.of("minecraft:bucket", 9), [
["null"                , "null"                , "null"                ],
["minecraft:iron_block", "null"                , "minecraft:iron_block"],
["null"                , "minecraft:iron_block", "null"                ],
]);

event.shaped(item.of("minecraft:bucket", 9), [
["null"                   , "null"                    , "null"                    ],
["pigsteel:pigsteel_block", "null"                    , "minecraft:pigsteel_block"],
["null"                   , "minecraft:pigsteel_block", "null"                    ],
]);

// Slabs to plank recipe

event.shaped(item.of("#c:planks_that_burn"), [
["#minecraft:wooden_slabs", "null", "null"],
["#minecraft:wooden_slabs", "null", "null"],
["null"                   , "null", "null"],
]);

// Flint from Gravel

event.shaped(item.of("minecraft:flint"), [
["minecraft:gravel", "minecraft:gravel", "null"],
["minecraft:gravel", "null"            , "null"],
["null"            , "null"            , "null"],
]);

// Cobweb

event.shaped(Item.of('minecraft:cobweb', 1), [
'VV',
'VV'
], {
V: 'minecraft:string'
})

// Wool Tarp 

event.shaped(item.of("campanion:wool_tarp"), [
["#chipped:white_wool", "#chipped:white_wool", "#chipped:white_wool"],
]);

// Firework Rockets x3

event.shaped(item.of("minecraft:firework_rocket", 3), [
["minecraft:gunpowder", "minecraft:paper", "null"],
]);

// Firework Rockets x6

event.shaped(item.of("minecraft:firework_rocket", 6), [
["minecraft:gunpowder", "minecraft:paper", "null"],
["minecraft:gunpowder", "minecraft:paper", "null"],
]);

// Firework Rockets x9

event.shaped(item.of("minecraft:firework_rocket", 9), [
["minecraft:gunpowder", "minecraft:paper", "null"],
["minecraft:gunpowder", "minecraft:paper", "null"],
["minecraft:gunpowder", "minecraft:paper", "null"],
]);

// Bell

event.shaped(item.of("minecraft:bell"), [
["#minecraft:planks", "#minecraft:planks" , "#minecraft:planks"],
["minecraft:stick", "minecraft:lead"      , "minecraft:stick"  ],
["minecraft:stick", "minecraft:gold_block", "minecraft:stick"  ],
]);

// Totem

event.shaped(item.of("minecraft:totem_of_undying"), [
["minecraft:emerald"   , "minecraft:gold_ingot"  , "minecraft:emerald"   ],
["minecraft:gold_ingot", "minecraft:end_crystal" , "minecraft:gold_ingot"],
["null"				   , "minecraft:gold_ingot"  , "null"                ],
]);

// Totem x3

event.shaped(item.of("minecraft:totem_of_undying", 3), [
["minecraft:netherite_ingot", "minecraft:diamond"     , "minecraft:netherite_ingot"],
["minecraft:diamond"	    , "minecraft:end_crystal" , "minecraft:diamond"        ],
["null"				        , "minecraft:diamond"     , "null"                     ],
]);

// Cry Vibranium

event.shaped(item.of("adabraniummod:vibranium_ingot"), [
["null"                   , "adabraniummod:vibranium"   , "null"                   ],
["adabraniummod:vibranium", "minecraft:crying_obsidian" , "adabraniummod:vibranium"],
["null"                   , "adabraniummod:vibranium"   , "null"                   ],
]);	

// Sign

event.replaceInput(
{ id: "minecraft:oak_sign" },
"minecraft:oak_planks",
"#minecraft:planks"
);

// Arrows

event.shaped(item.of("minecraft:arrow"), [
["minecraft:iron_nugget"],
["betterend:leather_wrapped_stick"]
]);

event.shaped(item.of("minecraft:arrow"), [
["pigsteel:pigsteel_nugget"],
["betterend:leather_wrapped_stick"]
]);

// Hoppers

event.remove({ id: "charm:variant_chests/hopper" });
event.shaped(item.of("minecraft:hopper"), [
["minecraft:iron_ingot", "#minecraft:logs"     , "minecraft:iron_ingot"],
["minecraft:iron_ingot", "#minecraft:logs"     , "minecraft:iron_ingot"],
["null"                , "minecraft:iron_ingot", "null"                ],
]);

// Oak Pigsteel Hopper

event.shaped(item.of("woodenhoppers:oak_hopper"), [
["minecraft:oak_planks", "pigsteel:pigsteel_ingot", "minecraft:oak_planks"],
["minecraft:oak_planks", "pigsteel:pigsteel_ingot", "minecraft:oak_planks"],
["null"				   , "minecraft:oak_planks"   , "null"				  ],
]);

// Spruce Pigsteel Hopper

event.shaped(item.of("woodenhoppers:spruce_hopper"), [
["minecraft:spruce_planks", "pigsteel:pigsteel_ingot", "minecraft:spruce_planks"],
["minecraft:spruce_planks", "pigsteel:pigsteel_ingot", "minecraft:spruce_planks"],
["null"				      , "minecraft:spruce_planks", "null"			 	    ],
]);

//Birch Pigsteel Hopper

event.shaped(item.of("woodenhoppers:birch_hopper"), [
["minecraft:birch_planks", "pigsteel:pigsteel_ingot", "minecraft:birch_planks"],
["minecraft:birch_planks", "pigsteel:pigsteel_ingot", "minecraft:birch_planks"],
["null"				     , "minecraft:birch_planks" , "null"				  ],
]);

// Jungle Pigsteel Hopper

event.shaped(item.of("woodenhoppers:jungle_hopper"), [
["minecraft:jungle_planks", "pigsteel:pigsteel_ingot", "minecraft:jungle_planks"],
["minecraft:jungle_planks", "pigsteel:pigsteel_ingot", "minecraft:jungle_planks"],
["null"				      , "minecraft:jungle_planks", "null"					],
]);

// Acacia Pigsteel Hopper

event.shaped(item.of("woodenhoppers:acacia_hopper"), [
["minecraft:acacia_planks", "pigsteel:pigsteel_ingot", "minecraft:acacia_planks"],
["minecraft:acacia_planks", "pigsteel:pigsteel_ingot", "minecraft:acacia_planks"],
["null"				      , "minecraft:acacia_planks", "null"                   ],
]);

// Dark Oak Pigsteel Hopper

event.shaped(item.of("woodenhoppers:dark_oak_hopper"), [
["minecraft:dark_oak_planks", "pigsteel:pigsteel_ingot"  , "minecraft:dark_oak_planks"],
["minecraft:dark_oak_planks", "pigsteel:pigsteel_ingot"  , "minecraft:dark_oak_planks"],
["null"				        , "minecraft:dark_oak_planks", "null"                     ],
]);

// Crimson Pigsteel Hopper

event.shaped(item.of("woodenhoppers:crimson_hopper"), [
["minecraft:crimson_planks", "pigsteel:pigsteel_ingot" , "minecraft:crimson_planks"],
["minecraft:crimson_planks", "pigsteel:pigsteel_ingot" , "minecraft:crimson_planks"],
["null"				       , "minecraft:crimson_planks", "null"					   ],
]);

// Warped Pigsteel Hopper

event.shaped(item.of("woodenhoppers:warped_hopper"), [
["minecraft:warped_planks", "pigsteel:pigsteel_ingot", "minecraft:warped_planks"],
["minecraft:warped_planks", "pigsteel:pigsteel_ingot", "minecraft:warped_planks"],
["null"				      , "minecraft:warped_planks", "null"				    ],
]);

// Bamboo Pigsteel Hopper

event.shaped(item.of("blockus:bamboo_hopper"), [
["blockus:bamboo_planks", "pigsteel:pigsteel_ingot" , "blockus:bamboo_planks"],
["blockus:bamboo_planks", "pigsteel:pigsteel_ingot" , "blockus:bamboo_planks"],
["null"				    , "blockus:bamboo_planks"   , "null"				 ],
]);

// Charred Pigsteel Hopper

event.shaped(item.of("blockus:charred_hopper"), [
["blockus:charred_planks", "pigsteel:pigsteel_ingot" , "blockus:charred_planks"],
["blockus:charred_planks", "pigsteel:pigsteel_ingot" , "blockus:charred_planks"],
["null"				     , "charred:bamboo_planks"   , "null"				   ],
]);

// White Oak Pigsteel Hopper

event.shaped(item.of("blockus:white_oak_hopper"), [
["blockus:white_oak_planks", "pigsteel:pigsteel_ingot" , "blockus:white_oak_planks"],
["blockus:white_oak_planks", "pigsteel:pigsteel_ingot" , "blockus:white_oak_planks"],
["null"				       , "charred:white_oak_planks"  , "null"			       ],
]);

// Oak Hopper

event.shaped(item.of("woodenhoppers:oak_hopper"), [
["minecraft:oak_planks", "minecraft:iron_ingot", "minecraft:oak_planks"],
["minecraft:oak_planks", "minecraft:iron_ingot", "minecraft:oak_planks"],
["null"				   , "minecraft:oak_planks", "null"				   ],
]);

// Spruce Hopper

event.shaped(item.of("woodenhoppers:spruce_hopper"), [
["minecraft:spruce_planks", "minecraft:iron_ingot"   , "minecraft:spruce_planks"],
["minecraft:spruce_planks", "minecraft:iron_ingot"   , "minecraft:spruce_planks"],
["null"				      , "minecraft:spruce_planks", "null"			 	    ],
]);

// Birch Hopper

event.shaped(item.of("woodenhoppers:birch_hopper"), [
["minecraft:birch_planks", "minecraft:iron_ingot"  , "minecraft:birch_planks"],
["minecraft:birch_planks", "minecraft:iron_ingot"  , "minecraft:birch_planks"],
["null"				     , "minecraft:birch_planks", "null"					 ],
]);

// Jungle Hopper

event.shaped(item.of("woodenhoppers:jungle_hopper"), [
["minecraft:jungle_planks", "minecraft:iron_ingot"   , "minecraft:jungle_planks"],
["minecraft:jungle_planks", "minecraft:iron_ingot"   , "minecraft:jungle_planks"],
["null"				      , "minecraft:jungle_planks", "null"					],
]);

// Acacia Hopper

event.shaped(item.of("woodenhoppers:acacia_hopper"), [
["minecraft:acacia_planks", "minecraft:iron_ingot"   , "minecraft:acacia_planks"],
["minecraft:acacia_planks", "minecraft:iron_ingot"   , "minecraft:acacia_planks"],
["null"				      , "minecraft:acacia_planks", "null"                   ],
]);

// Dark Oak Hopper

event.shaped(item.of("woodenhoppers:dark_oak_hopper"), [
["minecraft:dark_oak_planks", "minecraft:iron_ingot"     , "minecraft:dark_oak_planks"],
["minecraft:dark_oak_planks", "minecraft:iron_ingot"     , "minecraft:dark_oak_planks"],
["null"				        , "minecraft:dark_oak_planks", "null"                     ],
]);

// Crimson Hopper

event.shaped(item.of("woodenhoppers:crimson_hopper"), [
["minecraft:crimson_planks", "minecraft:iron_ingot"	   , "minecraft:crimson_planks"],
["minecraft:crimson_planks", "minecraft:iron_ingot"	   , "minecraft:crimson_planks"],
["null"				       , "minecraft:crimson_planks", "null"					   ],
]);

// Warped Hopper

event.shaped(item.of("woodenhoppers:warped_hopper"), [
["minecraft:warped_planks", "minecraft:iron_ingot"   , "minecraft:warped_planks"],
["minecraft:warped_planks", "minecraft:iron_ingot"	 , "minecraft:warped_planks"],
["null"				      , "minecraft:warped_planks", "null"				    ],
]);

// Bamboo Hopper

event.shaped(item.of("blockus:bamboo_hopper"), [
["blockus:bamboo_planks", "minecraft:iron_ingot" , "blockus:bamboo_planks"],
["blockus:bamboo_planks", "minecraft:iron_ingot" , "blockus:bamboo_planks"],
["null"				    , "blockus:bamboo_planks", "null"				  ],
]);

// Charred Hopper

event.shaped(item.of("blockus:charred_hopper"), [
["blockus:charred_planks", "minecraft:iron_ingot" , "blockus:charred_planks"],
["blockus:charred_planks", "minecraft:iron_ingot" , "blockus:charred_planks"],
["null"				     , "charred:bamboo_planks", "null"					],
]);

// White Oak Hopper

event.shaped(item.of("blockus:white_oak_hopper"), [
["blockus:white_oak_planks", "minecraft:iron_ingot"  , "blockus:white_oak_planks"],
["blockus:white_oak_planks", "minecraft:iron_ingot"  , "blockus:white_oak_planks"],
["null"				     , "charred:white_oak_planks", "null"					 ],
]);
})
	