//╔════════════════════════════════════════╗
//║            CREATED BY CSS              ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
onEvent('item.tooltip', (event) => {

  const recipes = [{
    items: [
      'dungeonsmod:sun_egg',
      'dungeonsmod:kraken_egg',
      'dungeonsmod:ironslime_egg',
      'dungeonsmod:guard_egg',
      'dungeonsmod:deserted_egg',
      'dungeonsmod:crawler_egg',
      'dungeonsmod:king_egg',
      'dungeonsmod:voidmaster_egg',
      'dungeonsmod:whirlwind_egg',
      'dungeonsmod:winterhunter_egg'
    ],
    text: [Text.of('Quest Reward').gold()]
  }];

  recipes.forEach((recipe) => {
    event.add(recipe.items, recipe.text);
  });
});
