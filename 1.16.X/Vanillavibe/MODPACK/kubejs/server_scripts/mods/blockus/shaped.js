//╔════════════════════════════════════════╗
//║         Copyright © 2022 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║                BLOCKUS                 ║
  //╚════════════════════════════════════════╝

  event.remove({
    output: "blockus:ender_block"
  });
  event.shaped(item.of("blockus:ender_block", 1), [
    ["minecraft:ender_pearl", "minecraft:ender_pearl", null],
    ["minecraft:ender_pearl", "minecraft:ender_pearl", null],
    [null, null, null],
  ]);


  //╔════════════════════════════════════════╗
  //║               BARELLS                  ║
  //╚════════════════════════════════════════╝
  var barrels = [
    "acacia",
    "birch",
    "crimson",
    "dark_oak",
    "jungle",
    "oak",
    "warped",
  ];

  barrels.forEach(function(item, index) {
    event.remove({
      type: "crafting_shaped",
      output: "blockus:" + item + "_barrel",
    });
  });

  //╔════════════════════════════════════════╗
  //║            WOODEN BUCKET               ║
  //╚════════════════════════════════════════╝

  // Removed
  event.remove({
    output: "blockus:oak_small_logs"
  });
  event.remove({
    output: "blockus:spruce_small_logs"
  });
  event.remove({
    output: "blockus:birch_small_logs"
  });
  event.remove({
    output: "blockus:jungle_small_logs"
  });
  event.remove({
    output: "blockus:acacia_small_logs"
  });
  event.remove({
    output: "blockus:dark_oak_small_logs"
  });
  event.remove({
    output: "blockus:white_oak_small_logs"
  });

  // Shaped
  event.shaped(item.of("blockus:oak_small_logs", 3), [
    ["minecraft:oak_log", "minecraft:oak_log", "minecraft:oak_log"],
  ]);
  event.shaped(item.of("blockus:spruce_small_logs", 3), [
    ["minecraft:spruce_log", "minecraft:spruce_log", "minecraft:spruce_log"],
  ]);
  event.shaped(item.of("blockus:birch_small_logs", 3), [
    ["minecraft:birch_log", "minecraft:birch_log", "minecraft:birch_log"],
  ]);
  event.shaped(item.of("blockus:jungle_small_logs", 3), [
    ["minecraft:jungle_log", "minecraft:jungle_log", "minecraft:jungle_log"],
  ]);
  event.shaped(item.of("blockus:acacia_small_logs", 3), [
    ["minecraft:acacia_log", "minecraft:acacia_log", "minecraft:acacia_log"],
  ]);
  event.shaped(item.of("blockus:dark_oak_small_logs", 3), [
    ["minecraft:dark_oak_log", "minecraft:dark_oak_log", "minecraft:dark_oak_log"],
  ]);
  event.shaped(item.of("blockus:white_oak_small_logs", 3), [
    ["blockus:white_oak_log", "blockus:white_oak_log", "blockus:white_oak_log"],
  ]);

  //╔════════════════════════════════════════╗
  //║               PLATES                   ║
  //╚════════════════════════════════════════╝

  // Iron
  event.replaceInput({
      id: "blockus:iron_plating"
    },
    "minecraft:iron_ingot",
    "techreborn:iron_plate"
  );

  // Gold
  event.replaceInput({
      id: "blockus:gold_plating"
    },
    "minecraft:gold_ingot",
    "techreborn:gold_plate"
  );

  event.remove({
    output: "blockus:golden_bars"
  });
  event.shapeless('blockus:golden_bars', ['charm:gold_bars'])
  event.shapeless('charm:gold_bars', ['blockus:golden_bars'])
})
