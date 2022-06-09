//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {
//╔════════════════════════════════════════╗
//║       INDUSTRIAL REVOLUTION/TOOLS      ║
//╚════════════════════════════════════════╝
var indrev_tools = [
 "steel",
 "silver",
 "lead",
 "tin",
 "copper",
 "bronze",
];

 indrev_tools.forEach(function (item, index) {
 event.remove({ output: "indrev:" + item + "_pickaxe" });
 event.remove({ output: "indrev:" + item + "_shovel" });
 event.remove({ output: "indrev:" + item + "_axe" });
 event.remove({ output: "indrev:" + item + "_hoe" });
 event.remove({ output: "indrev:" + item + "_sword" });
 event.remove({ output: "adapaxels:" + item + "_paxel"});
 });
//╔════════════════════════════════════════╗
//║    INDUSTRIAL REVOLUTION/EQUIPMENT     ║
//╚════════════════════════════════════════╝
var equipment = [
 "steel",
 "silver",
 "lead",
 "tin",
 "copper",
 "bronze",
];
 
 equipment.forEach(function (item, index) {
 event.remove({ output: "indrev:" + item + "_helmet"});
 event.remove({ output: "indrev:" + item + "_chestplate"});
 event.remove({ output: "indrev:" + item + "_leggings"});
 event.remove({ output: "indrev:" + item + "_boots"});
});	
//╔════════════════════════════════════════╗
//║     INDUSTRIAL REVOLUTION/SCYTHES      ║
//╚════════════════════════════════════════╝
var harvest_scythes = [
 "bronze",
];

 harvest_scythes.forEach(function (item, index) {
 event.remove({ output: "harvest_scythes:" + item + "_scythe"});
 event.remove({ output: "harvest_scythes:" + item + "_machete"});
});
//╔════════════════════════════════════════╗
//║       INDUSTRIAL REVOLUTION/MISC       ║
//╚════════════════════════════════════════╝
	event.remove({ id: "indrev:shapeless/steel_dust" });
})