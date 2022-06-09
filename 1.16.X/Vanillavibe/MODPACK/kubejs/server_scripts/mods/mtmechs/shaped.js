//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {

  //╔════════════════════════════════════════╗
  //║             VANILLA/MISC               ║
  //╚════════════════════════════════════════╝

  // Magicite Item
  event.remove({
    output: "mtmechs:magicite_item"
  });
  event.shaped(item.of("mtmechs:magicite_item", 1), [
    ["#c:tin_blocks", "#c:quartz", "#c:tin_blocks"],
    ["minecraft:lapis_block", "techreborn:basic_machine_frame", "minecraft:lapis_block"],
    ["#c:tin_blocks", "#c:quartz", "#c:tin_blocks"],
  ]);

  // Proto Legs
  event.remove({
    output: "mtmechs:pa_leg_item"
  });
  event.shaped(item.of("mtmechs:pa_leg_item", 1), [
    [null, "#c:tin_blocks", null],
    [null, "#c:tin_blocks", null],
    ["#c:tin_blocks", "#c:quartz", "#c:tin_blocks"],
  ]);

  // Tunnel Armor Item
  event.remove({
    output: "mtmechs:ta_stack_item"
  });
  event.shaped(item.of("mtmechs:ta_stack_item", 1), [
    ["tech_reborn:aluminum_ingot", null, "mtmechs:ma_stack_item"],
    [null, "#c:tin_blocks", "mtmechs:ma_stack_item"],
    [null, "tech_reborn:aluminum_ingot", "#c:tin_blocks"],
  ]);

  event.remove({
    output: "mtmechs:ta_stack_item"
  });
  event.shaped(item.of("mtmechs:ta_stack_item", 1), [
    ["tech_reborn:aluminum_ingot", null, "mtmechs:ma_stack_item"],
    [null, "#c:lapis_blocks", "mtmechs:ma_stack_item"],
    [null, "tech_reborn:aluminum_ingot", "#c:lapis_blocks"],
  ]);


  // Tunnel Armor Chasis   
  event.remove({
    output: "mtmechs:ta_chassis_item"
  });
  event.shaped(item.of("mtmechs:ta_chassis_item", 1), [
    ["#c:iron_blocks", "#c:iron_ingots", "#c:iron_blocks"],
    ["#c:lapis_blocks", "#c:iron_ingots", "#c:lapis_blocks"],
    ["minecraft:lever", "modern_industrialization:iron_gear", "minecraft:lever"],
  ]);

  // Tunnel Armor Wheel   
  event.remove({
    output: "mtmechs:ta_wheel_item"
  });
  event.shaped(item.of("mtmechs:ta_wheel_item", 1), [
    ["#c:iron_ingots", "#c:iron_ingots", "#c:iron_ingots"],
    ["#c:iron_ingots", "modern_industrialization:iron_gear", "#c:iron_ingots"],
    ["#c:iron_ingots", "#c:iron_ingots", "#c:iron_ingots"],
  ]);

  // Magitech Armor Arm
  event.remove({
    output: "mtmechs:ma_arm_item"
  });
  event.shaped(item.of("mtmechs:ma_arm_item", 1), [
    ["null", "null", "#c:iron_ingots"],
    ["#c:iron_ingots", "techreborn:wrench", "techreborn:emerald_plate"],
    ["#c:iron_ingots", "null", "null"],
  ]);

  // Magitech Armor Arm
  event.remove({
    output: "mtmechs:ma_arm_item"
  });
  event.shaped(item.of("mtmechs:ma_arm_item", 1), [
    ["null", "null", "#c:iron_ingots"],
    ["#c:iron_ingots", "techreborn:wrench", "techreborn:emerald_plate"],
    ["#c:iron_ingots", "null", "null"],
  ]);

  // Magitech Armor Arm
  event.remove({
    output: "mtmechs:ma_leg_item"
  });
  event.shaped(item.of("mtmechs:ma_leg_item", 1), [
    [null, "#c:iron_ingots", null],
    [null, "#c:iron_ingots", null],
    ["#c:bronze_ingots", "mtmechs:ma_stack_item", "#c:bronze_ingots"],
  ]);

  // Magitech Armor Chassis
  event.remove({
    output: "mtmechs:ma_chassis_item"
  });
  event.shaped(item.of("mtmechs:ma_chassis_item", 1), [
    ["#c:iron_ingots", "#c:iron_blocks", "#c:iron_ingots"],
    ["#c:tin_blocks", "modern_industrialization:iron_gear", "#c:tin_blocks"],
    ["minecraft:iron_nugget", "techreborn:iron_plate", "minecraft:iron_nugget"],
  ]);

  // Magitech Armor Chassis
  event.remove({
    output: "mtmechs:ma_stack_item"
  });
  event.shaped(item.of("mtmechs:ma_stack_item", 1), [
    [null, "#c:iron_ingots", null],
    ["#c:iron_ingots", "minecraft:furnace", "#c:iron_ingots"],
    ["#c:bronze_ingots", "#c:iron_ingots", "#c:bronze_ingots"],
  ]);

  //╔════════════════════════════════════════╗
  //║           WRENCH TECHREBORN            ║
  //╚════════════════════════════════════════╝

  // Techreborn Wrench
  event.remove({
    output: "techreborn:wrench"
  });
  event.shaped(item.of("techreborn:wrench", 1), [
    ["techreborn:invar_ingot", "null", "techreborn:invar_ingot"],
    ["null", "modern_industrialization:iron_gear", "null"],
    ["null", "techreborn:invar_ingot", "null"],
  ]);
})
