//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) { 
event.remove({ id: "sandwichable:tomato_seeds_from_tomato" });
event.remove({ id: "sandwichable:cucumber_seeds" });
})