//╔════════════════════════════════════════╗
//║         Copyright © 2022 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║        GET OFF MY LAWN RECIPES         ║ 
  //╚════════════════════════════════════════╝
  // Ender Binding
  event.remove({
    output: "goml:ender_binding"
  });
  event.shaped(item.of("goml:ender_binding"), [
    ["minecraft:obsidian", "minecraft:crying_obsidian", "minecraft:obsidian"],
    ["minecraft:crying_obsidian", "minecraft:ender_eye", "minecraft:crying_obsidian"],
    ["minecraft:obsidian", "minecraft:crying_obsidian", "minecraft:obsidian"],
  ]);
})
