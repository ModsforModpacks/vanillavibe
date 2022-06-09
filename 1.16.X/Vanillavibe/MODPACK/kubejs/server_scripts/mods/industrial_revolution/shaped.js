//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {

//╔════════════════════════════════════════╗
//║         INDUSTRIAL REVOLUTION          ║
//╚════════════════════════════════════════╝

	event.remove({ output: "indrev:cooler_cell" });
	event.shaped(item.of("indrev:cooler_cell"), [
	["null"         , "#c:tin_ingots"  , "null"         ],
	["#c:tin_ingots", "indrev:coolant_bucket", "#c:tin_ingots"],
	["null"         , "#c:tin_ingots"  , "null"         ],
	]);
});