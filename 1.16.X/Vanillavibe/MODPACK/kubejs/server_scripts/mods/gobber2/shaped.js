onEvent('recipes', event => {
// master_infusion_crystal
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
      "item": "mysticalagriculture:infusion_crystal"
    }
  },
  "result": {
    "item": "mysticalagriculture:master_infusion_crystal"
  }
});
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

//╔═══════════════════════════════════════╗
//║            GOBBER/ALL                 ║
//╚═══════════════════════════════════════╝
event.custom({
    "type": "minecraft:crafting_shaped",
    
    "pattern":
    [
        "BCB",
        "DAD",
        "BAB"
    ],
    
    "key":
    {
        "A":
        {
            "item": "gobber2:gobber2_ingot_nether"
        },
        "B":
        {
            "item": "minecraft:red_concrete"
        },
        "C":
        {
            "item": "gobber2:block_healer"
        },
        "D":
        {
            "item": "gobber2:gobber2_ring_nether"
        }
    },
    
    "result":
    {
        "item": "gobber2:block_defender",
        "count": 1
    }
})
})