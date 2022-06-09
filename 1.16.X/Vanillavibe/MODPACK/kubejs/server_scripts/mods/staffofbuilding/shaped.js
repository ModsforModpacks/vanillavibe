//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║           STAFF OF BUILDINGS           ║
  //╚════════════════════════════════════════╝
  // Staff of Buildings - Diamond
  event.remove({
    output: "staffofbuilding:diamond_builder_staff"
  });
  event.shaped(item.of("staffofbuilding:diamond_builder_staff"), [
    ["null", "null", "minecraft:diamond"],
    ["null", "betterend:leather_wrapped_stick", "null"],
    ["betterend:leather_wrapped_stick", "null", "null"],
  ]);

  // Staff of Buildings - Golden
  event.remove({
    output: "staffofbuilding:golden_builder_staff"
  });
  event.shaped(item.of("staffofbuilding:golden_builder_staff"), [
    ["null", "null", "minecraft:gold_ingot"],
    ["null", "betterend:leather_wrapped_stick", "null"],
    ["betterend:leather_wrapped_stick", "null", "null"],
  ]);

  // Staff of Buildings - Iron
  event.remove({
    output: "staffofbuilding:iron_builder_staff"
  });
  event.shaped(item.of("staffofbuilding:iron_builder_staff"), [
    ["null", "null", "#c:iron_ingots"],
    ["null", "betterend:leather_wrapped_stick", "null"],
    ["betterend:leather_wrapped_stick", "null", "null"],
  ]);

  // Staff of Buildings - Stone//
  event.remove({
    output: "staffofbuilding:stone_builder_staff"
  });
  event.shaped(item.of("staffofbuilding:stone_builder_staff"), [
    ["null", "null", "#c:stone"],
    ["null", "betterend:leather_wrapped_stick", "null"],
    ["betterend:leather_wrapped_stick", "null", "null"],
  ]);

  // Staff of Buildings - Wooden//
  event.remove({
    output: "staffofbuilding:wooden_builder_staff"
  });
  event.shaped(item.of("staffofbuilding:wooden_builder_staff"), [
    ["null", "null", "#minecraft:planks"],
    ["null", "betterend:leather_wrapped_stick", "null"],
    ["betterend:leather_wrapped_stick", "null", "null"],
  ]);
});
