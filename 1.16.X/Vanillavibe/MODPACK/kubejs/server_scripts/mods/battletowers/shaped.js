//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {

  event.remove({
    output: "battletowers:boss_key"
  });
  event.shaped(item.of("battletowers:boss_key", 1), [
    ["minecraft:gold_nugget", "null", "null"]
    ["techreborn:gold_plate", "null", "null"],
    ["tis3d:key","null","null"]
  ]);
  
  // Boss Lock
  event.remove({
    output: "battletowers:boss_lock"
  });
  event.shaped(item.of("battletowers:boss_lock", 1), [
    ["fabric-furnaces:gold_furnace", "minecraft:gold_block", "fabric-furnaces:gold_furnace"],
    ["minecraft:gold_block", "battletowers:boss_key", "minecraft:gold_block"],
    ["fabric-furnaces:gold_furnace", "betterend:gold_chandelier", "fabric-furnaces:gold_furnace"],
  ]);

  // Tower Guardian

  event.remove({
    output: "battletowers:tower_guardian_spawn_egg"
  });
  event.shaped(item.of("battletowers:tower_guardian_spawn_egg"), [
    ["battletowers:boss_key", "battletowers:boss_key", "battletowers:boss_key"],
    ["techreborn:gold_plate", "minecraft:gold_block", "techreborn:gold_plate"],
    ["techreborn:gold_plate", "battletowers:boss_key", "techreborn:gold_plate"],
  ]);

})
