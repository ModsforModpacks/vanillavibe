//priority: 555
settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true
//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║         GATEOFBABYLON/HALADIES         ║
  //╚════════════════════════════════════════╝
  // diamond_haladie
  event.remove({
    output: "gateofbabylon:diamond_haladie"
  });
  event.shaped(item.of("gateofbabylon:diamond_haladie"), [
    ["null", "null", "minecraft:diamond"],
    ["null", "gateofbabylon:extended_stick", "null"],
    ["minecraft:diamond", "null", "null"],
  ]);

  // golden_haladie
  event.remove({
    output: "gateofbabylon:golden_haladie"
  });
  event.shaped(item.of("gateofbabylon:golden_haladie"), [
    ["null", "null", "minecraft:gold_ingot"],
    ["null", "gateofbabylon:extended_stick", "null"],
    ["minecraft:gold_ingot", "null", "null"],
  ]);

  // iron_haladie
  event.remove({
    output: "gateofbabylon:iron_haladie"
  });
  event.shaped(item.of("gateofbabylon:iron_haladie"), [
    ["null", "null", "#c:iron_ingots"],
    ["null", "gateofbabylon:extended_stick", "null"],
    ["#c:iron_ingots", "null", "null"],
  ]);

  // stone_haladie
  event.remove({
    output: "gateofbabylon:stone_haladie"
  });
  event.shaped(item.of("gateofbabylon:stone_haladie"), [
    ["null", "null", "#minecraft:stone_tool_materials"],
    ["null", "gateofbabylon:extended_stick", "null"],
    ["#minecraft:stone_tool_materials", "null", "null"],
  ]);

  // wooden_haladie
  event.remove({
    output: "gateofbabylon:wooden_haladie"
  });
  event.shaped(item.of("gateofbabylon:wooden_haladie"), [
    ["null", "null", "#minecraft:planks"],
    ["null", "gateofbabylon:extended_stick", "null"],
    ["#minecraft:planks", "null", "null"],
  ]);
  // ╔════════════════════════════════════════╗
  // ║         GATEOFBABYLON/DAGGERS          ║
  // ╚════════════════════════════════════════╝
  // wooden_dagger
  event.remove({
    output: "gateofbabylon:wooden_dagger"
  });
  event.shaped(item.of("gateofbabylon:wooden_dagger"), [
    ["#minecraft:logs", "null", "null"],
    ["betterend:leather_wrapped_stick", "null", "null"],
    ["null", "null", "null"],
  ]);

  // stone_dagger
  event.remove({
    output: "gateofbabylon:stone_dagger"
  });
  event.shaped(item.of("gateofbabylon:stone_dagger"), [
    ["#c:stone", "null", "null"],
    ["betterend:leather_wrapped_stick", "null", "null"],
    ["null", "null", "null"],
  ]);

  // iron_dagger
  event.remove({
    output: "gateofbabylon:iron_dagger"
  });
  event.shaped(item.of("gateofbabylon:iron_dagger"), [
    ["#c:iron_ingots", "null", "null"],
    ["betterend:leather_wrapped_stick", "null", "null"],
    ["null", "null", "null"],
  ]);

  // golden_dagger
  event.remove({
    output: "gateofbabylon:golden_dagger"
  });
  event.shaped(item.of("gateofbabylon:golden_dagger"), [
    ["minecraft:gold_ingot", "null", "null"],
    ["betterend:leather_wrapped_stick", "null", "null"],
    ["null", "null", "null"],
  ]);

  // diamond_dagger
  event.remove({
    output: "gateofbabylon:diamond_dagger"
  });
  event.shaped(item.of("gateofbabylon:diamond_dagger"), [
    ["minecraft:diamond", "null", "null"],
    ["betterend:leather_wrapped_stick", "null", "null"],
    ["null", "null", "null"],
  ]);
  // ╔════════════════════════════════════════╗
  // ║       GATEOFBABYLON/BROADSWORDS        ║
  // ╚════════════════════════════════════════╝
  // diamond_broadsword
  event.remove({
    output: "gateofbabylon:diamond_broadsword"
  });
  event.shaped(item.of("gateofbabylon:diamond_broadsword"), [
    ["null", "null", "minecraft:diamond"],
    ["minecraft:diamond", "minecraft:diamond", "null"],
    ["gateofbabylon:extended_stick", "minecraft:diamond", "null"],
  ]);

  // golden_broadsword
  event.remove({
    output: "gateofbabylon:golden_broadsword"
  });
  event.shaped(item.of("gateofbabylon:golden_broadsword"), [
    ["null", "null", "minecraft:gold_ingot"],
    ["minecraft:gold_ingot", "minecraft:gold_ingot", "null"],
    ["gateofbabylon:extended_stick", "minecraft:gold_ingot", "null"],
  ]);

  // iron_broadsword
  event.remove({
    output: "gateofbabylon:iron_broadsword"
  });
  event.shaped(item.of("gateofbabylon:iron_broadsword"), [
    ["null", "null", "#c:iron_ingots"],
    ["#c:iron_ingots", "minecraft:iron_ingot", "null"],
    ["gateofbabylon:extended_stick", "minecraft:iron_ingot", "null"],
  ]);

  // stone_broadsword
  event.remove({
    output: "gateofbabylon:stone_broadsword"
  });
  event.shaped(item.of("gateofbabylon:stone_broadsword"), [
    ["null", "null", "#minecraft:stone_tool_materials"],
    ["#minecraft:stone_tool_materials", "#minecraft:stone_tool_materials", "null"],
    ["gateofbabylon:extended_stick", "#minecraft:stone_tool_materials", "null"],
  ]);

  //  wooden_broadsword
  event.remove({
    output: "gateofbabylon:wooden_broadsword"
  });
  event.shaped(item.of("gateofbabylon:wooden_broadsword"), [
    ["null", "null", "#minecraft:planks"],
    ["#minecraft:planks", "#minecraft:planks", "null"],
    ["gateofbabylon:extended_stick", "#minecraft:planks", "null"],
  ]);
  
  // wooden_shield
  event.remove({
    id: "basicshields:wooden_shield"
  });
  event.shaped(item.of("basicshields:wooden_shield"), [
    ["#minecraft:planks", "#minecraft:planks", "#minecraft:planks"],
    ["#minecraft:planks", "#minecraft:planks", "#minecraft:planks"],
    [null, "minecraft:stick", null]
  ]);

  // stone_shield
  event.remove({
    id: "gateofbabylon:stone_shield"
  });
  event.shaped(item.of("gateofbabylon:stone_shield"), [
    ["minecraft:cobblestone", "minecraft:iron_ingot", "minecraft:cobblestone"],
    ["minecraft:cobblestone", "minecraft:cobblestone", "minecraft:cobblestone"],
    [null, "minecraft:cobblestone", null]
  ]);
})