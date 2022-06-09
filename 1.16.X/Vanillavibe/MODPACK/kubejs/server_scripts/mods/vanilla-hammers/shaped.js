//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║           VANILLA HAMMERS              ║
  //╚════════════════════════════════════════╝

  // Pigsteel Hammer
  event.shaped(item.of("vanilla-hammers:iron_hammer"), [
    ["pigsteel:pigsteel_block", "pigsteel:pigsteel_ingot", "pigsteel:pigsteel_block"],
    ["null", "minecraft:stick", "null"],
    ["null", "minecraft:stick", "null"],
  ]);

  // Fiery Hammer
  event.remove({
    output: "vanilla-hammers:fiery_hammer"
  });
  event.shaped(item.of("vanilla-hammers:fiery_hammer"), [
    ["minecraft:magma_block", "minecraft:magma_block", "minecraft:magma_block"],
    ["null", "adorn:stone_rod", "null"],
    ["null", "adorn:stone_rod", "null"],
  ]);

  // Diamond Hammer
  event.remove({
    output: "vanilla-hammers:diamond_hammer"
  });
  event.shaped(item.of("vanilla-hammers:diamond_hammer"), [
    ["minecraft:diamond_block", "minecraft:diamond", "minecraft:diamond_block"],
    ["null", "adorn:stone_rod", "null"],
    ["null", "adorn:stone_rod", "null"],
  ]);

  // Stone Hammer
  event.remove({
    output: "vanilla-hammers:stone_hammer"
  });
  event.shaped(item.of("vanilla-hammers:stone_hammer"), [
    ["#c:stone", "#c:stone", "#c:stone"],
    ["null", "adorn:stone_rod", "null"],
    ["null", "adorn:stone_rod", "null"],
  ]);

  // Slime Hammer
  event.remove({
    output: "vanilla-hammers:slime_hammer"
  });
  event.shaped(item.of("vanilla-hammers:slime_hammer"), [
    ["minecraft:slime_block", "minecraft:slime_block", "minecraft:slime_block"],
    ["null", "terrarianslimes:glowstick", "null"],
    ["null", "terrarianslimes:glowstick", "null"],
  ]);

  // Obsidian Hammer
  event.shaped(item.of("vanilla-hammers:obsidian_hammer"), [
    ["minecraft:crying_obsidian", "minecraft:crying_obsidian", "minecraft:crying_obsidian"],
    ["minecraft:crying_obsidian", "minecraft:stick", "minecraft:crying_obsidian"],
    ["null", "minecraft:stick", "null"],
  ]);
})
