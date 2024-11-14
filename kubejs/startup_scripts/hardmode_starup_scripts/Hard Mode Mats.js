
materialRegistry(event => {
    
        // Hard Mode Mats
        event.create('galvanized_steel')
         .ingot()
         .components('3x steel', '1x zinc')
         .color(0xbababa)
         .flags(plates, rod, gear, small_gear,long_rod, rotor, bolt_and_screw)
         .flags(no_decomp)
         .iconSet(DULL);
         
         event.create('alcad')
         .ingot()
         .components('59x aluminium', '1x copper', '1x manganese', '1x magnesium')
         .color(0xA9D5D6)
         .flags(plates, rod, small_gear, long_rod, rotor, bolt_and_screw)
         .flags(electrolyze)
         .iconSet(SHINY);

         event.create('fluxated_electrumium')

         event.create('titanium_enriched_gavanized_steel')

         event.create('tungsten_cubide')

         event.create('UHPI_alloy')

         event.create('europium_cadmium_ionized_enriched_naquadah')

         event.create('trutrittrinaqilium')


});


