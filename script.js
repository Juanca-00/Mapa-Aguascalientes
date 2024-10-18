// Inicializar el mapa centrado en Aguascalientes
var map = L.map('map').setView([21.88234, -102.28259], 13); // Coordenadas de Aguascalientes

// Añadir capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
    maxZoom: 19, 
    attribution: '© OpenStreetMap' 
}).addTo(map);


// Crear icono personalizado para Aguascalientes capital (Exedra)
var iconoExedra = L.icon({
    iconUrl: 'imagenes/exedra.png', // Ruta al icono 'exedra'
    iconSize: [38, 38], // Tamaño del icono
    iconAnchor: [22, 38], // Punto del icono que apunta a la ubicación
    popupAnchor: [-3, -38] // Punto desde donde se abre el popup
});

// Añadir marcador con el icono 'Exedra' para Aguascalientes capital
var marker = L.marker([21.88234, -102.28259], { icon: iconoExedra }).addTo(map);
marker.bindPopup("<b>¡Bienvenidos a Aguascalientes!</b><br>Capital del Estado.").openPopup();

// Crear icono personalizado para la Plaza de la Patria (Bandera)
var iconoBandera = L.icon({
    iconUrl: 'imagenes/bandera.png', // Ruta al icono 'bandera'
    iconSize: [38, 38], // Tamaño del icono
    iconAnchor: [22, 38], // Punto del icono que apunta a la ubicación
    popupAnchor: [-3, -38] // Punto desde donde se abre el popup
});

// Añadir marcador en la Plaza de la Patria con icono 'Bandera'
var plazaPatria = L.marker([21.88187, -102.29495], { icon: iconoBandera }).addTo(map);
plazaPatria.bindPopup("<b>Plaza de la Patria</b><br>Corazón de Aguascalientes.");
// Crear icono personalizado para el Museo Nacional de la Muerte (Calavera)
var iconoCalavera = L.icon({
    iconUrl: 'imagenes/calavera.png', // Ruta al icono 'calavera'
    iconSize: [38, 38], // Tamaño del icono
    iconAnchor: [22, 38], // Punto del icono que apunta a la ubicación
    popupAnchor: [-3, -38] // Punto desde donde se abre el popup
});

// Añadir marcador en el Museo Nacional de la Muerte con icono 'Calavera'
var museoMuerte = L.marker([21.88417, -102.28878], { icon: iconoCalavera }).addTo(map);
museoMuerte.bindPopup("<b>Museo Nacional de la Muerte</b><br>Un lugar único.");
// Dibujar un círculo en el recinto de la Feria Nacional de San Marcos 
var feriaSanMarcos = L.circle([21.87888, -102.29727], { 
    color: 'green', 
    fillColor: '#0f3', 
    fillOpacity: 0.5, 
    radius: 300 
  }).addTo(map); 
  feriaSanMarcos.bindPopup("<b>Feria Nacional de San Marcos</b><br>El evento más importante de Aguascalientes."); 

  var centroHistorico = L.polygon([ 
    [21.8821, -102.2935], 
    [21.8829, -102.2865], 
    [21.8797, -102.2860], 
    [21.8792, -102.2920] 
  ]).addTo(map); 
   
  centroHistorico.bindPopup("<b>Centro Histórico de Aguascalientes</b><br>Una joya colonial."); 

  var baseMaps = { 
    "Mapa base": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png') 
  }; 
   
  var overlayMaps = { 
    "Lugares importantes": L.layerGroup([marker, plazaPatria, museoMuerte]), 
    "Feria de San Marcos": feriaSanMarcos, 
    "Centro Histórico": centroHistorico 
  }; 
   
  L.control.layers(baseMaps, overlayMaps).addTo(map);