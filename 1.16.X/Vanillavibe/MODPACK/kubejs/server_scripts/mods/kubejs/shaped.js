//╔════════════════════════════════════════╗
//║         Copyright © 2022 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {

  event.shaped(item.of("kubejs:pigsteel_plate"), [
    ["pigsteel:pigsteel_ingot", "pigsteel:pigsteel_ingot", "pigsteel:pigsteel_ingot"],
    ["pigsteel:pigsteel_ingot", null, "pigsteel:pigsteel_ingot"],
    ["pigsteel:pigsteel_ingot", "pigsteel:pigsteel_ingot", "pigsteel:pigsteel_ingot"],
  ]);

  event.shaped(item.of("kubejs:pigsteel_large_plate"), [
    ["kubejs:pigsteel_plate", "kubejs:pigsteel_plate", null],
    ["kubejs:pigsteel_plate", "kubejs:pigsteel_plate", null],
    [null, null, null],
  ]);
})
