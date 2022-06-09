//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║         INDUSTRIAL REVOLUTION          ║
  //╚════════════════════════════════════════╝
  event.remove({
    output: "sandwichable:salt"
  });
  event.custom({
    "type": "indrev:infuse",
    "ingredients": [{
      "item": "bewitchment:salt"
    }],
    "output": {
      "item": "croptopia:salt",
      "count": 1
    },
    "processTime": 100
  });
})
