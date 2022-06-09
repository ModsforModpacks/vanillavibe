//╔════════════════════════════════════════╗
//║            CREATED BY CSS              ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {
 
// Chainmail Helmet //

event.shaped(item.of("minecraft:chainmail_helmet"), [
["minecraft:iron_ingot" , "minecraft:iron_nugget", "minecraft:iron_ingot" ],
["minecraft:iron_nugget", "null"                  , "minecraft:iron_nugget"],
["null"                 , "null"                  , "null"                 ],
]);

// Chainmail Chestplate //

event.shaped(item.of("minecraft:chainmail_chestplate"), [
["minecraft:iron_ingot" , "null"                 , "minecraft:iron_ingot" ],
["minecraft:iron_nugget", "minecraft:iron_ingot" , "minecraft:iron_nugget"],
["minecraft:iron_ingot" , "minecraft:iron_nugget", "minecraft:iron_ingot" ],
]);	

// Chainmail Leggings //

event.shaped(item.of("minecraft:chainmail_leggings"), [
["minecraft:iron_ingot" , "minecraft:iron_nugget", "minecraft:iron_ingot" ],
["minecraft:iron_ingot" , "null"				 , "minecraft:iron_ingot" ],
["minecraft:iron_nugget", "null"				 , "minecraft:iron_nugget"],
]);	

// Chainmail Boots //

event.shaped(item.of("minecraft:chainmail_boots"), [
["null"				    , "null" , "null"],
["minecraft:iron_nugget", "null" , "minecraft:iron_nugget"],
["minecraft:iron_ingot" , "null" , "minecraft:iron_ingot" ],
]);

// Buckets //

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

// Vanilla - Slabs to plank recipe //

event.shaped(item.of("#c:planks_that_burn"), [
["#minecraft:wooden_slabs", "null", "null"],
["#minecraft:wooden_slabs", "null", "null"],
["null"                   , "null", "null"],
]);

// Vanilla - Gravel for Flint recipe //

event.shaped(item.of("minecraft:flint"), [
["minecraft:gravel", "minecraft:gravel", "null"],
["minecraft:gravel", "null"            , "null"],
["null"            , "null"            , "null"],
]);

 // Vanilla - Cobweb

 event.shaped(Item.of('minecraft:cobweb', 1), [
 'VV',
 'VV'
 ], {
 V: 'minecraft:string'
 })

// Vanilla - Easiest Chest recipe //

event.shaped(item.of("minecraft:chest", 4), [
["#minecraft:logs", "#minecraft:logs", "#minecraft:logs"],
["#minecraft:logs", "null"           , "#minecraft:logs"],
["#minecraft:logs", "#minecraft:logs", "#minecraft:logs"],
]);

// Enchanted Golden Apple //

event.shaped(item.of("minecraft:enchanted_golden_apple"), [
["minecraft:gold_block", "minecraft:gold_block"  , "minecraft:gold_block"],
["minecraft:gold_block", "minecraft:apple"       , "minecraft:gold_block"],
["minecraft:gold_block", "minecraft:gold_block"  , "minecraft:gold_block"],
]);

// Firework Rockets X3 //

event.shaped(item.of("minecraft:firework_rocket", 3), [
["minecraft:gunpowder", "minecraft:paper", "null"],
]);

// Firework Rockets X6 //

event.shaped(item.of("minecraft:firework_rocket", 6), [
["minecraft:gunpowder", "minecraft:paper", "null"],
["minecraft:gunpowder", "minecraft:paper", "null"],
]);

// Firework Rockets X9 //

event.shaped(item.of("minecraft:firework_rocket", 9), [
["minecraft:gunpowder", "minecraft:paper", "null"],
["minecraft:gunpowder", "minecraft:paper", "null"],
["minecraft:gunpowder", "minecraft:paper", "null"],
]);

// Bell //

event.shaped(item.of("minecraft:bell"), [
["#minecraft:planks", "#minecraft:planks" , "#minecraft:planks"],
["minecraft:stick", "minecraft:lead"      , "minecraft:stick"  ],
["minecraft:stick", "minecraft:gold_block", "minecraft:stick"  ],
]);

// Hopper //

event.remove({ id: "charm:variant_chests/hopper" });
event.shaped(item.of("minecraft:hopper"), [
["minecraft:iron_ingot", "#minecraft:logs"     , "minecraft:iron_ingot"],
["minecraft:iron_ingot", "#minecraft:logs"     , "minecraft:iron_ingot"],
["null"                , "minecraft:iron_ingot", "null"                ],
]);

// Totem //

event.shaped(item.of("minecraft:totem_of_undying"), [
["minecraft:emerald"   , "minecraft:gold_ingot"  , "minecraft:emerald"   ],
["minecraft:gold_ingot", "minecraft:end_crystal" , "minecraft:gold_ingot"],
["null"				   , "minecraft:gold_ingot"  , "null"                ],
]);

// Totem X3 //

event.shaped(item.of("minecraft:totem_of_undying", 3), [
["minecraft:netherite_ingot", "minecraft:diamond"     , "minecraft:netherite_ingot"],
["minecraft:diamond"	    , "minecraft:end_crystal" , "minecraft:diamond"        ],
["null"				        , "minecraft:diamond"     , "null"                     ],
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

// Prismarine //

event.shaped(item.of("minecraft:prismarine", 4), [
["minecraft:prismarine_crystals", "minecraft:prismarine_crystals" , "minecraft:prismarine_crystals"],
["minecraft:prismarine_crystals", "minecraft:prismarine_crystals" , "minecraft:prismarine_crystals"],
["minecraft:prismarine_crystals", "minecraft:prismarine_crystals" , "minecraft:prismarine_crystals"],
]);	

// Cry Obsidian Vibranium //

event.shaped(item.of("adabraniummod:vibranium_ingot"), [
["null"                   , "adabraniummod:vibranium"   , "null"                   ],
["adabraniummod:vibranium", "minecraft:crying_obsidian" , "adabraniummod:vibranium"],
["null"                   , "adabraniummod:vibranium"   , "null"                   ],
]);	


// Oak Pigsteel Hopper //

event.shaped(item.of("woodenhoppers:oak_hopper"), [
["minecraft:oak_planks", "pigsteel:pigsteel_ingot", "minecraft:oak_planks"],
["minecraft:oak_planks", "pigsteel:pigsteel_ingot", "minecraft:oak_planks"],
["null"				   , "minecraft:oak_planks"   , "null"				  ],
]);

// Spruce Pigsteel Hopper //

event.shaped(item.of("woodenhoppers:spruce_hopper"), [
["minecraft:spruce_planks", "pigsteel:pigsteel_ingot", "minecraft:spruce_planks"],
["minecraft:spruce_planks", "pigsteel:pigsteel_ingot", "minecraft:spruce_planks"],
["null"				      , "minecraft:spruce_planks", "null"			 	    ],
]);

//Birch Pigsteel Hopper //

event.shaped(item.of("woodenhoppers:birch_hopper"), [
["minecraft:birch_planks", "pigsteel:pigsteel_ingot", "minecraft:birch_planks"],
["minecraft:birch_planks", "pigsteel:pigsteel_ingot", "minecraft:birch_planks"],
["null"				     , "minecraft:birch_planks" , "null"				  ],
]);

// Jungle Pigsteel Hopper //

event.shaped(item.of("woodenhoppers:jungle_hopper"), [
["minecraft:jungle_planks", "pigsteel:pigsteel_ingot", "minecraft:jungle_planks"],
["minecraft:jungle_planks", "pigsteel:pigsteel_ingot", "minecraft:jungle_planks"],
["null"				      , "minecraft:jungle_planks", "null"					],
]);

// Acacia Pigsteel Hopper //

event.shaped(item.of("woodenhoppers:acacia_hopper"), [
["minecraft:acacia_planks", "pigsteel:pigsteel_ingot", "minecraft:acacia_planks"],
["minecraft:acacia_planks", "pigsteel:pigsteel_ingot", "minecraft:acacia_planks"],
["null"				      , "minecraft:acacia_planks", "null"                   ],
]);

// Dark Oak Pigsteel Hopper //

event.shaped(item.of("woodenhoppers:dark_oak_hopper"), [
["minecraft:dark_oak_planks", "pigsteel:pigsteel_ingot"  , "minecraft:dark_oak_planks"],
["minecraft:dark_oak_planks", "pigsteel:pigsteel_ingot"  , "minecraft:dark_oak_planks"],
["null"				        , "minecraft:dark_oak_planks", "null"                     ],
]);

// Crimson Pigsteel Hopper //

event.shaped(item.of("woodenhoppers:crimson_hopper"), [
["minecraft:crimson_planks", "pigsteel:pigsteel_ingot" , "minecraft:crimson_planks"],
["minecraft:crimson_planks", "pigsteel:pigsteel_ingot" , "minecraft:crimson_planks"],
["null"				       , "minecraft:crimson_planks", "null"					   ],
]);

// Warped Pigsteel Hopper //

event.shaped(item.of("woodenhoppers:warped_hopper"), [
["minecraft:warped_planks", "pigsteel:pigsteel_ingot", "minecraft:warped_planks"],
["minecraft:warped_planks", "pigsteel:pigsteel_ingot", "minecraft:warped_planks"],
["null"				      , "minecraft:warped_planks", "null"				    ],
]);

// Bamboo Pigsteel Hopper //

event.shaped(item.of("blockus:bamboo_hopper"), [
["blockus:bamboo_planks", "pigsteel:pigsteel_ingot" , "blockus:bamboo_planks"],
["blockus:bamboo_planks", "pigsteel:pigsteel_ingot" , "blockus:bamboo_planks"],
["null"				    , "blockus:bamboo_planks"   , "null"				 ],
]);

// Charred Pigsteel Hopper //

event.shaped(item.of("blockus:charred_hopper"), [
["blockus:charred_planks", "pigsteel:pigsteel_ingot" , "blockus:charred_planks"],
["blockus:charred_planks", "pigsteel:pigsteel_ingot" , "blockus:charred_planks"],
["null"				     , "charred:bamboo_planks"   , "null"				   ],
]);

// Arrows //

event.shaped(item.of("minecraft:arrow"), [
["minecraft:iron_ingot"],
["betterend:leather_wrapped_stick"]
]);

event.shaped(item.of("minecraft:arrow"), [
["pigsteel:pigsteel_nugget"],
["betterend:leather_wrapped_stick"]
]);

// Sticks //
event.shapeless('minecraft:bamboo', ['atbyw:bamboo_stick']);

event.shaped(item.of("atbyw_mi:umbrella_tree_stick"), [
["betterend:umbrella_tree_planks", "null", "null"],
["betterend:umbrella_tree_planks", "null", "null"],
]);

event.shaped(item.of("atbyw_mi:lacugrove_stick"), [
["betterend:lacugrove_planks", "null", "null"],
["betterend:lacugrove_planks", "null", "null"],
]);

event.shaped(item.of("atbyw_mi:end_lotus_stick"), [
["betterend:end_lotus_planks", "null", "null"],
["betterend:end_lotus_planks", "null", "null"],
]);

event.shaped(item.of("atbyw_mi:pythadendron_stick"), [
["betterend:pythadendron_planks", "null", "null"],
["betterend:pythadendron_planks", "null", "null"],
]);

event.shaped(item.of("atbyw_mi:mossy_glowshroom_stick"), [
["betterend:mossy_glowshroom_planks", "null", "null"],
["betterend:mossy_glowshroom_planks", "null", "null"],
]);

event.shaped(item.of("atbyw_mi:dragon_tree_stick"), [
["betterend:dragon_tree_planks", "null", "null"],
["betterend:dragon_tree_planks", "null", "null"],
]);

event.shaped(item.of("atbyw_mi:tenanea_stick"), [
["betterend:tenanea_planks", "null", "null"],
["betterend:tenanea_planks", "null", "null"],
]);

event.shaped(item.of("atbyw_mi:helix_tree_stick"), [
["betterend:helix_tree_planks", "null", "null"],
["betterend:helix_tree_planks", "null", "null"],
]);

// Extanded Stick //

event.shaped(item.of("gateofbabylon:extended_stick", 2), [
["null"            , "minecraft:bamboo", "null"],
["minecraft:bamboo", "null"            , "null"],
["null"            , "null"            , "null"],
]);

// Betterend Hammers //

event.smithing('betterend:aeternium_hammer', 'betterend:netherite_hammer', 'betterend:aeternium_ingot')
event.smithing('betterend:terminite_hammer', 'betterend:netherite_hammer', 'betterend:terminite_ingot')
event.smithing('betterend:thallasium_hammer', 'betterend:netherite_hammer', 'betterend:thallasium_ingot')
})