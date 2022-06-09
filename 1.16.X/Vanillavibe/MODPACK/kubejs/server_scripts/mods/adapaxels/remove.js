//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║            ADAPAXELS/TOOLS             ║
  //╚════════════════════════════════════════╝
  var paxels = [
    "ruby",
    "sapphire",
    "peridot",
    "bronze",
  ];

  paxels.forEach(function(item, index) {
    event.remove({
      output: "adapaxels:" + item + "_paxel"
    });
    event.remove({
      id: "adapaxels:" + item + "_paxel"
    });
  });
  //╔════════════════════════════════════════╗
  //║         BASICSHIELDS/EQUIPMENT         ║
  //╚════════════════════════════════════════╝
  var basicshields = [
    "ruby",
    "sapphire",
    "peridot",
    "bronze",
  ];

  basicshields.forEach(function(item, index) {
    event.remove({
      output: "basicshields:" + item + "_shield"
    });
    event.remove({
      id: "basicshields:" + item + "_shield"
    });
  });
  event.remove({
    output: "kibe:pocket_crafting_table"
  });
  event.remove({
    id: "kibe:pocket_crafting_table"
  });
})
