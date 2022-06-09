//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║     UPGRADEDECHESTS/SPATIAL STORAGE    ║
  //╚════════════════════════════════════════╝
  event.remove({
    output: "upgradedechests:spatialchest"
  });
  event.shaped(item.of("upgradedechests:spatialchest"), [
    ["appliedenergistics2:smooth_sky_stone_chest", "minecraft:ender_eye", "appliedenergistics2:smooth_sky_stone_chest"],
    ["minecraft:obsidian", "minecraft:ender_chest", "minecraft:obsidian"],
    ["minecraft:emerald", "minecraft:emerald_block", "minecraft:emerald"],
  ]);
})
