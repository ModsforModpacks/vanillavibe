//+----------------------------------------+
//¦            Created by CSS              ¦
//+----------------------------------------+

onEvent('item.registry.armor_tiers', event => {

//+----------------------------------------+
//¦          BISMUTH EQUIPMENT             ¦
//+----------------------------------------+

	event.add('bismut_set', tier => {
    tier.durabilityMultiplier = 33
    tier.slotProtections = [3, 6, 6, 3]
    tier.enchantmentValue = 9
    tier.equipSound = 'minecraft:item.armor.equip_iron'
    tier.repairIngredient = 'kubejs:bismut_ingot'
    tier.toughness = 0.0 
    tier.knockbackResistance = 0.0
  });

onEvent("item.registry", event => {
  event.create('bismut_helmet').tier('bismut_set').displayName('Bismut Helmet'        ).type('helmet'    ).unstackable().group('misc');
  event.create('bismut_chestplate').tier('bismut_set').displayName('Bismut Chestplate').type('chestplate').unstackable().group('misc');
  event.create('bismut_leggings').tier('bismut_set').displayName('Bismut Leggings'    ).type('leggings'  ).unstackable().group('misc');
  event.create('bismut_boots').tier('bismut_set').displayName('Bismut Boots'          ).type('boots'     ).unstackable().group('misc');
 });
});