// Lucky Block

onEvent('recipes', event => {
event.custom({
  "type": "craftspace:advance_crafting_shaped",
  "pattern": [
	"XXXX",
	"XXXX",
	"XXXX",
	"XXXX"
  ],
  "key": {
    "X": {
      "item": "minecraft:gold_block"
    }
  },
  "result": {
    "item": "lucky:lucky_block"
  }
});
});