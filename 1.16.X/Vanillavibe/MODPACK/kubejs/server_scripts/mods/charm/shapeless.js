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
  //║              ENDER BLOCKS              ║
  //╚════════════════════════════════════════╝

  // Ender Block
  event.remove({
    output: "betterend:ender_block"
  });
  event.shapeless('betterend:ender_block', ['blockus:ender_block'])
  event.shapeless('blockus:ender_block', ['betterend:ender_block']);
})