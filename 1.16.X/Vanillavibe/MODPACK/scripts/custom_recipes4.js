//╔════════════════════════════════════════╗
//║         Copyright © 2022 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {
// Prudentium //
event.custom({
"type": "mysticalagriculture:infusion_crystal",
"pattern": [
" # ",
"#X#",
" # "
],
"key": {
"#": {
"item": "mysticalagriculture:inferium_block"
},
"X": {
"item": "mysticalagriculture:master_infusion_crystal"
}
},
"result": {
"item": "mysticalagriculture:prudentium_block"
}
}).id('mysticalagriculture:prudentium_block_combine')

// Tertium //

event.custom({
    "type": "mysticalagriculture:infusion_crystal",
    "pattern": [
        " # ",
        "#X#",
        " # "
    ],
    "key": {
        "#": {
        "item": "mysticalagriculture:prudentium_block"
        },
        "X": {
        "item": "mysticalagriculture:master_infusion_crystal"
        }
    },
    "result": {
        "item": "mysticalagriculture:tertium_block"
    }
}).id('mysticalagriculture:tertium_block_combine')


// Imperium //

event.custom({
    "type": "mysticalagriculture:infusion_crystal",
    "pattern": [
        " # ",
        "#X#",
        " # "
    ],
    "key": {
        "#": {
            "item": "mysticalagriculture:tertium_block"
        },
        "X": {
            "item": "mysticalagriculture:master_infusion_crystal"
        }
        },
    "result": {
        "item": "mysticalagriculture:imperium_block"
    }
}).id('mysticalagriculture:imperium_block_combine')

// Supremium //

event.custom({
    "type": "mysticalagriculture:infusion_crystal",
    "pattern": [
        " # ",
        "#X#",
        " # "
    ],
    "key": {
        "#": {
        "item": "mysticalagriculture:imperium_block"
        },
        "X": {
        "item": "mysticalagriculture:master_infusion_crystal"
        }
    },
    "result": {
        "item": "mysticalagriculture:supremium_block"
    }
}).id('mysticalagriculture:supremium_block_combine')

]);