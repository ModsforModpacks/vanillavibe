//╔════════════════════════════════════════╗
//║            Created by CSS              ║
//╚════════════════════════════════════════╝

onEvent('item.registry.armor_tiers', event => {

//╔════════════════════════════════════════╗
//║          EMERALD EQUIPMENT             ║
//╚════════════════════════════════════════╝

	event.add('emerald_set', tier => {
    tier.durabilityMultiplier = 33
    tier.slotProtections = [3, 6, 6, 3]
    tier.enchantmentValue = 9
    tier.equipSound = 'minecraft:item.armor.equip_iron'
    tier.repairIngredient = 'minecraft:emerald'
    tier.toughness = 0.0 
    tier.knockbackResistance = 0.0
  });

onEvent("item.registry", event => {
  event.create('emerald_helmet').tier('emerald_set').displayName('Emerald Helmet'        ).type('helmet'    ).unstackable().group('misc');
  event.create('emerald_chestplate').tier('emerald_set').displayName('Emerald Chestplate').type('chestplate').unstackable().group('misc');
  event.create('emerald_leggings').tier('emerald_set').displayName('Emerald Leggings'    ).type('leggings'  ).unstackable().group('misc');
  event.create('emerald_boots').tier('emerald_set').displayName('Emerald Boots'          ).type('boots'     ).unstackable().group('misc');
 });
})