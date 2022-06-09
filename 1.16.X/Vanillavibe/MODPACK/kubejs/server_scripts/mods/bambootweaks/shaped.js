//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║             BAMBOOTWEAKS               ║
  //╚════════════════════════════════════════╝

  // Bamboo Block
  event.remove({
    output: "bambootweaks:bamboo_block"
  });
  event.shaped(item.of("bambootweaks:bamboo_block", 4), [
    ["minecraft:bamboo", "minecraft:bamboo", "minecraft:bamboo"],
    ["minecraft:bamboo", "minecraft:bamboo", "minecraft:bamboo"],
    ["minecraft:bamboo", "minecraft:bamboo", "minecraft:bamboo"],
  ]);

  // Bamboo Dry Block
  event.remove({
    output: "bambootweaks:dry_bamboo_block"
  });
  event.shaped(item.of("bambootweaks:dry_bamboo_block", 4), [
    ["bambootweaks:dry_bamboo", "bambootweaks:dry_bamboo", "bambootweaks:dry_bamboo"],
    ["bambootweaks:dry_bamboo", "bambootweaks:dry_bamboo", "bambootweaks:dry_bamboo"],
    ["bambootweaks:dry_bamboo", "bambootweaks:dry_bamboo", "bambootweaks:dry_bamboo"],
  ]);
  
  event.shaped(item.of("minecraft:chest", ), [
    ["bambootweaks:dry_bamboo", "bambootweaks:dry_bamboo", "bambootweaks:dry_bamboo"],
    ["bambootweaks:dry_bamboo", "null", "bambootweaks:dry_bamboo"],
    ["bambootweaks:dry_bamboo", "bambootweaks:dry_bamboo", "bambootweaks:dry_bamboo"],
  ]);
   
  event.shaped(item.of("minecraft:chest"), [
    ["minecraft:bamboo", "minecraft:bamboo", "minecraft:bamboo"],
    ["minecraft:bamboo", "null", "minecraft:bamboo"],
    ["minecraft:bamboo", "minecraft:bamboo", "minecraft:bamboo"],
  ]);
});
