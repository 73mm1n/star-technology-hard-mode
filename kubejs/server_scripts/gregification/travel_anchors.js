
ServerEvents.recipes(event => {

    event.shaped(Item.of('travelanchors:travel_anchor'), [
        'DSD',
        'SPS',
        'DSD'
    ], {
        D: 'gtceu:double_steel_plate',
        S: 'gtceu:steel_plate',
        P: 'minecraft:ender_pearl'
    });

    event.shaped(Item.of('travelanchors:travel_staff'), [
        '  P',
        ' R ',
        'R  '
    ], {
        P: 'minecraft:ender_pearl',
        R: 'gtceu:iron_rod'
    });

});