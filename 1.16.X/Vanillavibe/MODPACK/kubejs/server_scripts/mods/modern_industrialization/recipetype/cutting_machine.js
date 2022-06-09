//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  
  // Inferium Ore
  event.recipes.modern_industrialization.macerator({
    eu: 2,
    duration: 300,
    id: "modern_industrialization:macerator/inferium_ore",
    item_inputs: [{
      item: "mysticalagriculture:inferium_ore",
      amount: 1
    }],
    item_outputs: [{
      item: "mysticalagriculture:inferium_essence",
      amount: 8
    }],
  });
  
  // Prosperity Ore
  event.recipes.modern_industrialization.macerator({
    eu: 2,
    duration: 300,
    id: "modern_industrialization:macerator/prosperity_ore",
    item_inputs: [{
      item: "mysticalagriculture:prosperity_ore",
      amount: 1
    }],
    item_outputs: [{
      item: "mysticalagriculture:prosperity_shard",
      amount: 6
    }],
  });
  
  // Iron Dust
  event.recipes.modern_industrialization.macerator({
    eu: 2,
    duration: 300,
    id: "modern_industrialization:macerator/pigsteel_plate",
    item_inputs: [{
      item: "kubejs:pigsteel_large_plate",
      amount: 1
    }],
    item_outputs: [{
      item: "techreborn:iron_dust",
      amount: 4
    }],
  });
  
    // Pigsteel Gear
  event.recipes.modern_industrialization.macerator({
    eu: 2,
    duration: 300,
    id: "modern_industrialization:macerator/pigsteel_large_plate",
    item_inputs: [{
      item: "kubejs:pigsteel_large_plate",
      amount: 1
    }],
    item_outputs: [{
      item: "kubejs:pigsteel_gear",
      amount: 2
    }],
  });
});