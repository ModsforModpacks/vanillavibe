//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║     MODERN INDUSTRIALIZATION/WRENCH    ║
  //╚════════════════════════════════════════╝

  event.remove({
    id: "modern_industrialization:tools/wrench"
  });
  event.shaped(item.of("modern_industrialization:wrench"), [
    ["techreborn:bronze_ingot", null, "techreborn:bronze_ingot"],
    ["techreborn:bronze_plate", "modern_industrialization:bronze_gear", "techreborn:bronze_plate"],
    ["null", "techreborn:bronze_plate", "null"],
  ]);

  event.replaceInput({}, "mtmechs:iron_gear_item", "modern_industrialization:iron_gear");
  event.remove({
    id: "mtmechs:iron_gear_item"
  });
})
