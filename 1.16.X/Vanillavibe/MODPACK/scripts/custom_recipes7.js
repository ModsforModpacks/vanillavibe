events.listen("recipes", function (event) {	

 // Blockus iron gate //
 
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "NN",
    "##",
    "##"
  ],
  "key": {
    "#": {
      "tag": "pigsteel:irons"
    },
	"N": {
      "tag": "pigsteel:iron_nuggets"
    }
  },
  "result": {
    "item": "blockus:iron_gate",
    "count": 3
  }
}).id('blockus:iron_gate')

 // Expanded Storages //
 
event.custom({
  "type": "crafting_shaped",
  "pattern": [ "III", "IBI", "III" ],
  "key": {
    "I": { "tag": "pigsteel:irons" },
    "B": { "tag": "c:wooden_barrels" }
  },
  "result": { "item": "expandedstorage:iron_barrel" },
  "group": "expandedstorage:iron_barrel"

}).id('expandedstorage:iron_barrel')

 // Iron Chest //
 
event.custom({
  "type": "crafting_shaped",
  "pattern": [ "III", "ICI", "III" ],
  "key": {
    "I": { "tag": "pigsteel:irons" },
    "C": { "tag": "c:wooden_chests" }
  },
  "result": { "item": "expandedstorage:iron_chest" },
  "group": "expandedstorage:iron_chest"
}).id('expandedstorage:iron_chest')

 // Old Iron Chest //
 
event.custom({
  "type": "crafting_shaped",
  "pattern": [ "III", "ICI", "III" ],
  "key": {
    "I": { "tag": "pigsteel:irons" },
    "C": { "item": "expandedstorage:old_wood_chest" }
  },
  "result": { "item": "expandedstorage:old_iron_chest" },
  "group": "expandedstorage:old_iron_chest"

}).id('expandedstorage:old_iron_chest')

 // Storage upgrade //
 
event.custom({
  "type": "crafting_shaped",
  "pattern": [ "III", "IPI", "III" ],
  "key": {
    "P": { "tag": "minecraft:planks" },
    "I": { "tag": "pigsteel:irons" }
  },
  "result": { "item": "expandedstorage:wood_to_iron_conversion_kit" }

}).id('expandedstorage:wood_to_iron_conversion_kit')

 // Frayed Backpack //
 
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "###",
    "#X#",
    "###"
  ],
  "key": {
    "#": {
      "tag": "pigsteel:irons"
    },
    "X": {
      "item": "inmis:frayed_backpack"
    }
  },
  "result": {
    "item": "inmis:plated_backpack"
   }
}).id('inmis:frayed_backpack')

 // Trap //
 
event.custom({
	"type": "crafting_shaped",
	"pattern": [
		"#O#",
		"OiO",
		"ROR"
	],
	"key": {
		"#": {
			"item": "minecraft:cobblestone"
		},
		"O": {
			"tag": "minecraft:planks"
		},
		"i": {
			"tag": "pigsteel:irons"
		},
		"R": {
			"item": "minecraft:redstone"
		}
	},
	"result": {
		"item": "trapexpansion:fan",
		"count": 1
	}
}).id('trapexpansion:fan')

 // Spike trap //
 
event.custom({
  "type": "crafting_shaped",
  "pattern": [
    "i i",
    "iii",
    "SRS"
  ],
  "key": {
    "i": {
      "tag": "pigsteel:irons"
    },
    "S": {
      "item": "minecraft:stone"
    },
    "R": {
      "item": "minecraft:redstone_torch"
    }
  },
  "result": {
    "item": "trapexpansion:powered_spike_trap",
    "count": 1
  }
}).id("trapexpansion:powered_spike_trap")

 // Spike trap 2 //
 
event.custom({
  "type": "crafting_shaped",
  "pattern": [
    "i i",
    "iii",
    "SRS"
  ],
  "key": {
    "i": {
      "tag": "pigsteel:irons"
    },
    "S": {
      "item": "minecraft:stone"
    },
    "R": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "trapexpansion:spike_trap",
    "count": 1
  }
}).id('trapexpansion:spike_trap')
})