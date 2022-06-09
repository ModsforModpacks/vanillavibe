onEvent('recipes', event => {

  event.custom({
    "type": "minecraft:crafting_shaped",

    "pattern": [
      "BCB",
      "DAD",
      "BAB"
    ],

    "key": {
      "A": {
        "item": "gobber2:gobber2_ingot_nether"
      },
      "B": {
        "item": "minecraft:red_concrete"
      },
      "C": {
        "item": "gobber2:block_healer"
      },
      "D": {
        "item": "gobber2:gobber2_ring_nether"
    }},
    "result": {
      "item": "gobber2:block_defender",
    }
  });

  event.custom({
    "type": "craftspace:advance_crafting_shaped",

    "pattern": [
      "BCCB",
      "CAAC",
      "CAAC",
      "BAAB"
    ],

    "key": {
      "A": {
        "item": "gobber2:gobber2_ingot"
      },
      "B": {
        "item": "minecraft:black_concrete"
      },
      "C": {
        "item": "gobber2:gobber2_ring"
    }   },
    "result": {
      "item": "gobber2:block_healer"
    }
  });

  event.custom({
    "type": "craftspace:advance_crafting_shaped",

    "pattern": [
      "ABBA",
      "ACCA",
      "ACCA",
      "ABBA"
    ],

    "key": {
      "A": {
        "item": "gobber2:gobber2_block_nether"
      },
      "B": {
        "item": "minecraft:black_concrete"
      },
      "C": {
        "item": "gobber2:gobber2_ring_farmer"
    }   },
    "result": {
      "item": "gobber2:block_maturator"
    }
  });

  event.custom({
    "type": "craftspace:advance_crafting_shaped",

    "pattern": [
      "BCCB",
      "DAAD",
      "BAAB",
      "BCCB"
    ],

    "key": {
      "A": {
        "item": "gobber2:gobber2_ingot_end"
      },
      "B": {
        "item": "gobber2:gobber2_block_end"
      },
      "C": {
        "item": "gobber2:block_defender"
      },
      "D": {
        "item": "gobber2:gobber2_ring_end"
    }   },
    "result": {
      "item": "gobber2:block_protector"
    }
  });

  event.custom({
    "type": "craftspace:advance_crafting_shaped",

    "pattern": [
      "DAAD",
      "CBBC",
      "CBBC",
      "DCCD"
    ],

    "key": {
      "A": {
        "item": "minecraft:dragon_head"
      },
      "B": {
        "item": "minecraft:elytra"
      },
      "C": {
        "item": "gobber2:gobber2_ingot_end"
      },
      "D": {
        "item": "minecraft:dragon_breath"
    }   },
    "result": {
      "item": "gobber2:dragon_elytra",
    }
  });

  event.custom({
    "type": "craftspace:advance_crafting_shaped",

    "pattern": [
      "DAAD",
      "CBBC",
      "CBBC",
      "DCCD"
    ],

    "key": {
      "A": {
        "item": "minecraft:dragon_head"
      },
      "B": {
        "item": "minecraft:nether_star"
      },
      "C": {
        "item": "gobber2:gobber2_ingot_end"
      },
      "D": {
        "item": "minecraft:dragon_breath"
    }   },
    "result": {
      "item": "gobber2:dragon_star",

    }
  });

  event.custom({
    "type": "craftspace:advance_crafting_shaped",

    "pattern": [
      "AIIA",
      "AISA",
      "A SA",
	  "A SA"
    ],

    "key": {
      "I": {
        "item": "gobber2:gobber2_ingot"
      },
      "S": {
        "item": "gobber2:gobber2_rod"
    },
	"A": {
        "item": "minecraft:air"
     }
	},
    "result": {
      "item": "gobber2:gobber2_axe"
    }
  });

  event.custom({
    "type": "craftspace:advance_crafting_shaped",

    "pattern": [
      "AII A",
      "AIS A",
      "A S A",
	  "A S A"
    ],

    "key": {
      "I": {
        "item": "gobber2:gobber2_ingot_end"
      },
	"A": {
        "item": "minecraft:air"
     },
      "S": {
        "item": "gobber2:gobber2_rod_end"
    }   
	},
    "result": {
      "item": "gobber2:gobber2_axe_end"
    }
  });

  event.custom({
    "type": "craftspace:advance_crafting_shaped",

    "pattern": [
      "AIIA",
      "AISA",
      "A SA",
	  "A SA"
    ],

    "key": {
      "I": {
        "item": "gobber2:gobber2_ingot_nether"
      },
      "S": {
        "item": "gobber2:gobber2_rod_nether"
    }   },
    "result": {
      "item": "gobber2:gobber2_axe_nether"
    }
  });

  event.custom({
    "type": "craftspace:advance_crafting_shaped",

    "pattern": [
      "IIIA",
      "IIIA",
      "IIIA",
	  "AAAA"
    ],

    "key": {
      "I": {
        "item": "gobber2:gobber2_ingot_end"
    },
		"A": {
        "item": "minecraft:air"
     }
	},
    "result": {
      "item": "gobber2:gobber2_block_end"
    }
  });

  event.custom({
    "type": "craftspace:advance_crafting_shaped",
    "pattern": [
      "IIII",
      "IIII",
      "IIII",
      "IIII"
    ],

    "key": {
      "I": {
        "item": "gobber2:gobber2_ingot"
    }   },
    "result": {
      "item": "gobber2:gobber2_block"
    }
  });


  event.custom({
    "type": "craftspace:advance_crafting_shaped",

    "pattern": [
      "BAAB",
      "AAAA",
      "AAAA",
      "BAAB"
    ],

    "key": {
      "B": {
        "item": "gobber2:gobber2_block"
    },
	"A": {
        "item": "minecraft:air"
     }
	 },
    "result": {
      "item": "gobber2:gobber2_ingot",
      "count": 36
    }
  });

  
    event.custom({
    "type": "craftspace:advance_crafting_shaped",

    "pattern": [
      "BAAA",
      "AAAA",
      "AAAA",
      "AAAA"
    ],

    "key": {
      "B": {
        "item": "gobber2:gobber2_block"
    },
	"A": {
        "item": "minecraft:air"
     }
	 },
    "result": {
      "item": "gobber2:gobber2_ingot",
      "count": 9
    }
  });

  event.custom({
    "type": "craftspace:advance_crafting_shaped",

    "pattern": [
      "IIII",
      "IIII",
      "IIII",
      "IIII"
    ],

    "key": {
      "I": {
        "item": "gobber2:gobber2_ingot_nether"
    }   },
    "result": {
      "item": "gobber2:gobber2_block_nether"
    }
  });


  event.custom({
    "type": "craftspace:advance_crafting_shaped",

    "pattern": [
      "EAAE",
      "EAAE",
      "IAAI",
      "IIII"
    ],

    "key": {
      "I": {
        "item": "gobber2:gobber2_ingot"
      },
      "E": {
        "item": "minecraft:emerald"
    },
		"A": {
        "item": "minecraft:air"
     }
	},
    "result": {
      "item": "gobber2:gobber2_boots"
    }
  });


  event.custom({
    "type": "craftspace:advance_crafting_shaped",
	
    "pattern": [
      " IIS",
      "I  S",
      "I  S",
      " IIS"
    ],
	
    "key": {
      "I": {
        "item": "gobber2:gobber2_rod_end"
      },
      "S": {
        "item": "minecraft:string"
      }
	},
      "result": {
        "item": "gobber2:gobber2_bow_end"
      }
  });

  event.custom({
    "type": "craftspace:advance_crafting_shaped",

    "pattern": [
      " IIS",
      "I  S",
      "I  S",
      " IIS"
    ],

    "key": {
      "I": {
        "item": "gobber2:gobber2_rod_nether"
      },
      "S": {
        "item": "minecraft:string"
    }   },
    "result": {
      "item": "gobber2:gobber2_bow_nether"
    }
  });


  event.custom({
    "type": "craftspace:advance_crafting_shaped",

    "pattern": [
      "I  I",
      "IEEI",
      "IBBI",
      "IIII"
    ],

    "key": {
      "I": {
        "item": "gobber2:gobber2_ingot"
      },
      "E": {
        "item": "minecraft:emerald"
      },
      "B": {
        "item": "minecraft:end_crystal"
    }   },
    "result": {
      "item": "gobber2:gobber2_chestplate"
    }
  });

  event.custom({
    "type": "craftspace:advance_crafting_shaped",

    "pattern": [
      "G  G",
      "GGGG",
      "GGGG",
      "GGGG"
    ],
    "key": {
      "G": {
        "item": "gobber2:gobber2_links_end"
    }   },
    "result": {
      "item": "gobber2:gobber2_chestplate_end",
    }
  });

  event.custom({
    "type": "craftspace:advance_crafting_shaped",

    "pattern": [
      "G  G",
      "GGGG",
      "GGGG",
      "GGGG"
    ],

    "key": {
      "G": {
        "item": "gobber2:gobber2_ingot_nether"
    }   },
    "result": {
      "item": "gobber2:gobber2_chestplate_nether",
    }
  });

  event.custom({
    "type": "craftspace:advance_crafting_shaped",

    "pattern": [
      " AAA",
      "  BA",
      " B  ",
      "B   "
    ],

    "key": {
      "A": {
        "item": "gobber2:gobber2_ingot"
      },
      "B": {
        "item": "gobber2:gobber2_rod"
    }   },
    "result": {
      "item": "gobber2:gobber2_excavator",
    }
  });

  event.custom({
    "type": "craftspace:advance_crafting_shaped",

    "pattern": [
      " AAA",
      "  BA",
      " B  ",
      "B   "
    ],

    "key": {
      "A": {
        "item": "gobber2:gobber2_ingot_end"
      },
      "B": {
        "item": "gobber2:gobber2_rod_end"
    }   },
    "result": {
      "item": "gobber2:gobber2_excavator_end",
    }
  });


  event.custom({
    "type": "craftspace:advance_crafting_shaped",

    "pattern": [
      " AAA",
      "  BA",
      " B  ",
      "B   "
    ],

    "key": {
      "A": {
        "item": "gobber2:gobber2_ingot_nether"
      },
      "B": {
        "item": "gobber2:gobber2_rod_nether"
    }   },
    "result": {
      "item": "gobber2:gobber2_excavator_nether",
    }
  });


  event.custom({
    "type": "craftspace:advance_crafting_shaped",

    "pattern": [
      "ABBA",
      "BBBB",
      "BBBB",
      "ABBA"
    ],

    "key": {
      "A": {
        "item": "gobber2:gobber2_glob"
      },
      "B": {
        "item": "minecraft:charcoal"
    }   },
    "result": {
      "item": "gobber2:gobber2_foo",
    }
  });


  event.custom({
    "type": "craftspace:advance_crafting_shaped",

    "pattern": [
      "ACCA",
      "ABBA",
      " BB ",
      " BB "
    ],

    "key": {
      "A": {
        "item": "gobber2:gobber2_ingot"
      },
      "B": {
        "item": "gobber2:gobber2_rod"
      },
      "C": {
        "item": "gobber2:gobber2_block"
    }   },
    "result": {
      "item": "gobber2:gobber2_hammer",
    }
  });

  event.remove({
    output: "gobber2:gobber2_hammer_end"
  });

  event.custom({
    "type": "craftspace:advance_crafting_shaped",

    "pattern": [
      "ACCA",
      "ABBA",
      " BB ",
      " BB "
    ],

    "key": {
      "A": {
        "item": "gobber2:gobber2_ingot_end"
      },
      "B": {
        "item": "gobber2:gobber2_rod_end"
      },
      "C": {
        "item": "gobber2:gobber2_block_end"
    }   },
    "result": {
      "item": "gobber2:gobber2_hammer_end",
    }
  });

  event.custom({
    "type": "craftspace:advance_crafting_shaped",

    "pattern": [
      "ACCA",
      "ABBA",
      " BB ",
      " BB "
    ],

    "key": {
      "A": {
        "item": "gobber2:gobber2_ingot_nether"
      },
      "B": {
        "item": "gobber2:gobber2_rod_nether"
      },
      "C": {
        "item": "gobber2:gobber2_block_nether"
    }   },
    "result": {
      "item": "gobber2:gobber2_hammer_nether",
    }
  });

  event.custom({
    "type": "craftspace:advance_crafting_shaped",

    "pattern": [
      "IEEI",
      "I  I",
      "AAAA",
      "AAAA"
    ],

    "key": {
      "I": {
        "item": "gobber2:gobber2_ingot"
      },
      "E": {
        "item": "minecraft:emerald"
    },
	      "A": {
        "item": "minecraft:air"
     }
	},
    "result": {
      "item": "gobber2:gobber2_helmet"
    }
  });
});