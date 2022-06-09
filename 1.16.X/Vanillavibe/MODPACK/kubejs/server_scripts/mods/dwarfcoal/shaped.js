//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {

  event.remove({
    output: "techreborn:glowstone_small_dust"
  });
  event.remove({
    output: "astromine:glowstone_tiny_dust"
  });
  event.remove({
    output: "dwarfcoal:charcoal_block"
  });

  event.shaped(item.of("techreborn:glowstone_small_dust", 4), [
    ["minecraft:glowstone_dust"],
  ]);

  event.shaped(item.of("astromine:glowstone_tiny_dust", 18), [
    ["minecraft:glowstone_dust", "minecraft:glowstone_dust"],
  ]);

  event.shaped(item.of("dwarfcoal:charcoal_block", 3), [
    ["minecraft:charcoal", "minecraft:charcoal", "minecraft:charcoal",
      "minecraft:charcoal", "minecraft:charcoal", "minecraft:charcoal",
      "minecraft:charcoal", "minecraft:charcoal", "minecraft:charcoal"
    ],
  ]);
})