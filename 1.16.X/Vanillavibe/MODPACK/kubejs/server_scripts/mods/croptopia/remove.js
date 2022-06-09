//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {
//╔════════════════════════════════════════╗
//║              CROPTOPIA                 ║
//╚════════════════════════════════════════╝
  event.remove({
    output: "croptopia:rice_seed"
  });
  event.remove({
    output: "croptopia:tomato_seed"
  });
  event.remove({
    output: "sandwichable:tomato_seeds"
  });
  event.remove({
    output: "croptopia:onion_seed"
  });
  event.remove({
    output: "croptopia:cabbage_seed"
  });
  event.remove({
    output: "croptopia:blueberry_seed"
  });
  event.remove({
    output: "croptopia:corn_seed"
  });
  event.remove({
    output: "croptopia:cucumber_seed"
  });
  event.remove({
    output: "croptopia:garlic_seed"
  });
  event.remove({
    output: "croptopia:banana_sapling"
  });
  event.remove({
    output: "croptopia:mango_sapling"
  });
  event.remove({
    output: "croptopia:apricot_sapling"
  });
  event.replaceInput({}, "croptopia:banana", "promenade:banana");
  event.replaceInput({}, "croptopia:mango", "promenade:mango");
  event.replaceInput({}, "croptopia:apricot", "promenade:apricot");
  event.replaceInput({}, "croptopia:cucumber", "sandwichable:cucumber");
  event.replaceInput({}, "croptopia:blueberry", "byg:blueberries");
  event.replaceInput({}, "promenade:blueberries", "byg:blueberries");
  event.replaceOutput({}, "promenade:blueberries", "byg:blueberries");
  event.replaceInput({}, "croptopia:corn", "tacocraft:corn");
});