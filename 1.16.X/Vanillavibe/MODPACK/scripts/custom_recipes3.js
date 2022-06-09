//╔════════════════════════════════════════╗
//║         Copyright © 2022 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {

	//  Winged //

	event.remove({ output: "winged:heart_of_the_sky_75"});
	event.shaped(item.of("winged:heart_of_the_sky_75"), [
	["null"                  , "minecraft:diamond"              , "null"],
	["winged:shard_of_zephyr", "winged:broken_core_of_flight_75", "winged:shard_of_zephyr"],
	["null"                  , "minecraft:slime_ball"           , "null"],
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
	["null"				 , "minecraft:obsidian"		   , "null"				 ],
	["minecraft:obsidian", "adabraniummod:obsidian_rod", "minecraft:obsidian"],
	["null"				 , "adabraniummod:obsidian_rod", "null" 			 ],
	]);
	
	// Diamond Excavator //
	
	event.remove({ output: "vanillaexcavators:diamond_excavator" });	
	event.shaped(item.of("vanillaexcavators:diamond_excavator"), [
	["null"				   	  , "minecraft:diamond", "null"],
	["minecraft:diamond_block", "adorn:stone_rod"  , "minecraft:diamond_block"],
	["null"					  , "adorn:stone_rod"  , "null"],
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
	["null"						 , "minecraft:dragon_head"	   , "null"],
	["minecraft:end_stone_bricks", "adabraniummod:obsidian_rod", "minecraft:end_stone_bricks"],
	["null"						 , "adabraniummod:obsidian_rod", "null"],
	]);	

	// Pocket Wormhole //

	event.remove({ output: "waystones:pocket_wormhole" });
	event.shaped(item.of("waystones:pocket_wormhole"), [
	["null"                 , "minecraft:ender_pearl"      , "null"],
	["minecraft:ender_pearl", "blockus:nether_stars_block" , "minecraft:ender_pearl"],
	["null"                 , "minecraft:ender_pearl"      , "null"],
	]);

	// Ethereal Furnace //
	
	event.shapeless('fabric-furnaces:crystal_iron_furnace', ['fabric-furnaces:iron_furnace'])
	event.shapeless('fabric-furnaces:crystal_ethereal_furnace', ['fabric-furnaces:ethereal_furnace'])
  
 	event.remove({ output: "fabric-furnaces:crystal_ethereal_furnace" });
	event.shaped(item.of("fabric-furnaces:crystal_ethereal_furnace"), [
	["#c:glass_blocks"   , "#c:glass_blocks"      , "#c:glass_blocks"   ],
	["#c:glass_blocks", "fabric-furnaces:crystal_ethereal_furnace" , "#c:glass_blocks"],
	["#c:glass_blocks"    , "#c:glass_blocks", "#c:glass_blocks"    ],
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
	["#c:glass_blocks"   , "#c:glass_blocks"      , "#c:glass_blocks"   ],
	["#c:glass_blocks", "fabric-furnaces:iron_furnace" , "#c:glass_blocks"],
	["#c:glass_blocks"    , "#c:glass_blocks", "#c:glass_blocks"    ],
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
	["#c:glass_blocks"   , "#c:glass_blocks"      , "#c:glass_blocks"   ],
	["#c:glass_blocks", "fabric-furnaces:gold_furnace" , "#c:glass_blocks"],
	["#c:glass_blocks"    , "#c:glass_blocks", "#c:glass_blocks"    ],
	]);	
	
	event.remove({ output: "fabric-furnaces:crystal_diamond_furnace" });
	event.shaped(item.of("fabric-furnaces:crystal_diamond_furnace"), [
	["#c:glass_blocks"   , "#c:glass_blocks"      , "#c:glass_blocks"   ],
	["#c:glass_blocks", "fabric-furnaces:diamond_furnace" , "#c:glass_blocks"],
	["#c:glass_blocks"    , "#c:glass_blocks", "#c:glass_blocks"    ],
	]);	
	
	event.remove({ output: "fabric-furnaces:crystal_emerald_furnace" });
	event.shaped(item.of("fabric-furnaces:crystal_emerald_furnace"), [
	["#c:glass_blocks"   , "#c:glass_blocks"      , "#c:glass_blocks"   ],
	["#c:glass_blocks", "fabric-furnaces:emerald_furnace" , "#c:glass_blocks"],
	["#c:glass_blocks"    , "#c:glass_blocks", "#c:glass_blocks"    ],
	]);	
	
	event.remove({ output: "fabric-furnaces:crystal_nether_furnace" });
	event.shaped(item.of("fabric-furnaces:crystal_nether_furnace"), [
	["#c:glass_blocks"   , "#c:glass_blocks"      , "#c:glass_blocks"   ],
	["#c:glass_blocks", "fabric-furnaces:nether_furnace" , "#c:glass_blocks"],
	["#c:glass_blocks"    , "#c:glass_blocks", "#c:glass_blocks"    ],
	]);	
	
	event.remove({ output: "fabric-furnaces:crystal_obsidian_furnace" });
	event.shaped(item.of("fabric-furnaces:crystal_obsidian_furnace"), [
	["#c:glass_blocks"   , "#c:glass_blocks"      , "#c:glass_blocks"   ],
	["#c:glass_blocks", "fabric-furnaces:obsidian_furnace" , "#c:glass_blocks"],
	["#c:glass_blocks"    , "#c:glass_blocks", "#c:glass_blocks"    ],
	]);	
	
	event.remove({ output: "fabric-furnaces:crystal_end_furnace" });
	event.shaped(item.of("fabric-furnaces:crystal_end_furnace"), [
	["#c:glass_blocks", "#c:glass_blocks"      		  , "#c:glass_blocks"],
	["#c:glass_blocks", "fabric-furnaces:end_furnace" , "#c:glass_blocks"],
	["#c:glass_blocks", "#c:glass_blocks"             , "#c:glass_blocks"],
	]);	
	
	event.remove({ output: "fabric-furnaces:crystal_fabric_furnace" });
	event.shaped(item.of("fabric-furnaces:crystal_fabric_furnace"), [
	["#c:glass_blocks", "#c:glass_blocks"      , "#c:glass_blocks"],
	["#c:glass_blocks", "fabric-furnaces:fabric_furnace" , "#c:glass_blocks"],
	["#c:glass_blocks", "#c:glass_blocks", "#c:glass_blocks"],
	]);	
	
	// Shrek Key //
	
	event.remove({ output: "battletowers:boss_key"});
	event.shaped(item.of("battletowers:boss_key"), [
	["minecraft:gold_block" , "null", "null"],
	["minecraft:gold_nugget", "null", "null"],
	["minecraft:gold_ingot" , "null", "null"],
	]);
	
	// Bamboo //	
	
	event.remove({ output: "bambooeverything:bamboo_bundle" });
	event.shaped(item.of("bambooeverything:bamboo_bundle", 4), [
	["minecraft:bamboo", "minecraft:bamboo", "minecraft:bamboo"],
	["minecraft:bamboo", "minecraft:bamboo", "minecraft:bamboo"],
	["minecraft:bamboo", "minecraft:bamboo", "minecraft:bamboo"],
	]);

	// Extanded Stick //

	event.shaped(item.of("gateofbabylon:extended_stick", 2), [
	["null"            , "minecraft:bamboo", "null"],
	["minecraft:bamboo", "null"            , "null"],
	["null"            , "null"            , "null"],
	]);
	
	// Stick //

	event.shaped(item.of("minecraft:stick", 16), [
	["#minecraft:logs", "null", "null"],
	["#minecraft:logs", "null", "null"],
	["null"           , "null", "null"],
	]);
})

