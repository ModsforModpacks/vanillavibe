//╔════════════════════════════════════════╗
//║            CREATED BY CSS              ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
onEvent('item.tooltip', (event) => {

  const recipes = [{
      items: [
        'staffofbuilding:diamond_builder_staff',
        'staffofbuilding:golden_builder_staff',
        'staffofbuilding:infinite_builder_staff',
        'staffofbuilding:iron_builder_staff',
        'staffofbuilding:netherite_builder_staff',
        'staffofbuilding:stone_builder_staff',
        'staffofbuilding:wooden_builder_staff'
      ],
      text: [Text.of('Build Tool').gold()]
    },
    {
      items: [
        'astromine:asterite_excavator',
        'astromine:fools_gold_excavator',
        'astromine:galaxium_excavator',
        'astromine:meteoric_steel_excavator',
        'astromine:metite_excavator',
        'astromine:rose_gold_excavator',
        'astromine:stellum_excavator',
        'astromine:sterling_silver_excavator',
        'astromine:univite_excavator',
        'vanillaexcavators:diamond_excavator',
        'vanillaexcavators:emerald_excavator',
        'vanillaexcavators:ender_excavator',
        'vanillaexcavators:fiery_excavator',
        'vanillaexcavators:golden_excavator',
        'vanillaexcavators:iron_excavator',
        'vanillaexcavators:lapis_excavator',
        'vanillaexcavators:nether_excavator',
        'vanillaexcavators:netherite_excavator',
        'vanillaexcavators:obsidian_excavator',
        'vanillaexcavators:prismarine_excavator',
        'vanillaexcavators:quartz_excavator',
        'vanillaexcavators:slime_excavator',
        'vanillaexcavators:stone_excavator',
        'vanillaexcavators:wooden_excavator'
      ],
      text: [Text.of('Dig a 3x3 area').white()]
    },
    {
      items: [
        'techreborn:advanced_chainsaw',
        'techreborn:advanced_drill',
        'techreborn:advanced_jackhammer',
        'techreborn:basic_chainsaw',
        'techreborn:basic_drill',
        'techreborn:basic_jackhammer',
        'techreborn:debug_tool',
        'techreborn:destructopack',
        'techreborn:electric_treetap',
        'techreborn:industrial_chainsaw',
        'techreborn:industrial_drill',
        'techreborn:industrial_jackhammer',
        'techreborn:nanosaber',
        'techreborn:omni_tool',
        'techreborn:painting_tool',
        'techreborn:rock_cutter',
        'techreborn:treetap',
        'techreborn:wrench',
      ],
      text: [Text.of('Tech Tool').white()]
    },
    {
      items: [
        'astromine:asterite_hammer',
        'astromine:sterling_silver_hammer',
        'astromine:stellum_hammer',
        'astromine:galaxium_hammer',
        'astromine:univite_hammer',
        'astromine:meteoric_steel_hammer',
        'astromine:rose_gold_hammer',
        'astromine:fools_gold_hammer',
        'astromine:metite_hammer',
        'vanilla-hammers:adamantium_hammer',
        'vanilla-hammers:vibranium_hammer',
        'vanilla-hammers:diamond_hammer',
        'vanilla-hammers:emerald_hammer',
        'vanilla-hammers:ender_hammer',
        'vanilla-hammers:fiery_hammer',
        'vanilla-hammers:golden_hammer',
        'vanilla-hammers:iron_hammer',
        'vanilla-hammers:lapis_hammer',
        'vanilla-hammers:nether_hammer',
        'vanilla-hammers:netherite_hammer',
        'vanilla-hammers:obsidian_hammer',
        'vanilla-hammers:prismarine_hammer',
        'vanilla-hammers:quartz_hammer',
        'vanilla-hammers:slime_hammer',
        'vanilla-hammers:stone_hammer',
        'vanilla-hammers:wooden_hammer'
      ],
      text: [Text.of('Mine a 3x3 area').white()]
    },
  ];

  recipes.forEach((recipe) => {
    event.add(recipe.items, recipe.text);
  });
});
