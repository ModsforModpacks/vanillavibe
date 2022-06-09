// added as a reminder because I threw away that modification anyway
// maybe you'll find it useful

onEvent('recipes', event => {
//╔═══════════════════════════════════════╗
//║              KIBE/RINGS               ║
//╚═══════════════════════════════════════╝
  // Angel Ring
  event.remove({
    output: "kibe:angel_ring"
  });
  
event.custom({
  "type": "craftspace:advance_crafting_shaped",
  "pattern": [
	"FEEF",
	"EAAE",
	"DBBD",
	"CAAC"
  ],
  "key": {
    "X": {
      "item": "minecraft:gold_block"
    },
      "A": {
      "item": "minecraft:white_banner"
    },
      "B": {
      "item": "kibe:diamond_ring"
    },
      "C": {
      "item": "modern_industrialization:gold_crushed_dust"
    },
      "D": {
      "item": "mysticalagriculture:gold_essence"
    },
      "E": {
      "item": "modern_industrialization:gold_curved_plate"
    },
      "F": {
      "item": "minecraft:gold_ingot"
  },
  "result": {
    "item": "kibe:angel_ring"
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

// block_defender
  event.remove({
    output: "gobber2:block_defender"
  });

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
    }
});

  // block_healer
  event.remove({
    output: "gobber2:block_healer"
  });
  
event.custom({
    "type": "craftspace:advance_crafting_shaped",
    
    "pattern":
    [
        "BCCB",
        "CAAC",
		"CAAC",
        "BAAB"
    ],
    
    "key":
    {
        "A":
        {
            "item": "gobber2:gobber2_ingot"
        },
        "B":
        {
            "item": "minecraft:black_concrete"
        },
        "C":
        {
            "item": "gobber2:gobber2_ring"
        }
    },
    
    "result":
    {
        "item": "gobber2:block_healer"
    }
});

  event.remove({
    output: "gobber2:block_maturator"
  });
  
event.custom({
    "type": "craftspace:advance_crafting_shaped",
    
    "pattern":
    [
        "ABBA",
        "ACCA",
        "ACCA",
		"ABBA"
    ],
    
    "key":
    {
        "A":
        {
            "item": "gobber2:gobber2_block_nether"
        },
        "B":
        {
            "item": "minecraft:black_concrete"
        },
        "C":
        {
            "item": "gobber2:gobber2_ring_farmer"
        }
    },
    
    "result":
    {
        "item": "gobber2:block_maturator"
    }
});

  event.remove({
    output: "gobber2:block_protector"
  });
  
event.custom({
    "type": "craftspace:advance_crafting_shaped",
    
    "pattern":
    [
        "BCCB",
        "DAAD",
        "BAAB",
		"BCCB"
    ],
    
    "key":
    {
        "A":
        {
            "item": "gobber2:gobber2_ingot_end"
        },
        "B":
        {
            "item": "gobber2:gobber2_block_end"
        },
        "C":
        {
            "item": "gobber2:block_defender"
        },
        "D":
        {
            "item": "gobber2:gobber2_ring_end"
        }
    },
    
    "result":
    {
        "item": "gobber2:block_protector"
    }
});

  event.remove({
    output: "gobber2:dragon_elytra"
  });
  
event.custom({
    "type": "craftspace:advance_crafting_shaped",
    
    "pattern":
    [
        "DAAD",
        "CBBC",
		"CBBC",
        "DCCD"
    ],
    
    "key":
    {
        "A":
        {
            "item": "minecraft:dragon_head"
        },
        "B":
        {
            "item": "minecraft:elytra"
        },
        "C":
        {
            "item": "gobber2:gobber2_ingot_end"
        },
        "D":
        {
            "item": "minecraft:dragon_breath"
        }
    },
    
    "result":
    {
        "item": "gobber2:dragon_elytra",
    }
});

  event.remove({
    output: "gobber2:dragon_star"
  });
  
event.custom({
    "type": "craftspace:advance_crafting_shaped",
    
    "pattern":
    [
        "DAD",
        "CBC",
        "DCD"
    ],
    
    "key":
    {
        "A":
        {
            "item": "minecraft:dragon_head"
        },
        "B":
        {
            "item": "minecraft:nether_star"
        },
        "C":
        {
            "item": "gobber2:gobber2_ingot_end"
        },
        "D":
        {
            "item": "minecraft:dragon_breath"
        }
    },
    
    "result":
    {
        "item": "gobber2:dragon_star",
        "count": 1
    }
});

  event.remove({
    output: "gobber2:gobber2_axe"
  });
  
event.custom({
    "type": "craftspace:advance_crafting_shaped",
    
	"pattern":
	[
		"II ",
		"IS ",
		" S "
	],
	
	"key":
	{
		"I": { "item": "gobber2:gobber2_ingot" },
		"S": { "item": "gobber2:gobber2_rod" }	
	},
	
	"result": { "item": "gobber2:gobber2_axe" }
})

  event.remove({
    output: "gobber2:gobber2_axe_end"
  });
  
event.custom({
    "type": "craftspace:advance_crafting_shaped",
    
	"pattern":
	[
		"II ",
		"IS ",
		" S "
	],
	
	"key":
	{
		"I": { "item": "gobber2:gobber2_ingot_end" },
		"S": { "item": "gobber2:gobber2_rod_end" }	
	},
	
	"result": { "item": "gobber2:gobber2_axe_end" }
});

  event.remove({
    output: "gobber2:gobber2_axe_nether"
  });
  
event.custom({
    "type": "craftspace:advance_crafting_shaped",
    
	"pattern":
	[
		"II ",
		"IS ",
		" S "
	],
	
	"key":
	{
		"I": { "item": "gobber2:gobber2_ingot_nether" },
		"S": { "item": "gobber2:gobber2_rod_nether" }	
	},
	
	"result": { "item": "gobber2:gobber2_axe_nether" }
});

  event.remove({
    output: "gobber2:gobber2_block_end"
  });
  
event.custom({
    "type": "craftspace:advance_crafting_shaped",
    
	"pattern":
	[
		"III",
		"III",
		"III"
	],
	
	"key":
	{
		"I": { "item": "gobber2:gobber2_ingot_end" }	
	},
	
	"result": { "item": "gobber2:gobber2_block_end" }
});

  event.remove({
    output: "gobber2:gobber2_block"
  });
  
event.custom({
    "type": "craftspace:advance_crafting_shaped",
	"pattern":
	[
		"IIII",
		"IIII",
		"IIII",
		"IIII"
	],
	
	"key":
	{
		"I": { "item": "gobber2:gobber2_ingot" }	
	},
	
	"result": { "item": "gobber2:gobber2_block" }
});

  event.remove({
    output: "gobber2:gobber2_ingot"
  });
  
event.custom({
    "type": "craftspace:advance_crafting_shaped",
	
	"pattern":
	[
		"B   B",
		"     ",
		"     ",
		"B   B"
	],
	
	"key":
	{
		"B": { "item": "gobber2:gobber2_block" }	
	},
	
	"result": { "item": "gobber2:gobber2_ingot",
	"count": 9 }
});

  event.remove({
    output: "gobber2:gobber2_block_nether"
  });
  
event.custom({
    "type": "craftspace:advance_crafting_shaped",
	
	"pattern":
	[
		"IIII",
		"IIII",
		"IIII",
		"IIII"
	],
	
	"key":
	{
		"I": { "item": "gobber2:gobber2_ingot_nether" }	
	},
	
	"result": { "item": "gobber2:gobber2_block_nether" }
});

  event.remove({
    output: "gobber2:gobber2_boots"
  });
  
event.custom({
    "type": "craftspace:advance_crafting_shaped",
	
	"pattern":
	[
		"E   ",
		"E   ",
		"E   ",
		"E   ",
		"IIII"
	],
	
	"key":
	{
		"I": { "item": "gobber2:gobber2_ingot" },
		"E": { "item": "minecraft:emerald" }	
	},
	
	"result": { "item": "gobber2:gobber2_boots" }
});

  event.remove({
    output: "gobber2:gobber2_bow_end"
  });
  
event.custom({
    "type": "craftspace:advance_crafting_shaped",
	
	"pattern":
	[
		"  IS",
		"I  S",
		"I  S"	
		"  IS"
	],
	
	"key":
	{
		"I": { "item": "gobber2:gobber2_rod_end" },
		"S": { "item": "minecraft:string" }	
	},
	
	"result": { "item": "gobber2:gobber2_bow_end" }
});


  event.remove({
    output: "gobber2:gobber2_bow_nether"
  });
  
event.custom({
    "type": "craftspace:advance_crafting_shaped",
	
	"pattern":
	[
		"  IS",
		"I  S",
		"I  S"	
		"  IS"
	],
	
	"key":
	{
		"I": { "item": "gobber2:gobber2_rod_nether" },
		"S": { "item": "minecraft:string" }	
	},
	
	"result": { "item": "gobber2:gobber2_bow_nether" }
});

  event.remove({
    output: "gobber2:gobber2_chestplate"
  });
  
event.custom({
    "type": "craftspace:advance_crafting_shaped",
	
	"pattern":
	[
		"I  I",
		"IEEI",
		"IBBI"
		"IIII"
	],
	
	"key":
	{
		"I": { "item": "gobber2:gobber2_ingot" },
		"E": { "item": "minecraft:emerald" },
		"B": { "item": "minecraft:end_crystal" }	
	},
	
	"result": { "item": "gobber2:gobber2_chestplate" }
});

  event.remove({
    output: "gobber2:gobber2_chestplate_end"
  });
  
event.custom({
    "type": "craftspace:advance_crafting_shaped",
	
    "pattern":
    [
        "G  G",
        "GGGG",
        "GGGG",
		"GGGG"
    ],
    
    "key":
    {
        "G":
        {
            "item": "gobber2:gobber2_links_end"
        }
    },
    
    "result":
    {
        "item": "gobber2:gobber2_chestplate_end",
        "count": 1
    }
});

  event.remove({
    output: "gobber2:gobber2_chestplate_nether"
  });
  
event.custom({
    "type": "craftspace:advance_crafting_shaped",
	
    "pattern":
    [
        "G  G",
        "GGGG",
        "GGGG",
		"GGGG"
    ],
    
    "key":
    {
        "G":
        {
            "item": "gobber2:gobber2_ingot_nether"
        }
    },
    
    "result":
    {
        "item": "gobber2:gobber2_chestplate_nether",
        "count": 1
    }
});


  event.remove({
    output: "gobber2:gobber2_excavator"
  });
  
event.custom({
    "type": "craftspace:advance_crafting_shaped",
	
    "pattern":
    [
        " AAA",
        " BBA",
        "B   "
	    "B   "
    ],
    
    "key":
    {
        "A":
        {
            "item": "gobber2:gobber2_ingot"
        },      
        "B":
        {
            "item": "gobber2:gobber2_rod"
        }
    },
    
    "result":
    {
        "item": "gobber2:gobber2_excavator",
    }
});

  event.remove({
    output: "gobber2:gobber2_excavator_end"
  });
  
event.custom({
    "type": "craftspace:advance_crafting_shaped",
	
    "pattern":
    [
        " AAA",
        " BBA",
        "B   "
	    "B   "
    ],
    
    "key":
    {
        "A":
        {
            "item": "gobber2:gobber2_ingot_end"
        },      
        "B":
        {
            "item": "gobber2:gobber2_rod_end"
        }
    },
    
    "result":
    {
        "item": "gobber2:gobber2_excavator_end",
    }
});

  event.remove({
    output: "gobber2:gobber2_excavator_nether"
  });
  
event.custom({
    "type": "craftspace:advance_crafting_shaped",
	
    "pattern":
    [
        " AAA",
        " BBA",
        "B   "
	    "B   "
    ],
    
    "key":
    {
        "A":
        {
            "item": "gobber2:gobber2_ingot_nether"
        },      
        "B":
        {
            "item": "gobber2:gobber2_rod_nether"
        }
    },
    
    "result":
    {
        "item": "gobber2:gobber2_excavator_nether",
    }
});

  event.remove({
    output: "gobber2:gobber2_foo"
  });
  
event.custom({
    "type": "craftspace:advance_crafting_shaped",
	
	"pattern":
	[
		"ABBA",
		"BBBB",
		"BBBB",
		"ABBA"
	],
	
	"key":
	{
		"A": { "item": "gobber2:gobber2_glob"  },
		"B": { "item": "minecraft:charcoal"  }
	},
	
	"result": { "item": "gobber2:gobber2_foo",
	}
});

  event.remove({
    output: "gobber2:gobber2_hammer"
  });
  
event.custom({
    "type": "craftspace:advance_crafting_shaped",
	
    "pattern":
    [
        "ACCA",
        "ABBA",
        " BB "
        " BB "
    ],
    
    "key":
    {
        "A":
        {
            "item": "gobber2:gobber2_ingot"
        },      
        "B":
        {
            "item": "gobber2:gobber2_rod"
        },
        "C":
        {
            "item": "gobber2:gobber2_block"
        }
    },
    
    "result":
    {
        "item": "gobber2:gobber2_hammer",
    }
));

  event.remove({
    output: "gobber2:gobber2_hammer_end"
  });
  
event.custom({
    "type": "craftspace:advance_crafting_shaped",
	
    "pattern":
    [
        "ACCA",
        "ABBA",
        " BB "
        " BB "
    ],
    
    "key":
    {
        "A":
        {
            "item": "gobber2:gobber2_ingot_end"
        },      
        "B":
        {
            "item": "gobber2:gobber2_rod_end"
        },
        "C":
        {
            "item": "gobber2:gobber2_block_end"
        }
    },
    
    "result":
    {
        "item": "gobber2:gobber2_hammer",
    }
));

 event.remove({
    output: "gobber2:gobber2_hammer_nether"
  });
  
event.custom({
    "type": "craftspace:advance_crafting_shaped",
	
    "pattern":
    [
        "ACCA",
        "ABBA",
        " BB "
        " BB "
    ],
    
    "key":
    {
        "A":
        {
            "item": "gobber2:gobber2_ingot_nether"
        },      
        "B":
        {
            "item": "gobber2:gobber2_rod_nether"
        },
        "C":
        {
            "item": "gobber2:gobber2_block_nether"
        }
    },
    
    "result":
    {
        "item": "gobber2:gobber2_hammer_nether",
    }
));

 event.remove({
    output: "gobber2:gobber2_helmet"
  });
  
event.custom({
    "type": "craftspace:advance_crafting_shaped",
	
	"pattern":
	[
		"IEEI",
		"I  I",
		"    ",
		"    "
	],
	
	"key":
	{
		"I": { "item": "gobber2:gobber2_ingot" },
		"E": { "item": "minecraft:emerald" }	
	},
	
	"result": { "item": "gobber2:gobber2_helmet" }
}
