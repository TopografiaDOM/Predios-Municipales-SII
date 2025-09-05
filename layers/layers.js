var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Presdios_sii_1 = new ol.format.GeoJSON();
var features_Presdios_sii_1 = format_Presdios_sii_1.readFeatures(json_Presdios_sii_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Presdios_sii_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Presdios_sii_1.addFeatures(features_Presdios_sii_1);
var lyr_Presdios_sii_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Presdios_sii_1, 
                style: style_Presdios_sii_1,
                popuplayertitle: 'Presdios_sii',
                interactive: true,
                title: '<img src="styles/legend/Presdios_sii_1.png" /> Presdios_sii'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Presdios_sii_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Presdios_sii_1];
lyr_Presdios_sii_1.set('fieldAliases', {'COMUNA': 'COMUNA', 'MANZ_SII': 'MANZ_SII', 'PREDIO': 'PREDIO', 'ROL_SII': 'ROL_SII', 'SECTOR': 'SECTOR', 'ESTADO': 'ESTADO', 'ESTADO_REV': 'ESTADO_REV', 'ROL_DOM': 'ROL_DOM', 'Comuna_1': 'Comuna_1', 'Dirección': 'Dirección', 'Destino': 'Destino', 'Fojas': 'Fojas', 'Número': 'Número', 'Año': 'Año', 'Avalúo_fi': 'Avalúo_fi', 'F__Derecho': 'F__Derecho', 'Avalúo_Pr': 'Avalúo_Pr', 'Superficie': 'Superficie', 'Situacion': 'Situacion', 'Estado_de': 'Estado_de', });
lyr_Presdios_sii_1.set('fieldImages', {'COMUNA': 'TextEdit', 'MANZ_SII': 'TextEdit', 'PREDIO': 'TextEdit', 'ROL_SII': 'TextEdit', 'SECTOR': 'TextEdit', 'ESTADO': 'TextEdit', 'ESTADO_REV': 'TextEdit', 'ROL_DOM': 'TextEdit', 'Comuna_1': 'TextEdit', 'Dirección': 'TextEdit', 'Destino': 'TextEdit', 'Fojas': 'TextEdit', 'Número': 'TextEdit', 'Año': 'TextEdit', 'Avalúo_fi': 'TextEdit', 'F__Derecho': 'TextEdit', 'Avalúo_Pr': 'TextEdit', 'Superficie': 'TextEdit', 'Situacion': 'TextEdit', 'Estado_de': 'TextEdit', });
lyr_Presdios_sii_1.set('fieldLabels', {'COMUNA': 'hidden field', 'MANZ_SII': 'hidden field', 'PREDIO': 'hidden field', 'ROL_SII': 'inline label - visible with data', 'SECTOR': 'hidden field', 'ESTADO': 'hidden field', 'ESTADO_REV': 'hidden field', 'ROL_DOM': 'hidden field', 'Comuna_1': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Destino': 'inline label - always visible', 'Fojas': 'inline label - always visible', 'Número': 'inline label - always visible', 'Año': 'inline label - always visible', 'Avalúo_fi': 'inline label - always visible', 'F__Derecho': 'inline label - always visible', 'Avalúo_Pr': 'inline label - always visible', 'Superficie': 'inline label - always visible', 'Situacion': 'inline label - always visible', 'Estado_de': 'inline label - always visible', });
lyr_Presdios_sii_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});