//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {
//╔════════════════════════════════════════╗
//║       APPLIED ENERGETICS2/TOOLS        ║
//╚════════════════════════════════════════╝
 
var ae2_tools = ["certus", "nether"];
   
 ae2_tools.forEach(function (item, index) {
 event.remove({ output: "appliedenergistics2:" + item + "_quartz_axe" });
 event.remove({ output: "appliedenergistics2:" + item + "_quartz_hoe" });
 event.remove({ output: "appliedenergistics2:" + item + "_quartz_pickaxe" });
 event.remove({ output: "appliedenergistics2:" + item + "_quartz_shovel" });
 event.remove({ output: "appliedenergistics2:" + item + "_quartz_sword" });
 });
 
//╔════════════════════════════════════════╗
//║       APPLIED ENERGETICS2/FACADES      ║
//╚════════════════════════════════════════╝

var ae2_facade = [
	"276",
	"30",
	"31",
	"32",
	"33",
	"34",
	"35",
	"36",
	"181",
	"200",
	"322",
	"976",
	"977",
	"5841",
	"5842",
	"5843",
	"7885",
	"7514",
	"7676",
	"7768",
	"7822",
	"7840",
	"7862",
	"6858",
	"8279",
	"8021",
	"8081",
	"8277",
	"8278",
	"8667",
	"8668",
	"9030",
	"9031",
	"9032",
	"9033",
	"9034",
	"9035",
	"9036",
	"9037",
	"9038",
	"9039",
	"9040",
	"9041",
	"9042",
	"9043",
	"9044",
	"9045",
	"10356",
	"10357",
	"10358",
	"10359",
	"10360",
	"10361",
	"10362",
	"10363",
	"10364",
	"10365",
	];

 ae2_facade.forEach(function (item, index) {
 event.remove({ output: "appliedenergistics2:" + "facade/" + item });
 })
 
 ae2_facade.forEach(function (item, index) {
 event.remove({ id: "appliedenergistics2:" + "facade/" + item });
 })
 event.remove({ id: "appliedenergistics2:facade" });
})