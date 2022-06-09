//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║            TECHREBORN/TOOLS            ║
  //╚════════════════════════════════════════╝
  var tech_tools = [
    "ruby",
    "sapphire",
    "peridot",
    "bronze",
  ];

  tech_tools.forEach(function(item, index) {
    event.remove({
      output: "techreborn:" + item + "_pickaxe"
    });
    event.remove({
      output: "techreborn:" + item + "_spade"
    });
    event.remove({
      output: "techreborn:" + item + "_axe"
    });
    event.remove({
      output: "techreborn:" + item + "_hoe"
    });
    event.remove({
      output: "techreborn:" + item + "_sword"
    });
  });
  //╔════════════════════════════════════════╗
  //║          TECHREBORN/EQUIPMENT          ║
  //╚════════════════════════════════════════╝
  var tech_eq = [
    "ruby",
    "sapphire",
    "peridot",
    "bronze",
  ];

  tech_eq.forEach(function(item, index) {
    event.remove({
      output: "techreborn:" + item + "_helmet"
    });
    event.remove({
      output: "techreborn:" + item + "_chestplate"
    });
    event.remove({
      output: "techreborn:" + item + "_leggings"
    });
    event.remove({
      output: "techreborn:" + item + "_boots"
    });
  });
  //╔════════════════════════════════════════╗
  //║           TECHREBORN/SCYTHES           ║
  //╚════════════════════════════════════════╝
  var scythes = [
    "ruby",
    "sapphire",
    "peridot",
  ];

  scythes.forEach(function(item, index) {
    event.remove({
      output: "harvest_scythes:" + item + "_scythe"
    });
    event.remove({
      output: "harvest_scythes:" + item + "_machete"
    });
  });
  //╔════════════════════════════════════════╗
  //║            TECHREBORN/MISC             ║
  //╚════════════════════════════════════════╝
  event.remove({
    id: "techreborn:rolling_machine/minecart"
  });
  event.remove({ output: "techreborn:diamond_nugget" });
  event.remove({ output: "techreborn:emerald_nugget" });
})