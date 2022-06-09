//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
onEvent('recipes', (event) => {
    event.recipes.indrev.compress({
        ingredients: {
            item: "techreborn:tin_plate",
            count: 4
        },
        output: {
            item: "indrev:empty_upgrade",
            count: 1
        },
        processTime: 300
    });
    event.recipes.indrev.compress({
        ingredients: {
            item: "techreborn:saw_dust",
            count: 4
        },
        output: {
            item: "indrev:planks",
            count: 1
        },
        processTime: 300
    });
	event.recipes.indrev.compress({
        ingredients: {
            item: "pigsteel:pigsteel_ingot",
            count: 1
        },
        output: {
            item: "kubejs:pigsteel_plate",
            count: 1
        },
        processTime: 300
    });
	event.recipes.indrev.compress({
        ingredients: {
            item: "pigsteel:pigsteel_block",
            count: 1
        },
        output: {
            item: "kubejs:pigsteel_plate",
            count: 9
        },
        processTime: 300
    });
	event.recipes.indrev.compress({
        ingredients: {
            item: "pigsteel:waxed_pigsteel_block",
            count: 1
        },
        output: {
            item: "kubejs:pigsteel_plate",
            count: 9
        },
        processTime: 300
    });
});