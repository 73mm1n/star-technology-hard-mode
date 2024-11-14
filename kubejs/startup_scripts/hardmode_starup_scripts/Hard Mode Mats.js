
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
                .flags(foil, gear, long_rod, plates,
                        rod, rotor, small_gear, ring, frame)
                .cableProperties(V('hv'), 16, 0, true);

        //Titanium Enriched Galvanized Line

        event.create('titanium_enriched_gavanized_steel')
                .ingot()
                .components('1x galvanized_steel', '1x titanium')
                .color(0x954EAA)
                .flags(plates, ring, rod, gear, small_gear, long_rod, rotor, bolt_and_screw, no_decomp)
                .iconSet(METALLIC)
                .blastTemp(2950, 'low', VHA('EV'), 2600);

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
                .blastTemp(5150, 'highest', VHA('LuV'), 2200);

        //EuCdNq+- Line

        event.create('ionized', -1, -1, -1, null, '-', false);

        event.create('europium_cadmium_ionized_enriched_naquadah')
                .ingot()
                .components('europium_cadmium_enriched_naquadah', 'ionized')
                .color(0xB4FEE2)
                .flags(plates, ring, rod, gear, small_gear, long_rod, rotor, bolt_and_screw, round, frame, no_decomp)
                .iconSet(RADIOACTIVE);

        event.create('polarized_europium_cadmium_enriched_naquadah')
                .ingot()
                .components('5x europium', '3x cadmium', '5x enriched_naquadah')
                .color(0xB6Fee3)
                .flags(no_decomp)
                .iconSet(RADIOACTIVE, MAGNETIC)

        event.create('europium_cadmium_enriched_naquadah')
                .ingot()
                .components('5x europium', '3x cadmium', '5x enriched_naquadah')
                .color(0xB6Fee3)
                .flags(no_decomp)
                .iconSet(RADIOACTIVE)

        event.create('hot_europium_cadmium_enriched_naquadah')
                .ingot()
                .components('5x europium', '3x cadmium', '5x enriched_naquadah')
                .color(0xB6Fee3)
                .flags(no_decomp)
                .iconSet(RADIOACTIVE)
                .blastTemp(7000, 'highest', VHA('ZPM'), 2800);

        //Ttt line

        event.create('trutrittrinaqilium')


});


