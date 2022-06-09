//╔════════════════════════════════════════╗
//║         Copyright © 2022 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║              DUPLICATES                ║
  //╚════════════════════════════════════════╝
  //╔════════════════════════════════════════╗
  //║              LIMESTONE                 ║
  //╚════════════════════════════════════════╝

  // Architects Palette & Blockus

  event.remove({
    output: "architects_palette:limestone"
  });
  event.shapeless('architects_palette:limestone', ['blockus:limestone']);
  event.shapeless('blockus:limestone', ['architects_palette:limestone'])

  event.remove({
    output: "architects_palette:limestone_slab"
  });
  event.shapeless('architects_palette:limestone_slab', ['blockus:limestone_slab']);
  event.shapeless('blockus:limestone_slab', ['architects_palette:limestone_slab'])

  event.remove({
    output: "architects_palette:limestone_stairs"
  });
  event.shapeless('architects_palette:limestone_stairs', ['blockus:limestone_stairs']);
  event.shapeless('blockus:limestone_stairs', ['architects_palette:limestone_stairs'])

  event.remove({
    output: "architects_palette:limestone_wall"
  });
  event.shapeless('architects_palette:limestone_wall', ['blockus:limestone_wall']);
  event.shapeless('blockus:limestone_wall', ['architects_palette:limestone_wall'])

  event.remove({
    output: "architects_palette:limestone_bricks"
  });
  event.shapeless('blockus:limestone_bricks', ['architects_palette:limestone_bricks'])
  event.shapeless('architects_palette:limestone_bricks', ['blockus:limestone_bricks']);

  event.remove({
    output: "architects_palette:limestone_brick_slab"
  });
  event.shapeless('blockus:limestone_bricks_slab', ['architects_palette:limestone_brick_slab'])
  event.shapeless('architects_palette:limestone_brick_slab', ['blockus:limestone_bricks_slab']);

  event.remove({
    output: "architects_palette:limestone_brick_stairs"
  });
  event.shapeless('blockus:limestone_bricks_stairs', ['architects_palette:limestone_brick_stairs'])
  event.shapeless('architects_palette:limestone_brick_stairs', ['blockus:limestone_bricks_stairs']);

  event.remove({
    output: "architects_palette:limestone_brick_wall"
  });
  event.shapeless('blockus:limestone_bricks_wall', ['architects_palette:limestone_brick_wall'])
  event.shapeless('architects_palette:limestone_brick_wall', ['blockus:limestone_bricks_wall']);

  // Endstone

  event.remove({
    output: "blockus:polished_end_stone"
  });
  event.shapeless('blockus:polished_end_stone', ['addendum:polished_end_stone'])
  event.shapeless('addendum:polished_end_stone', ['blockus:polished_end_stone'])

});
