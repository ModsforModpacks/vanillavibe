//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {
  // Machete
  event.remove({
    output: "harvest_scythes:iron_machete"
  });
  event.shaped(item.of("harvest_scythes:iron_machete"), [
    ["#c:iron_ingots", "#c:iron_ingots", null],
    ["#c:iron_ingots", "minecraft:stick", null],
    [null, "minecraft:stick", null],
  ]);
  // Scythe
  event.remove({
    output: "harvest_scythes:iron_scythe"
  });
  event.shaped(item.of("harvest_scythes:iron_scythe"), [
    ["#c:iron_ingots", "#c:iron_ingots", "#c:iron_ingots" ],
    [null            , null            , "minecraft:stick"],
    [null            , null            , "minecraft:stick"],
  ]);
})