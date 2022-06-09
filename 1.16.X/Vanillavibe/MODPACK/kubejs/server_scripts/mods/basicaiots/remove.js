//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║             5 IN 1 TOOLS               ║
  //╚════════════════════════════════════════╝
  var basic_aiots = [
    "ruby",
    "sapphire",
    "peridot",
    "bronze",
    "steel",
    "tin",
    "copper",
    "silver",
    "lead",
  ];

  basic_aiots.forEach(function(item, index) {
    event.remove({
      output: "basicaiots:" + item + "_aiot"
    });
  });
});
