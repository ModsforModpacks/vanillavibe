//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {

  //╔════════════════════════════════════════╗
  //║            CROOKEDCROOKS               ║
  //╚════════════════════════════════════════╝

  event.remove({
    output: "crookedcrooks:bronze_crook"
  });
  event.remove({
    output: "crookedcrooks:ruby_crook"
  });
  event.remove({
    output: "crookedcrooks:sapphire_crook"
  });
  event.remove({
    output: "crookedcrooks:peridot_crook"
  });
  event.remove({
    output: "crookedcrooks:certus_quartz_crook"
  });
  event.remove({
    output: "crookedcrooks:nether_quartz_crook"
  });
})
