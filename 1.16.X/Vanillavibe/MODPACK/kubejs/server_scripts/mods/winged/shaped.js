//╔════════════════════════════════════════╗
//║        Copyright © 2021 CSS            ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║        WINGED/HEART OF THE SKY         ║
  //╚════════════════════════════════════════╝
  event.remove({
    output: "winged:heart_of_the_sky"
  });
  event.shaped(item.of("winged:heart_of_the_sky"), [
    ["minecraft:nether_star", "artifacts:crystal_heart", "minecraft:nether_star"],
    ["minecraft:elytra", "techreborn:wind_mill", "minecraft:elytra"],
    ["modern_industrialization:iron_rotor", "indrev:module_feather_falling", "modern_industrialization:iron_rotor"],
  ]);

  //╔════════════════════════════════════════╗
  //║             WINGED/KNIFE               ║
  //╚════════════════════════════════════════╝
  event.remove({
    output: "winged:ceremonial_knife"
  });
  event.shaped(item.of("winged:ceremonial_knife"), [
    [null, "null", "#c:iron_nuggets"],
    [null, "#c:iron_nuggets", "null"],
    ["gateofbabylon:extended_stick", "null", "null"],
  ]);
});
