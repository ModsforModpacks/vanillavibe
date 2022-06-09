//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {
  event.replaceOutput({}, "betterend:ender_dust", "appliedenergistics2:ender_dust");
  event.replaceInput({}, "#c:ender_pearl_dusts", "techreborn:ender_pearl_dust");
})
