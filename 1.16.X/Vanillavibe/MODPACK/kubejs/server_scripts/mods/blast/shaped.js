//╔════════════════════════════════════════╗
//║         Copyright © 2022 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║           BLAST RECIPES                ║
  //╚════════════════════════════════════════╝
  event.remove({
    output: "blast:gunpowder_block"
  });
  event.shaped(item.of("blast:gunpowder_block"), [
    ["minecraft:paper", "minecraft:gunpowder", "minecraft:paper"],
    ["minecraft:gunpowder", "minecraft:coal", "minecraft:gunpowder"],
    ["minecraft:paper", "minecraft:gunpowder", "minecraft:paper"],
  ]);
});
