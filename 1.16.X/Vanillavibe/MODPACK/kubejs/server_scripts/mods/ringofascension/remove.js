//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║          RINGS OF ASCENSION            ║
  //╚════════════════════════════════════════╝
  event.remove({
    output: 'ringsofascension:ring_hungerless',
	id: 'ringsofascension:ring_hungerless'
  });
  event.remove({
    output: 'ringsofascension:ring_flight',
	id: 'ringsofascension:ring_flight'
  });
})
