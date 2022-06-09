//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  
  // Gear from Ingot
  event.recipes.modern_industrialization.unpacker({
	  
	eu: 2,
    duration: 300,
    id: "modern_industrialization:unpacker/pigsteel_plate",
    item_inputs: [{
      item: "pigsteel:pigsteel_ingot",
      amount: 1
    }],
    item_outputs: [{
      item: "kubejs:pigsteel_gear",
      amount: 1
    }],
  });
  // Dust from Plate
  event.recipes.modern_industrialization.unpacker({
	  
	eu: 2,
    duration: 300,
    id: "modern_industrialization:unpacker/pigsteel_plate",
    item_inputs: [{
      item: "kubejs:pigsteel_gear",
      amount: 1
    }],
    item_outputs: [{
      item: "kubejs:pigsteel_dust",
      amount: 1
    }],
  });
})