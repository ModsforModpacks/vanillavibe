//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║               RSWIRES                  ║
  //╚════════════════════════════════════════╝
  event.remove({
    output: "rswires:red_alloy_compound"
  });
  event.shaped(item.of("rswires:red_alloy_compound"), [
    ["#c:iron_ingots", "minecraft:redstone", "minecraft:redstone"],
  ]);
});
