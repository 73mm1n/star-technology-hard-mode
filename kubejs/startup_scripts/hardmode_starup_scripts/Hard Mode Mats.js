
materialRegistry(event => {
    
        // Hard Mode Mats
        event.create('galvanized_steel')
         .ingot()
         .components('3x steel', '1x zinc')
         .color(0xbababa)
         .flags(plates, rod, gear, ring, small_gear,long_rod, rotor, bolt_and_screw)
         .flags(no_decomp)
         .iconSet(DULL);
         
         event.create('alcad')
         .ingot()
         .components('59x aluminium', '1x copper', '1x manganese', '1x magnesium')
         .color(0xA9D5D6)
         .flags(plates, rod, ring, small_gear, long_rod, rotor, bolt_and_screw)
         .flags(electrolyze)
         .iconSet(METALLIC);

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

         event.create('titanium_enriched_gavanized_steel')
         .ingot()
         .components('1x galvanized_steel', '1x titanium')
         .color(0x954EAA)
         .flags(plates, ring, rod, gear, small_gear,long_rod, rotor, bolt_and_screw)
         .flags(no_decomp)
         .iconSet(METALLIC);

         event.create('tungsten_cubide')
         .ingot()
         .components('8x carbon', '8x tungsten')
         .color(0x880000)
         .flags(ring, plates, rod, gear, small_gear,long_rod, rotor, bolt_and_screw)
         .flags(no_decomp)
         .iconSet(METALLIC);

         event.create('UHPI_alloy')
         .ingot()
         .components('2x uranium_triplatinum', '6x ruridit', '5x rhodium_plated_palladium', '3x osmiridium')
         .color(0x63BE95)
         .flags(plates, ring, rod, gear, small_gear,long_rod, rotor, bolt_and_screw, round, frame)
         .flags(no_decomp)
         .iconSet(RADIOACTIVE);

         event.create('europium_cadmium_ionized_enriched_naquadah')
         .ingot()
         .components('5x europium', '3x cadmium', '5x enriched_naquadah', 'mystery')
         .color(0x63BE95)
         .flags(plates, ring, rod, gear, small_gear,long_rod, rotor, bolt_and_screw, round, frame)
         .flags(no_decomp)
         .iconSet(RADIOACTIVE);

         event.create('trutrittrinaqilium')


});


