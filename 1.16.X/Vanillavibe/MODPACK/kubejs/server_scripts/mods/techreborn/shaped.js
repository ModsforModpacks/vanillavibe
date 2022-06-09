//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
//╔════════════════════════════════════════╗
//║              TECHREBORN                ║
//╚════════════════════════════════════════╝
  // Compressor
  event.remove({
    output: "techreborn:compressor"
  });
  event.shaped(item.of("techreborn:compressor"), [
    ["techreborn:iron_plate", "techreborn:iron_plate", "techreborn:iron_plate"],
    ["minecraft:stone", "techreborn:advanced_circuit", "minecraft:stone"],
    ["minecraft:stone", "techreborn:basic_machine_frame", "minecraft:stone"],
  ]);

  // Cell
  event.remove({
    id: "techreborn:crafting_table/cell"
  });
  event.shaped(item.of("techreborn:cell", 4), [
    ["minecraft:glass_pane", "minecraft:tin_ingots", "minecraft:glass_pane"],
    ["minecraft:glass_pane", "minecraft:tin_ingots", "minecraft:glass_pane"],
    ["minecraft:glass_pane", "minecraft:tin_ingots", "minecraft:glass_pane"],
  ]);

  // Quantum Suit
  event.remove({
    output: "techreborn:quantum_chestplate"
  });
  event.shaped(item.of("techreborn:quantum_chestplate"), [
    ["techreborn:electronic_circuit", "appliedenergistics2:quantum_entangled_singularity", "techreborn:electronic_circuit"],
    ["techreborn:superconductor_cable", "modern_industrialization:steeless", "techreborn:superconductor_cable"],
    ["techreborn:data_storage_chip", "techreborn:iridium_neutron_reflector", "techreborn:data_storage_chip"],
  ]);
});