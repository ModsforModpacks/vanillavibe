//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║              DRINK BEER                ║
  //╚════════════════════════════════════════╝

  // Iron Call Bell
  event.remove({
    output: "drinkbeer:iron_call_bell"
  });
  event.shaped(item.of("drinkbeer:iron_call_bell"), [
    ["#c:iron_nuggets", "null", "null"],
    ["#c:iron_ingots", "null", "null"],
    ["#minecraft:planks", "null", "null"],
  ]);

  // Gold Call Bell
  event.remove({
    output: "drinkbeer:gold_call_bell"
  });
  event.shaped(item.of("drinkbeer:gold_call_bell"), [
    ["minecraft:gold_nugget", "null", "null"],
    ["minecraft:gold_ingot", "null", "null"],
    ["#minecraft:planks", "null", "null"],
  ]);

  // Lekas Call Bell
  event.remove({
    output: "drinkbeer:lekas_call_bell"
  });
  event.shaped(item.of("drinkbeer:lekas_call_bell"), [
    ["techreborn:copper_nugget", "null", "null"],
    ["techreborn:copper_ingot", "null", "null"],
    ["#minecraft:planks", "null", "null"],
  ]);
});
