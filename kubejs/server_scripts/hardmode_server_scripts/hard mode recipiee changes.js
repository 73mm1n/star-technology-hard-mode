ServerEvents.recipes(event => {
// Galvenised Steel
event.recipes.create.mixing(['4x gtceu:galvanized_steel_ingot'], ['3x gtceu:steel_ingot', Fluid.of('gtceu:zinc',144)]).heatRequirement('lowheated');
event.recipes.create.mixing([Fluid.of('gtceu:zinc',144)], [Fluid.of('minecraft:lava',250), 'gtceu:zinc_ingot']);     
// Evil Bronze
event.recipes.create.compacting(['gtceu:bronze_ingot'], [Fluid.of('gtceu:bronze',144)]);
event.recipes.create.mixing([Fluid.of('gtceu:bronze',108)], [Fluid.of('gtceu:copper',108), Fluid.of('gtceu:tin',36)]);
event.recipes.create.mixing([Fluid.of('gtceu:tin',144)], [Fluid.of('minecraft:lava',250), 'gtceu:tin_ingot']);    
event.recipes.create.mixing([Fluid.of('gtceu:copper',144)], [Fluid.of('minecraft:lava',250), 'minecraft:copper_ingot']);    
// Even more evil Brass
event.recipes.create.compacting(['gtceu:brass_ingot'], [Fluid.of('gtceu:brass',144)]);
event.recipes.create.mixing([Fluid.of('gtceu:brass',108)], [Fluid.of('gtceu:copper',108), Fluid.of('gtceu:zinc',36)]);
// Invar
event.recipes.create.compacting(['gtceu:invar_ingot'], [Fluid.of('gtceu:invar',144)]);
event.recipes.create.mixing([Fluid.of('gtceu:invar',72)], [Fluid.of('gtceu:iron',72), Fluid.of('gtceu:nickel',36)]);
event.recipes.create.mixing([Fluid.of('gtceu:iron',144)], [Fluid.of('minecraft:lava',250), 'minecraft:iron_ingot']);    
event.recipes.create.mixing([Fluid.of('gtceu:nickel',144)], [Fluid.of('minecraft:lava',250), 'gtceu:nickel_ingot']);   



})
