//╔════════════════════════════════════════╗
//║         Copyright © 2022 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {
	event.remove({ output: "earthtojavamobs:albino_cow_spawn_egg" });
	event.remove({ output: "earthtojavamobs:amber_chicken_spawn_egg" });
	event.remove({ output: "earthtojavamobs:ashen_cow_spawn_egg" });
	event.remove({ output: "earthtojavamobs:bold_striped_rabbit_spawn_egg" });
	event.remove({ output: "earthtojavamobs:bone_spider_spawn_egg" });
	event.remove({ output: "earthtojavamobs:bouldering_zombie_spawn_egg" });
	event.remove({ output: "earthtojavamobs:bronzed_chicken_spawn_egg" });
	event.remove({ output: "earthtojavamobs:cluckshroom_spawn_egg" });
	event.remove({ output: "earthtojavamobs:cookie_cow_spawn_egg" });
	event.remove({ output: "earthtojavamobs:cream_cow_spawn_egg" });
	event.remove({ output: "earthtojavamobs:dairy_cow_spawn_egg" });
	event.remove({ output: "earthtojavamobs:fancy_chicken_spawn_egg" });
	event.remove({ output: "earthtojavamobs:flecked_sheep_spawn_egg" });
	event.remove({ output: "earthtojavamobs:freckled_rabbit_spawn_egg" });
	event.remove({ output: "earthtojavamobs:furnace_golem_spawn_egg" });
	event.remove({ output: "earthtojavamobs:fuzzy_sheep_spawn_egg" });
	event.remove({ output: "earthtojavamobs:glow_squid_spawn_egg" });
	event.remove({ output: "earthtojavamobs:gold_crested_chicken_spawn_egg" });
	event.remove({ output: "earthtojavamobs:harelequin_rabbit_spawn_egg" });
	event.remove({ output: "earthtojavamobs:wandering_trader_spawn_egg" });
	event.remove({ output: "earthtojavamobs:horned_sheep_spawn_egg" });
	event.remove({ output: "earthtojavamobs:inky_sheep_spawn_egg" });
	event.remove({ output: "earthtojavamobs:jolly_llama_spawn_egg" });
	event.remove({ output: "earthtojavamobs:jumbo_rabbit_spawn_egg" });
	event.remove({ output: "earthtojavamobs:lobber_zombie_spawn_egg" });
	event.remove({ output: "earthtojavamobs:long_nosed_sheep_spawn_egg" });
	event.remove({ output: "earthtojavamobs:melon_golem_spawn_egg" });
	event.remove({ output: "earthtojavamobs:midnight_chicken_spawn_egg" });
	event.remove({ output: "earthtojavamobs:moobloom_spawn_egg" });
	event.remove({ output: "earthtojavamobs:moolip_spawn_egg" });
	event.remove({ output: "earthtojavamobs:mottled_pig_spawn_egg" });
	event.remove({ output: "earthtojavamobs:muddy_foot_rabbit_spawn_egg" });
	event.remove({ output: "earthtojavamobs:muddy_pig_spawn_egg" });
	event.remove({ output: "earthtojavamobs:pale_pig_spawn_egg" });
	event.remove({ output: "earthtojavamobs:patched_sheep_spawn_egg" });
	event.remove({ output: "earthtojavamobs:piebald_pig_spawn_egg" });
	event.remove({ output: "earthtojavamobs:pink_footed_pig_spawn_egg" });
	event.remove({ output: "earthtojavamobs:pinto_cow_spawn_egg" });
	event.remove({ output: "earthtojavamobs:rainbow_sheep_spawn_egg" });
	event.remove({ output: "earthtojavamobs:rocky_sheep_spawn_egg" });
	event.remove({ output: "earthtojavamobs:skeleton_wolf_spawn_egg" });
	event.remove({ output: "earthtojavamobs:skewbald_chicken_spawn_egg" });
	event.remove({ output: "earthtojavamobs:sooty_pig_spawn_egg" });
	event.remove({ output: "earthtojavamobs:spotted_pig_spawn_egg" });
	event.remove({ output: "earthtojavamobs:stormy_chicken_spawn_egg" });
	event.remove({ output: "earthtojavamobs:sunset_cow_spawn_egg" });
	event.remove({ output: "earthtojavamobs:tropical_slime_spawn_egg" });
	event.remove({ output: "earthtojavamobs:umbra_cow_spawn_egg" });
	event.remove({ output: "earthtojavamobs:vested_rabbit_spawn_egg" });
	event.remove({ output: "earthtojavamobs:viler_witch_spawn_egg" });
	event.remove({ output: "earthtojavamobs:wooly_cow_spawn_egg" });
	
	event.shaped(item.of("earthtojavamobs:albino_cow_spawn_egg"), [
	["untitledduckmod:duck_egg", "minecraft:chicken_spawn_egg", "untitledduckmod:duck_egg"],
	["minecraft:sheep_spawn_egg", "untitledduckmod:duck_egg", "minecraft:pig_spawn_egg"],
	["untitledduckmod:duck_egg", "minecraft:cow_spawn_egg", "untitledduckmod:duck_egg"],
	]);	
	event.shaped(item.of("earthtojavamobs:amber_chicken_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:albino_cow_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:ashen_cow_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:amber_chicken_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);	
	event.shaped(item.of("earthtojavamobs:bold_striped_rabbit_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:ashen_cow_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:bone_spider_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:bold_striped_rabbit_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);	
	event.shaped(item.of("earthtojavamobs:bouldering_zombie_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:bone_spider_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:bronzed_chicken_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:bouldering_zombie_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);	
	event.shaped(item.of("earthtojavamobs:cluckshroom_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:bronzed_chicken_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:cookie_cow_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:cluckshroom_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);	
	event.shaped(item.of("earthtojavamobs:cream_cow_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:cookie_cow_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:dairy_cow_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:cream_cow_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);	
	event.shaped(item.of("earthtojavamobs:fancy_chicken_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:dairy_cow_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:flecked_sheep_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:fancy_chicken_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);	
	event.shaped(item.of("earthtojavamobs:freckled_rabbit_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:flecked_sheep_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);	
	event.shaped(item.of("earthtojavamobs:furnace_golem_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:freckled_rabbit_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:fuzzy_sheep_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:furnace_golem_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);	
	event.shaped(item.of("earthtojavamobs:glow_squid_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:fuzzy_sheep_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:gold_crested_chicken_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:glow_squid_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);	
	event.shaped(item.of("earthtojavamobs:harelequin_rabbit_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:gold_crested_chicken_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:wandering_trader_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:harelequin_rabbit_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);	
	event.shaped(item.of("earthtojavamobs:horned_sheep_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:wandering_trader_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:inky_sheep_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:horned_sheep_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);	
	event.shaped(item.of("earthtojavamobs:jolly_llama_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:inky_sheep_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:jumbo_rabbit_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:jolly_llama_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);	
	event.shaped(item.of("earthtojavamobs:lobber_zombie_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:jumbo_rabbit_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:long_nosed_sheep_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:lobber_zombie_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);	
	event.shaped(item.of("earthtojavamobs:melon_golem_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:long_nosed_sheep_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:midnight_chicken_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:melon_golem_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:moobloom_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:midnight_chicken_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:moolip_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:moobloom_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);	
	event.shaped(item.of("earthtojavamobs:mottled_pig_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:moolip_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:muddy_foot_rabbit_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:mottled_pig_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);	
	event.shaped(item.of("earthtojavamobs:muddy_pig_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:muddy_foot_rabbit_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:pale_pig_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:muddy_pig_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);	
	event.shaped(item.of("earthtojavamobs:patched_sheep_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:pale_pig_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:piebald_pig_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:patched_sheep_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);	
	event.shaped(item.of("earthtojavamobs:pink_footed_pig_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:piebald_pig_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:pinto_cow_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:pink_footed_pig_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);	
	event.shaped(item.of("earthtojavamobs:rainbow_sheep_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:pinto_cow_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:rocky_sheep_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:rainbow_sheep_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);	
	event.shaped(item.of("earthtojavamobs:skeleton_wolf_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:rocky_sheep_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:skewbald_chicken_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:skeleton_wolf_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:sooty_pig_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:skewbald_chicken_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:spotted_pig_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:sooty_pig_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:stormy_chicken_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:spotted_pig_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:sunset_cow_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:stormy_chicken_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:tropical_slime_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:sunset_cow_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:umbra_cow_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:tropical_slime_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:vested_rabbit_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:umbra_cow_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:viler_witch_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:vested_rabbit_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);
	event.shaped(item.of("earthtojavamobs:wooly_cow_spawn_egg"), [
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "earthtojavamobs:viler_witch_spawn_egg", "untitledduckmod:duck_egg"],
	["untitledduckmod:duck_egg", "untitledduckmod:duck_egg", "untitledduckmod:duck_egg"],
	]);