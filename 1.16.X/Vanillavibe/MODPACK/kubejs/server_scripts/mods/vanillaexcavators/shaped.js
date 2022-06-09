//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║           VANILLA EXCAVATORS           ║
  //╚════════════════════════════════════════╝

  // Pigsteel Hammer	
  event.shaped(item.of("vanillaexcavators:iron_excavator"), [
    ["null", "pigsteel:pigsteel_ingot", "null"],
    ["pigsteel:pigsteel_block", "minecraft:stick", "pigsteel:pigsteel_block"],
    ["null", "minecraft:stick", "null"],
  ]);

  // Fiery Excavator
  event.remove({
    output: "vanillaexcavators:fiery_excavator"
  });
  event.shaped(item.of("vanillaexcavators:fiery_excavator"), [
    ["null", "minecraft:magma_block", "null"],
    ["minecraft:magma_block", "adorn:stone_rod", "minecraft:magma_block"],
    ["null", "adorn:stone_rod", "null"],
  ]);

  // Diamond Excavator
  event.remove({
    output: "vanillaexcavators:diamond_excavator"
  });
  event.shaped(item.of("vanillaexcavators:diamond_excavator"), [
    ["null", "minecraft:diamond", "null"],
    ["minecraft:diamond_block", "betterend:leather_wrapped_stick", "minecraft:diamond_block"],
    ["null", "betterend:leather_wrapped_stick", "null"],
  ]);

  // Stone Excavator
  event.remove({
    output: "vanillaexcavators:stone_excavator"
  });
  event.shaped(item.of("vanillaexcavators:stone_excavator"), [
    ["null", "#c:stone", "null"],
    ["#c:stone", "betterend:leather_wrapped_stick", "#c:stone"],
    ["null", "betterend:leather_wrapped_stick", "null"],
  ]);

  // Ender Excavator
  event.remove({
    output: "vanillaexcavators:ender_excavator"
  });
  event.shaped(item.of("vanillaexcavators:ender_excavator"), [
    ["null", "minecraft:dragon_head", "null"],
    ["minecraft:end_stone_bricks", "adorn:stone_rod", "minecraft:end_stone_bricks"],
    ["null", "adorn:stone_rod", "null"],
  ]);

  // Slime Excavator
  event.remove({
    output: "vanillaexcavators:slime_excavator"
  });
  event.shaped(item.of("vanillaexcavators:slime_excavator"), [
    [null, "minecraft:slime_block", null],
    ["minecraft:slime_block", "terrarianslimes:glowstick", "minecraft:slime_block"],
    ["null", "terrarianslimes:glowstick", "null"],
  ]);
})
