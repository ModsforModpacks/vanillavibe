//╔════════════════════════════════════════╗
//║            CREATED BY CSS              ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {
  event.custom({
   "type": "betterend:infusion",
   "input":{
      "item": "minecraft:iron_block"
   },
   "result":{
      "item": "modern_industrialization:forge_hammer",
      "count": 1
   },
   "time": 200,
   "catalysts": {
      "north_east": "minecraft:stick",
      "south_east": "minecraft:stick",
      "south_west": "minecraft:stick",
      "north_west": "minecraft:stick"
   }
  });
})