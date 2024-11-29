// if packmode = 
function elementRegistry(func) { GTCEuStartupEvents.registry('gtceu:element', func); };
function materialRegistry(func) { GTCEuStartupEvents.registry('gtceu:material', func); };

// Useful functions
function V(voltage) {
    let v;
    switch(voltage) {
        case 'ulv': v = GTValues.V[GTValues.ULV]; break;
        case 'lv': v = GTValues.V[GTValues.LV]; break;
        case 'mv': v = GTValues.V[GTValues.MV]; break;
        case 'hv': v = GTValues.V[GTValues.HV]; break;
        case 'ev': v = GTValues.V[GTValues.EV]; break;
        case 'iv': v = GTValues.V[GTValues.IV]; break;
        case 'luv': v = GTValues.V[GTValues.LuV]; break;
        case 'zpm': v = GTValues.V[GTValues.ZPM]; break;
        case 'uv': v = GTValues.V[GTValues.UV]; break;
        case 'uhv': v = GTValues.V[GTValues.UHV]; break;
        case 'uev': v = GTValues.V[GTValues.UEV]; break;
        case 'uiv': v = GTValues.V[GTValues.UIV]; break;
        case 'uxv': v = GTValues.V[GTValues.UXV]; break;
        case 'opv': v = GTValues.V[GTValues.OpV]; break;
        case 'max': v = GTValues.V[GTValues.MAX]; break;
    }
    return v;
}

function VA(voltage) {
    let v;
    switch(voltage) {
        case 'ulv': v = GTValues.VA[GTValues.ULV]; break;
        case 'lv': v = GTValues.VA[GTValues.LV]; break;
        case 'mv': v = GTValues.VA[GTValues.MV]; break;
        case 'hv': v = GTValues.VA[GTValues.HV]; break;
        case 'ev': v = GTValues.VA[GTValues.EV]; break;
        case 'iv': v = GTValues.VA[GTValues.IV]; break;
        case 'luv': v = GTValues.VA[GTValues.LuV]; break;
        case 'zpm': v = GTValues.VA[GTValues.ZPM]; break;
        case 'uv': v = GTValues.VA[GTValues.UV]; break;
        case 'uhv': v = GTValues.VA[GTValues.UHV]; break;
        case 'uev': v = GTValues.VA[GTValues.UEV]; break;
        case 'uiv': v = GTValues.VA[GTValues.UIV]; break;
        case 'uxv': v = GTValues.VA[GTValues.UXV]; break;
        case 'opv': v = GTValues.VA[GTValues.OpV]; break;
        case 'max': v = GTValues.VA[GTValues.MAX]; break;
    }
    return v;
}

function VH(voltage) {
    let v;
    switch(voltage) {
        case 'ulv': v = GTValues.VH[GTValues.ULV]; break;
        case 'lv': v = GTValues.VH[GTValues.LV]; break;
        case 'mv': v = GTValues.VH[GTValues.MV]; break;
        case 'hv': v = GTValues.VH[GTValues.HV]; break;
        case 'ev': v = GTValues.VH[GTValues.EV]; break;
        case 'iv': v = GTValues.VH[GTValues.IV]; break;
        case 'luv': v = GTValues.VH[GTValues.LuV]; break;
        case 'zpm': v = GTValues.VH[GTValues.ZPM]; break;
        case 'uv': v = GTValues.VH[GTValues.UV]; break;
        case 'uhv': v = GTValues.VH[GTValues.UHV]; break;
        case 'uev': v = GTValues.VH[GTValues.UEV]; break;
        case 'uiv': v = GTValues.VH[GTValues.UIV]; break;
        case 'uxv': v = GTValues.VH[GTValues.UXV]; break;
        case 'opv': v = GTValues.VH[GTValues.OpV]; break;
        case 'max': v = GTValues.VH[GTValues.MAX]; break;
    }
    return V;
}

function VHA(voltage) {
    let v;
    switch(voltage) {
        case 'ulv': v = GTValues.VHA[GTValues.ULV]; break;
        case 'lv': v = GTValues.VHA[GTValues.LV]; break;
        case 'mv': v = GTValues.VHA[GTValues.MV]; break;
        case 'hv': v = GTValues.VHA[GTValues.HV]; break;
        case 'ev': v = GTValues.VHA[GTValues.EV]; break;
        case 'iv': v = GTValues.VHA[GTValues.IV]; break;
        case 'luv': v = GTValues.VHA[GTValues.LuV]; break;
        case 'zpm': v = GTValues.VHA[GTValues.ZPM]; break;
        case 'uv': v = GTValues.VHA[GTValues.UV]; break;
        case 'uhv': v = GTValues.VHA[GTValues.UHV]; break;
        case 'uev': v = GTValues.VHA[GTValues.UEV]; break;
        case 'uiv': v = GTValues.VHA[GTValues.UIV]; break;
        case 'uxv': v = GTValues.VHA[GTValues.UXV]; break;
        case 'opv': v = GTValues.VHA[GTValues.OpV]; break;
        case 'max': v = GTValues.VHA[GTValues.MAX]; break;
    }
    return V;
}

function periodicTableElement(material, type) {

    let mat = GTMaterials.get(material);
    switch(type) {
        case 'ingot': mat.setProperty(PropertyKey.INGOT, new $IngotProperty()); break;
        case 'dust': mat.setProperty(PropertyKey.DUST, new $DustProperty()); break;
        case 'fluid': case 'gas': case 'plasma': case 'molten': {
            let prop = new $FluidProperty();
            switch(type) {
                case 'fluid': prop.getStorage().enqueueRegistration(GTFluidStorageKeys.LIQUID, new GTFluidBuilder()); break;
                case 'gas': prop.getStorage().enqueueRegistration(GTFluidStorageKeys.GAS, new GTFluidBuilder()); break;
                case 'plasma': prop.getStorage().enqueueRegistration(GTFluidStorageKeys.PLASMA, new GTFluidBuilder()); break;
                case 'molten': prop.getStorage().enqueueRegistration(GTFluidStorageKeys.MOLTEN, new GTFluidBuilder()); break;
            }
            mat.setProperty(PropertyKey.FLUID, prop); 
            break;
        }  
    }

    // let mat = GTMaterials.get(material);
    // switch(type) {
    //     case 'ingot': mat.setProperty(PropertyKey.INGOT, new $IngotProperty()); break;
    //     case 'dust': mat.setProperty(PropertyKey.DUST, new $DustProperty()); break;
    //     case 'fluid': case 'gas': case 'plasma': case 'molten': {
    //         let prop = new $FluidProperty();
    //         let key;
    //         switch(type) {
    //             case 'fluid': key = GTFluidStorageKeys.LIQUID;
    //             case 'gas': key = GTFluidStorageKeys.GAS;
    //             case 'plasma': key = GTFluidStorageKeys.PLASMA;
    //             case 'molten': key = GTFluidStorageKeys.MOLTEN;
    //         }
    //         prop.getStorage().enqueueRegistration(key, new GTFluidBuilder());
    //         mat.setProperty(PropertyKey.FLUID, prop); 
    //     }
    //         break;
    // }
}

function blastProperty(material, temperature, gasTier, voltage, duration) {
    let mat = GTMaterials.get(material);
    mat.setProperty(PropertyKey.BLAST, new $BlastProperty(temperature, gasTier, voltage, duration));
}

materialRegistry(event => {

        // Hard Mode Mats

        //Base Galvanized Line

        event.create('galvanized_steel')
                .ingot()
                .components('3x steel', '1x zinc')
                .color(0xbababa)
                .flags(plates, rod, gear, ring, small_gear, long_rod, rotor, bolt_and_screw, no_decomp)
                .iconSet(DULL);

        //Alcad Line

        event.create('alcad')
                .ingot()
                .components('59x aluminium', '1x copper', '1x manganese', '1x magnesium')
                .color(0xA9D5D6)
                .flags(plates, rod, ring, small_gear, long_rod, rotor, bolt_and_screw, electrolyze)
                .iconSet(METALLIC);

        //Flux. Elect. Line

        event.create('fluxated_electrumium')
                .ingot(1)
                .fluid()
                .components('3x electrum', '2x magnetic_steel', '1x lumium')
                .color(0xEEDD9A)
                .iconSet(SHINY)
                .blastTemp(2100, 'low', VA('hv'), 1500)
                .flags(foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame)
                .cableProperties(V('hv'), 16, 0, true);

        //Titanium Enriched Galvanized Line

        event.create('titanium_enriched_gavanized_steel')
                .ingot()
                .components('1x galvanized_steel', '1x titanium')
                .color(0x954EAA)
                .flags(plates, ring, rod, gear, small_gear, long_rod, rotor, bolt_and_screw, no_decomp)
                .iconSet(METALLIC)
                .blastTemp(2950, 'low', VA('ev'), 2600);

        //Tungsten Cubide Line

        event.create('tungsten_cubide')
                .ingot()
                .components('8x carbon', '8x tungsten')
                .color(0x880000)
                .flags(ring, plates, rod, gear, small_gear, long_rod, rotor, bolt_and_screw, no_decomp)
                .iconSet(METALLIC);

        //URPI line

        event.create('URPI_alloy')
                .ingot()
                .components('2x uranium_triplatinum', '6x ruridit', '5x rhodium_plated_palladium', '3x osmiridium')
                .color(0x63BE95)
                .flags(plates, ring, rod, gear, small_gear, long_rod, rotor, bolt_and_screw, round, frame, no_decomp)
                .iconSet(RADIOACTIVE)
                .blastTemp(5150, 'highest', VA('luv'), 2200);

        //Hyper Nq+ Line

        event.create('hyper_enriched_naquadah')
                .ingot()
                .components('2x caesium', '3x cerium', '5x enriched_naquadah')
                .color(0xB4FEE2)
                .flags(no_decomp)
                .iconSet(RADIOACTIVE)
                .blastTemp(7000, 'highest', VA('zpm'), 2800);

        //Ttt line

        event.create('trutrittrinaqilium')


});


