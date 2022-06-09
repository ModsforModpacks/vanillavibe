//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
//╔════════════════════════════════════════╗
//║                   AE2                  ║
//╚════════════════════════════════════════╝

    var applied_dusts = ["gold", "iron"];

    applied_dusts.forEach(function(item, index) {
      event.remove({
        id: "appliedenergistics2:smelting/" + item + "_ingot",
      });
    });

//╔════════════════════════════════════════╗
//║            SPACE DIMENSION             ║
//╚════════════════════════════════════════╝
  var space_materials = [
    "iron",
    "copper",
    "aluminum",
    "gold",
  ];

  var space_plates = [
    "aluminum",
    "iron",
    "gold",
    "copper",
  ];

  var space_blocks = [
    "aluminum",
  ];

  var space_ores = [
    "copper",
    "aluminum",
  ];

  // Plates
  space_materials.forEach(function(item, index) {
    event.replaceOutput({},
      "agape_space:" + item + "_plate",
      "techreborn:" + item + "_plate"
    );
  });

  // Ingots
  space_materials.forEach(function(item, index) {
    event.replaceOutput({},
      "agape_space:" + item + "_ingot",
      "techreborn:" + item + "_ingot"
    );

    // Blocks
    space_blocks.forEach(function(item, index) {
      event.replaceInput({},
        "agape_space:" + item + "_block",
        "techreborn:" + item + "_storage_block"
      );
    });

    // Ores
    space_ores.forEach(function(item, index) {
      event.replaceOutput({},
        "agape_space:" + item + "_ore",
        "techreborn:" + item + "_ore"
      );
    });

    event.remove({
      id: "agape_space:aluminum_block"
    });
    event.remove({
      id: "agape_space:aluminum_ingot"
    });

//╔════════════════════════════════════════╗
//║               WORKSPACE                ║
//╚════════════════════════════════════════╝
// var workspace_materials = [
//     "aluminum",
//     "nickel",
//     "chrome",
//     "platinum",
//     "copper",
//     "brass",
//     "iridium",
//     "invar",
//     "tin",
//     "steel",
//     "silver",
//     "lead",
//     "electrum",
//     "bronze",
//     "tungsten",
//   ];
//
//
//
//   var workspace_ores = ["copper", "tin", "lead", "silver", "tungsten", "iridium"];
//
//   // Plates
//   workspace_materials.forEach(function(item, index) {
//     event.replaceOutput({},
//       "workspace:" + item + "_plate",
//       "techreborn:" + item + "_plate"
//     );
//   });
//
//   // Dusts
//   workspace_materials.forEach(function(item, index) {
//     event.replaceOutput({},
//       "workspace:" + item + "_dust",
//       "techreborn:" + item + "_dust"
//     );
//   });
//
//   // Ingots
//   workspace_materials.forEach(function(item, index) {
//     event.replaceOutput({},
//       "workspace:" + item + "_ingot",
//       "techreborn:" + item + "_ingot"
//     );
//
//     // Blocks
//     event.replaceInput({},
//       "workspace:" + item + "_block",
//       "techreborn:" + item + "_storage_block"
//     );
//   });
//
//   // Nuggets
//   workspace_materials.forEach(function(item, index) {
//     event.replaceOutput({},
//       "workspace:" + item + "_nugget",
//       "techreborn:" + item + "_nugget"
//     );
//   });
//
//   // Ores
//   workspace_ores.forEach(function(item, index) {
//     event.replaceOutput({},
//       "workspace:" + item + "_ore",
//       "techreborn:" + item + "_ore"
//     );
//   });
//
//   workspace_materials.forEach(function(item, index) {
//     event.remove({
//       id: "workspace:crafting/shaped/nugget/" + item + "_nugget"
//     });
//     event.remove({
//       id: "workspace:crafting/shaped/block/" + item + "_block"
//     });
//     event.remove({
//       id: "workspace:crafting/shaped/ingot/" + item + "_ingot"
//     });
//     event.remove({
//       id: "workspace:crafting/shapeless/ingot/" + item + "_ingot"
//     });
//     event.remove({
//       id: "workspace:crafting/shapeless/nugget/" + item + "_nugget"
//     });
//     event.remove({
//       id: "workspace:smelting/smelting/" + item + "_ingot_from_dust"
//     });
//   });
//
//╔════════════════════════════════════════╗
//║         INDUSTRIAL REVOLUTION          ║
//╚════════════════════════════════════════╝
    var indrev_materials = [
      "copper",
      "gold",
      "iron",
      "tin",
      "steel",
      "silver",
      "lead",
      "electrum",
      "bronze",
      "tungsten",
    ];

    var indrev_dusts = [
      "copper",
      "gold",
      "iron",
      "tin",
      "steel",
      "diamond",
      "coal",
      "silver",
      "lead",
      "electrum",
      "bronze",
      "tungsten",
    ];

    var indrev_metals = [
      "copper",
      "tin",
      "steel",
      "lead",
      "silver",
      "electrum",
      "bronze",
      "tungsten",
    ];

    var indrev_ores = ["copper", "tin", "lead", "silver", "tungsten"];

    // Plates
    indrev_materials.forEach(function(item, index) {
      event.remove({
        type: "crafting_shaped",
        output: "techreborn:" + item + "_plate",
      });

      event.replaceOutput({},
        "indrev:" + item + "_plate",
        "techreborn:" + item + "_plate"
      );

      event.remove({
        id: "indrev:shapeless/" + item + "_plate" + "_from_hammer",
      });
    });

    // Dusts
    indrev_dusts.forEach(function(item, index) {
      event.replaceOutput({},
        "indrev:" + item + "_dust",
        "techreborn:" + item + "_dust"
      );
    });

    event.replaceOutput({}, "indrev:sawdust", "techreborn:saw_dust");

    // Ingots
    indrev_metals.forEach(function(item, index) {
      event.replaceOutput({},
        "indrev:" + item + "_ingot",
        "techreborn:" + item + "_ingot"
      );

      // Blocks
      event.replaceOutput({},
        "indrev:" + item + "_block",
        "techreborn:" + item + "_storage_block"
      );

      event.remove({
        id: "indrev:shapeless/" + item + "_ingot_from_block"
      });
      event.remove({
        id: "indrev:shapeless/" + item + "_nugget"
      });
      event.remove({
        id: "indrev:shaped/" + item + "_ingot_from_nugget"
      });
      event.remove({
        id: "indrev:shaped/" + item + "_ingot_from_nuggets"
      });
      event.remove({
        id: "indrev:shaped/" + item + "_block_from_nugget"
      });
      event.remove({
        id: "indrev:shaped/" + item + "_block"
      });
    });

    indrev_materials.forEach(function(item, index) {
      event.remove({
        id: "indrev:smelting/" + item + "_ingot_from_smelting"
      });
      event.remove({
        id: "indrev:smelting/" + item + "_ingot_from_dust"
      });
      event.remove({
        id: "indrev:smelting/" + item + "_ingot"
      });
      event.remove({
        id: "indrev:blasting/" + item + "_ingot"
      });
      event.remove({
        id: "indrev:blasting/" + item + "_ingot_from_smelting"
      });
      event.remove({
        id: "indrev:blasting/" + item + "_ingot_from_dust"
      });
    });

    indrev_ores.forEach(function(item, index) {
      event.remove({
        id: "indrev:smelting/" + item + "_ingot_from_ore"
      });
      event.remove({
        id: "indrev:blasting/" + item + "_ingot_from_ore"
      });
    });
	
//╔════════════════════════════════════════╗
//║                CROPTOPIA               ║
//╚════════════════════════════════════════╝

    var salt = ["sandwichable:salt"];

    salt.forEach(function(item, index) {
      event.replaceOutput({}, item, "modern_industrialization:salt_dust");

      event.replaceInput({}, item, "modern_industrialization:salt_dust");
    });

//╔════════════════════════════════════════╗
//║        MODERN INDUSTRIALIZATION        ║
//╚════════════════════════════════════════╝

    var modern_materials = [
      "copper",
      "aluminum",
      "bronze",
      "chrome",
      "diamond",
      "electrum",
      "emerald",
      "gold",
      "invar",
      "redstone",
      "iron",
      "quartz",
      "lead",
      "platinum",
      "nickel",
      "silver",
      "steel",
      "tin",
      "titanium",
      "tungsten",
    ];

    var modern_dusts = [
      "charcoal",
      "coal",
      "copper",
      "aluminum",
      "bronze",
      "bauxite",
      "chrome",
      "diamond",
      "electrum",
      "emerald",
      "gold",
      "invar",
      "nickel",
      "redstone",
      "manganese",
      "iron",
      "quartz",
      "lead",
      "ruby",
      "nickel",
      "silver",
      "steel",
      "tin",
      "titanium",
      "tungsten",
      "platinum",
    ];

    var modern_nuggets = [
      "copper",
      "aluminum",
      "bronze",
      "chrome",
      "electrum",
      "invar",
      "nickel",
      "lead",
      "nickel",
      "silver",
      "steel",
      "tin",
      "titanium",
      "iridium",
      "platinum",
      "tungsten",
    ];

    var modern_metals = [
      "copper",
      "aluminum",
      "bronze",
      "chrome",
      "electrum",
      "invar",
      "iridium",
      "redstone",
      "lead",
      "nickel",
      "silver",
      "steel",
      "tin",
      "titanium",
      "tungsten",
      "platinum",
    ];

    var modern_ores = [
      "copper",
      "bauxite",
      "iridium",
      "lead",
      "silver",
      "tin",
      "tungsten",
    ];

    // Plates
    modern_materials.forEach(function(item, index) {
      event.replaceOutput({},
        "modern_industrialization:" + item + "_plate",
        "techreborn:" + item + "_plate"
      );
    });

    event.replaceOutput({},
      "modern_industrialization:silicon_plate",
      "techreborn:silicon_plate"
    );

    // Dusts
    modern_dusts.forEach(function(item, index) {
      event.replaceOutput({},
        "modern_industrialization:" + item + "_dust",
        "techreborn:" + item + "_dust"
      );
    });

    // Ingots
    modern_metals.forEach(function(item, index) {
      event.replaceOutput({},
        "modern_industrialization:" + item + "_ingot",
        "techreborn:" + item + "_ingot"
      );

      // Blocks
      event.replaceInput({},
        "modern_industrialization:" + item + "_block",
        "techreborn:" + item + "_storage_block"
      );
    });

    // Nuggets
    modern_nuggets.forEach(function(item, index) {
      event.replaceOutput({},
        "modern_industrialization:" + item + "_nugget",
        "techreborn:" + item + "_nugget"
      );
    });

    // Ores
    modern_ores.forEach(function(item, index) {
      event.replaceOutput({},
        "modern_industrialization:" + item + "_ore",
        "techreborn:" + item + "_ore"
      );
    });

    event.replaceOutput({},
      "modern_industrialization:salt_ore",
      "croptopia:salt_ore"
    );

    event.replaceOutput({},
      "modern_industrialization:platinum_ore",
      "techreborn:sheldonite_ore"
    );

    event.replaceOutput({},
      "modern_industrialization:quartz_ore",
      "minecraft:nether_quartz_ore"
    );

    event.remove({
      input: "modern_industrialization:quartz_ore",
    });

    //
    modern_materials.forEach(function(item, index) {
      event.remove({
        id: "modern_industrialization:generated/materials/" +
          item +
          "/smelting/dust_smelting",
      });

      event.remove({
        id: "modern_industrialization:generated/materials/" +
          item +
          "/smelting/dust_blasting",
      });
    });

    modern_ores.forEach(function(item, index) {
      event.remove({
        id: "modern_industrialization:generated/materials/" +
          item +
          "/smelting/ore_smelting",
      });

      event.remove({
        id: "modern_industrialization:generated/materials/" +
          item +
          "/smelting/ore_blasting",
      });
    });

    modern_metals.forEach(function(item, index) {
      event.remove({
        id: "modern_industrialization:generated/materials/" +
          item +
          "/craft/ingot_from_nugget",
      });

      event.remove({
        id: "modern_industrialization:generated/materials/" +
          item +
          "/craft/nugget_from_ingot",
      });

      event.remove({
        id: "modern_industrialization:generated/materials/" +
          item +
          "/craft/ingot_from_block",
      });

      event.remove({
        id: "modern_industrialization:generated/materials/" +
          item +
          "/craft/block_from_ingot",
      });
    });

//╔════════════════════════════════════════╗
//║              COMMON TAGS               ║
//╚════════════════════════════════════════╝

    var materials = [
      "tin",
      "copper",
      "lead",
      "aluminum",
      "chrome",
      "bronze",
      "silicon",
      "diamond",
      "electrum",
      "emerald",
      "platinum",
      "invar",
      "nickel",
      "iron",
      "gold",
      "silver",
      "steel",
      "titanium",
      "tungsten",
    ];

    var ingots = [
      "tin",
      "copper",
      "lead",
      "aluminum",
      "bronze",
      "electrum",
      "chrome",
      "invar",
      "iridium",
      "nickel",
      "silver",
      "steel",
      "titanium",
      "tungsten",
      "platinum",
    ];

    var dusts = [
      "invar",
      "coal",
      "charcoal",
      "iron",
      "gold",
      "diamond",
      "emerald",
      "manganese",
      "chrome",
      "ruby",
      "bauxite",
      "nickel",
      "quartz",
      "copper",
      "aluminum",
      "lead",
      "tungsten",
      "tin",
      "silver",
      "steel",
      "bronze",
      "electrum",
      "titanium",
      "tungsten",
      "chrome",
    ];

    var ores = ["tin", "copper", "lead", "bauxite", "silver", "tungsten"];

    // Dusts
    dusts.forEach(function(item, index) {
      event.replaceInput({},
        "#c:" + item + "_dusts",
        "techreborn:" + item + "_dust"
      );
    });

    event.replaceInput({}, "indrev:sawdust", "techreborn:saw_dust");

    // Plates
    materials.forEach(function(item, index) {
      event.replaceInput({},
        "#c:" + item + "_plates",
        "techreborn:" + item + "_plate"
      );
    });

    // Ores
    ores.forEach(function(item, index) {
      event.replaceInput({},
        "#c:" + item + "_ores",
        "techreborn:" + item + "_ore"
      );
    });

    event.replaceInput({},
      "#c:platinum_ores",
      "techreborn:sheldonite_ore"
    );

    // Ingots
    ingots.forEach(function(item, index) {
      event.replaceInput({},
        "#c:" + item + "_ingots",
        "techreborn:" + item + "_ingot"
      );
    });

    // Nuggets
    ingots.forEach(function(item, index) {
      event.replaceInput({},
        "#c:" + item + "_nuggets",
        "techreborn:" + item + "_nugget"
      );
    });

    // Blocks
    ingots.forEach(function(item, index) {
      event.replaceInput({},
        "#c:" + item + "_blocks",
        "techreborn:" + item + "_storage_block"
      );
    });

    event.replaceInput({}, "minecraft:quartz", "#c:quartz");
    event.replaceInput({}, "agape_space:iron_gear", "modern_industrialization:iron_gear");
    event.replaceOutput({}, "c:iron_gears", "modern_industrialization:iron_gear");
  });
});


