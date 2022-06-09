//+----------------------------------------+
//¦            Created by CSS              ¦
//+----------------------------------------+

onEvent('item.registry.tool_tiers', event => {

//+----------------------------------------+
//¦           EMERALD TOOLS                ¦
//+----------------------------------------+

  event.add('emerald_tools', tier => {
    tier.uses = 500
    tier.speed = 6.0
    tier.attackDamageBonus = 5.5
    tier.level = 3
    tier.enchantmentValue = 28
    tier.repairIngredient = 'minecraft:emerald'
  })
})

onEvent("item.registry", event => {
 event.create('emerald_hoe').tier('emerald_tools').displayName('Emerald Hoe'        ).type('hoe'    ).unstackable().group('tools');
 event.create('emerald_axe').tier('emerald_tools').displayName('Emerald Axe'        ).type('axe'    ).unstackable().group('tools');
 event.create('emerald_pickaxe').tier('emerald_tools').displayName('Emerald Pickaxe').type('pickaxe').unstackable().group('tools');
 event.create('emerald_shovel').tier('emerald_tools').displayName('Emerald Shovel'  ).type('shovel' ).unstackable().group('tools');
});