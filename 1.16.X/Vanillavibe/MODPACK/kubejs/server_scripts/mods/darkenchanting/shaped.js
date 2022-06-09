//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║           ENCHANTING TABLE             ║
  //╚════════════════════════════════════════╝
  event.remove({
    id: "dark-enchanting:dark_enchanter"
  });
  event.shaped(item.of("dark-enchanting:dark_enchanter"), [
    ["minecraft:emerald_block", "minecraft:gold_block", "minecraft:emerald_block"],
    ["minecraft:enchanting_table", "minecraft:nether_star", "minecraft:enchanting_table"],
    ["minecraft:crying_obsidian", "minecraft:obsidian", "minecraft:crying_obsidian"],
  ]);
})
