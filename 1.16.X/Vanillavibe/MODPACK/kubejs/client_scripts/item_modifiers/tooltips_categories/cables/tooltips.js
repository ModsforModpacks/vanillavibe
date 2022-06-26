//╔════════════════════════════════════════╗
//║          CREATED BY SZUMASTER          ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
onEvent('item.tooltip', tooltip => {
//╔════════════════════════════════════════╗
//║              CABLE TIER                ║
//╚════════════════════════════════════════╝
  tooltip.addAdvanced('techreborn:copper_cable', (item, advanced, text) => {
    text.add(1, Text.of('Transfer rate: 128').color('#FFAA00'))
    text.add(2, Text.of('Tier: Medium').color('#FFAA00'))
    text.add(3, Text.of('Can cover with Wooden Plate').color('#FFAA00'))
  });

  tooltip.addAdvanced('techreborn:tin_cable', (item, advanced, text) => {
    text.add(1, Text.of('Transfer rate: 32').color('#FFAA00'))
    text.add(2, Text.of('Tier: Low').color('#FFAA00'))
    text.add(3, Text.of('Can cover with Wooden Plate').color('#FFAA00'))
  });

  tooltip.addAdvanced('techreborn:gold_cable', (item, advanced, text) => {
    text.add(1, Text.of('Transfer rate: 512').color('#FFAA00'))
    text.add(2, Text.of('Tier: High').color('#FFAA00'))
    text.add(3, Text.of('Can cover with Wooden Plate').color('#FFAA00'))
  });

  tooltip.addAdvanced('techreborn:hv_cable', (item, advanced, text) => {
    text.add(1, Text.of('Transfer rate: 2048').color('#FFAA00'))
    text.add(2, Text.of('Tier: Extreme').color('#FFAA00'))
    text.add(3, Text.of('Can cover with Wooden Plate').color('#FFAA00'))
  });

  tooltip.addAdvanced('techreborn:glassfiber_cable', (item, advanced, text) => {
    text.add(1, Text.of('Transfer rate: 8192').color('#FFAA00'))
    text.add(2, Text.of('Tier: Insane').color('#FFAA00'))
    text.add(3, Text.of('Can cover with Wooden Plate').color('#FFAA00'))
  });

  tooltip.addAdvanced('techreborn:insulated_copper_cable', (item, advanced, text) => {
    text.add(1, Text.of('Transfer rate: 128').color('#FFAA00'))
    text.add(2, Text.of('Tier: medium').color('#FFAA00'))
  });

  tooltip.addAdvanced('techreborn:insulated_gold_cable', (item, advanced, text) => {
    text.add(1, Text.of('Transfer rate: 512').color('#FFAA00'))
    text.add(2, Text.of('Tier: High').color('#FFAA00'))
  });

  tooltip.addAdvanced('techreborn:insulated_hv_cable', (item, advanced, text) => {
    text.add(1, Text.of('Transfer rate: 2048').color('#FFAA00'))
    text.add(2, Text.of('Tier: Extreme').color('#FFAA00'))
  });

  tooltip.addAdvanced('techreborn:superconductor_cable', (item, advanced, text) => {
    text.add(1, Text.of('Transfer rate: Max').color('#FFAA00'))
    text.add(2, Text.of('Tier: Infinite').color('#FFAA00'))
  });

//╔════════════════════════════════════════╗
//║                HATCHES                 ║
//╚════════════════════════════════════════╝
  tooltip.addAdvanced('techreborn:import_conduit_item', (item, advanced, text) => {
    text.add(1, Text.of('Use the wrench to disconnect from the pipe').color('red'))
  });

  tooltip.addAdvanced('techreborn:export_conduit_item', (item, advanced, text) => {
    text.add(1, Text.of('Use the wrench to disconnect from the pipe').color('red'))
  });

  tooltip.addAdvanced('techreborn:block_conduit_item', (item, advanced, text) => {
    text.add(1, Text.of('Use the wrench to disconnect from the pipe').color('red'))
  });

  tooltip.addAdvanced('techreborn:one_way_conduit_item', (item, advanced, text) => {
    text.add(1, Text.of('Use the wrench to disconnect from the pipe').color('red'))
  });
})
