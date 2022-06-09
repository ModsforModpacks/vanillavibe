//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {
//╔════════════════════════════════════════╗
//║          ARCHITECTS PALETTE            ║
//╚════════════════════════════════════════╝
// Plating Block
 event.remove({ output: "architects_palette:plating_block" });
 event.shaped(item.of("architects_palette:plating_block", 24), [
 ["techreborn:steel_plate", "techreborn:steel_plate" , "techreborn:steel_plate"],
 ["techreborn:steel_plate", null                     , "techreborn:steel_plate"],
 ["techreborn:steel_plate", "techreborn:steel_plate" , "techreborn:steel_plate"],
 ]);	

// Ender Block
 event.remove({ output: "architects_palette:ender_pearl_block" });
 event.shaped(item.of("architects_palette:ender_pearl_block", 4), [
 ["minecraft:ender_pearl", "minecraft:ender_pearl", "minecraft:ender_pearl"],
 ["minecraft:ender_pearl", "minecraft:ender_pearl", "minecraft:ender_pearl"],
 ["minecraft:ender_pearl", "minecraft:ender_pearl", "minecraft:ender_pearl"],
 ]);	
});