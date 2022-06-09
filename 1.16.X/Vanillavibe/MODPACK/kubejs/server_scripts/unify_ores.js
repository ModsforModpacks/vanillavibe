//╔════════════════════════════════════════╗
//║         Copyright © 2022 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
//╔════════════════════════════════════════╗
//║            UNIFICATION                 ║
//╚════════════════════════════════════════╝
  var industrial_ore = ['tungsten', 'tin', 'silver', 'lead'];
  var industrial_block = ['tungsten', 'tin', 'silver', 'lead', 'electrum', 'steel', 'bronze'];
  var industrial_ingot = ['tungsten', 'tin', 'silver', 'lead', 'electrum', 'steel', 'bronze'];
  var industrial_nugget = ['tungsten', 'tin', 'silver', 'lead', 'electrum', 'steel', 'bronze', 'copper'];
  var industrial_plate = ['tungsten', 'tin', 'silver', 'lead', 'electrum', 'steel', 'bronze', 'copper'];
  var industrial_dust = ['tungsten', 'tin', 'silver', 'lead', 'electrum', 'steel', 'bronze', 'copper', 'gold', 'iron', 'diamond', 'coal'];
  var modern_block = ['copper', 'aluminum', 'bronze', 'chrome', 'electrum', 'gold', 'invar', 'redstone', 'iron', 'quartz', 'lead', 'nickel', 'silver', 'steel', 'tin', 'titanium'];
  var modern_dust = ['charcoal', 'coal', 'copper', 'aluminum', 'bronze', 'bauxite', 'chrome', 'electrum', 'gold', 'invar', 'nickel', 'redstone', 'manganese', 'iron', 'quartz', 'lead', 'ruby', 'nickel', 'silver', 'steel', 'tin', 'titanium'];
  var modern_nugget = ['copper', 'aluminum', 'bronze', 'chrome', 'electrum', 'invar', 'nickel', 'lead', 'nickel', 'silver', 'steel', 'tin', 'titanium'];
  var modern_ingot = ['copper', 'aluminum', 'bronze', 'chrome', 'electrum', 'invar', 'redstone', 'lead', 'nickel', 'silver', 'steel', 'tin', 'titanium'];
  var modern_ore = ['copper', 'bauxite', 'lead', 'silver', 'tin'];
  var resource = ['tin', 'copper', 'lead', 'aluminum', 'chrome', 'bronze', 'silicon', 'electrum', 'invar', 'nickel', 'iron', 'gold', 'silver', 'steel', 'titanium', 'tungsten'];
  var ingot = ['tin', 'copper', 'lead', 'aluminum', 'bronze', 'electrum', 'chrome', 'invar', 'nickel', 'silver', 'steel', 'titanium', 'tungsten'];
  var dust = ['coal', 'charcoal', 'iron', 'gold', 'diamond', 'emerald', 'manganese', 'ruby', 'bauxite', 'nickel', 'quartz', 'copper', 'aluminum', 'lead', 'tin', 'silver', 'steel', 'bronze', 'electrum', 'titanium', 'chrome'];
  var ore = ['tin', 'copper', 'lead', 'bauxite', 'silver', 'salt'];

  industrial_ore.forEach(function(item, index) {
    event.replaceOutput({},
      'indrev:' + item + '_ore',
      'techreborn:' + item + '_ore'
    );
  });
  industrial_block.forEach(function(item, index) {
    event.replaceOutput({},
      'indrev:' + item + '_block',
      'techreborn:' + item + '_storage_block'
    );
  });
  industrial_ingot.forEach(function(item, index) {
    event.replaceOutput({},
      'indrev:' + item + '_ingot',
      'techreborn:' + item + '_ingot'
    );
  });
  industrial_dust.forEach(function(item, index) {
    event.replaceOutput({},
      'indrev:' + item + '_dust',
      'techreborn:' + item + '_dust'
    );
  });
  industrial_nugget.forEach(function(item, index) {
    event.replaceOutput({},
      'indrev:' + item + '_nugget',
      'techreborn:' + item + '_nugget'
    );
  });
  industrial_plate.forEach(function(item, index) {
    event.replaceOutput({},
      'indrev:' + item + '_plate',
      'techreborn:' + item + '_plate'
    );
  });
  modern_dust.forEach(function(item, index) {
    event.replaceOutput({},
      'modern_industrialization:' + item + '_dust',
      'techreborn:' + item + '_dust'
    );
  });
  modern_nugget.forEach(function(item, index) {
    event.replaceOutput({},
      'modern_industrialization:' + item + '_nugget',
      'techreborn:' + item + '_nugget'
    );
  });
  modern_ingot.forEach(function(item, index) {
    event.replaceOutput({},
      'modern_industrialization:' + item + '_ingot',
      'techreborn:' + item + '_ingot'
    );
  });
  modern_ore.forEach(function(item, index) {
    event.replaceOutput({},
      'modern_industrialization:' + item + '_ore',
      'techreborn:' + item + '_ore'
    );
  });
  modern_block.forEach(function(item, index) {
    event.replaceOutput({},
      'modern_industrialization:' + item + '_block',
      'techreborn:' + item + '_storage_block'
    );
  });
  modern_plate.forEach(function(item, index) {
    event.replaceOutput({},
      'modern_industrialization:' + item + '_plate',
      'techreborn:' + item + '_plate'
    );
  });
  resource.forEach(function(item, index) {
    event.replaceInput({}, '#c:' + item + '_plates', 'techreborn:' + item + '_plate');
  });
  dust.forEach(function(item, index) {
    event.replaceInput({}, '#c:' + item + '_dusts', 'techreborn:' + item + '_dust');
  });
  ingot.forEach(function(item, index) {
    event.replaceInput({}, '#c:' + item + '_ingots', 'techreborn:' + item + '_ingot');
  });
  ingot.forEach(function(item, index) {
    event.replaceInput({}, '#c:' + item + '_nuggets', 'techreborn:' + item + '_nugget');
  });
  ore.forEach(function(item, index) {
    event.replaceInput({}, '#c:' + item + '_ores', 'techreborn:' + item + '_ore');
  });
  ore.forEach(function(item, index) {
    event.replaceInput({
      id: 'techreborn:smelting/' + item + '_ingot'
    }, '#c:' + item + '_ores', 'techreborn:' + item + '_ore');
  });
  ore.forEach(function(item, index) {
    event.replaceInput({
      id: 'techreborn:blasting/' + item + '_ingot'
    }, '#c:' + item + '_ores', 'techreborn:' + item + '_ore');
  });
})
