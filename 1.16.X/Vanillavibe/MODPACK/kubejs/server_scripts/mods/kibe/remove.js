//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║               KIBE/MISC                ║
  //╚════════════════════════════════════════╝

  event.remove({
    output: 'kibe:magma_ring'
  });
  event.remove({
    output: 'kibe:water_ring'
  });

  //╔════════════════════════════════════════╗
  //║            SLEEPING BAGS               ║
  //╚════════════════════════════════════════╝

  var kibe_bags = [
    "black",
    "brown",
    "cyan",
    "gray",
    "green",
    "light_blue",
    "light_gray",
    "lime",
    "magenta",
    "orange",
    "pink",
    "purple",
    "red",
    "white",
    "yellow",
  ];

  kibe_bags.forEach(function(item, index) {
    event.replaceOutput({}, "kibe:" + item + "_sleeping_bag", "comforts:" + "sleeping_bag_" + item);
  });

  kibe_bags.forEach(function(item, index) {
    event.remove({
      id: 'kibe:' + item + "_sleeping_bag_from_sleeping_bag"
    });
  });

  event.replaceOutput({}, "kibe:sleeping_bag", "comforts:sleeping_bag_blue");
  event.replaceInput({}, "kibe:sleeping_bag", "comforts:sleeping_bag_blue");

  //╔════════════════════════════════════════╗
  //║               REMOVED                  ║
  //╚════════════════════════════════════════╝	

  event.remove({
    output: 'kibe:sleeping_bag'
  });
  event.remove({
    output: 'kibe:black_sleeping_bag'
  });
  event.remove({
    output: 'kibe:brown_sleeping_bag'
  });
  event.remove({
    output: 'kibe:cyan_sleeping_bag'
  });
  event.remove({
    output: 'kibe:gray_sleeping_bag'
  });
  event.remove({
    output: 'kibe:green_sleeping_bag'
  });
  event.remove({
    output: 'kibe:light_blue_sleeping_bag'
  });
  event.remove({
    output: 'kibe:light_gray_sleeping_bag'
  });
  event.remove({
    output: 'kibe:lime_sleeping_bag'
  });
  event.remove({
    output: 'kibe:magenta_sleeping_bag'
  });
  event.remove({
    output: 'kibe:orange_sleeping_bag'
  });
  event.remove({
    output: 'kibe:pink_sleeping_bag'
  });
  event.remove({
    output: 'kibe:purple_sleeping_bag'
  });
  event.remove({
    output: 'kibe:red_sleeping_bag'
  });
  event.remove({
    output: 'kibe:white_sleeping_bag'
  });
  event.remove({
    output: 'kibe:yellow_sleeping_bag'
  });
  
  event.remove({
    id: "kibe:pocket_trash_can"
  });
})