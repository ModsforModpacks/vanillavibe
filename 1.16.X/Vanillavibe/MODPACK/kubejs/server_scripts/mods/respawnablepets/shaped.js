//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {

  //╔════════════════════════════════════════╗
  //║           RESPAWNABLEPETS              ║
  //╚════════════════════════════════════════╝

  // Etheric Gem
  event.remove({
    output: "respawnablepets:etheric_gem"
  });
  event.shaped(item.of("respawnablepets:etheric_gem"), [
    ["#c:iron_nuggets", "null", "#c:iron_nuggets"],
    ["#c:iron_nuggets", "minecraft:ender_pearl", "#c:iron_nuggets"],
    ["null", "#c:iron_nuggets", "null"],
  ]);
});
