
onEvent('item.registry', event => {

 // Medals - Quest Feature
 event.create('medal_one').displayName('First Medal');
  event.create('medal_two').displayName('Second Medal');
   event.create('medal_three').displayName('Expert Medal');
   
     // Pigsteel Feature
      event.create('pigsteel_gear').displayName('Pigsteel Gear');
      event.create('pigsteel_large_plate').displayName('Pigsteel Large Plate');
      event.create('pigsteel_plate').displayName('Pigsteel Large Plate');
	  event.create('pigsteel_dust').displayName('Pigsteel Dust');
})

onEvent('block.registry', event => {
})