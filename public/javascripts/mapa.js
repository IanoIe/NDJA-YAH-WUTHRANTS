
/**Adicionar o mapa na pagina, centralizado nas coordenas de Sector de Quinhamel */
var map = L.map('map').setView([11.886818, -15.785327], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


/**Adicionado marcador que identifica no mapa Reino de Biombo (Dorce) */
L.marker([11.810573, -15.899025]).addTo(map)
    .bindPopup('Reino de Biombo')
    .openPopup();

/**Adicionado marcador que identifica no mapa Reino de Bijimita*/
L.marker([11.955979, -15.793463]).addTo(map)
    .bindPopup('Reino de Bijimita')
    .openPopup();

/**Adicionado marcador que identifica no mapa Reino de Antula*/
L.marker([11.861915, -15.593262]).addTo(map)
    .bindPopup('Reino de Antula')
    .openPopup();

/**Adicionado marcador que identifica no mapa Reino de Bor*/
L.marker([11.868111, -15.901315]).addTo(map)
    .bindPopup('Reino de Tôrr')
    .openPopup();
    
/**Adicionado marcador que identifica no mapa Reino de Quissef*/
L.marker([11.826995, -15.757871]).addTo(map)
    .bindPopup('Reino de Quissef')
    .openPopup();
    

/**Adicionado marcador que identifica no mapa Reino de Prabis*/
L.marker([11.798910102786643, -15.738519996419273]).addTo(map)
    .bindPopup('Reino de Prabis')
    .openPopup();


/**Adicionado marcador que identifica no mapa Reino de Safim*/
L.marker([11.947145, -15.650605]).addTo(map)
.bindPopup('Reino de Safim')
.openPopup();



/**Adicionado marcador que identifica no mapa Reino de Djal*/
L.marker([11.912882, -15.636357]).addTo(map)
.bindPopup('Reino de Djal')
.openPopup();
   


/**Adicionado marcador que identifica no mapa Reino de Ntim*/
L.marker([11.861914, -15.593245]).addTo(map)
.bindPopup('Reino de Ntim')
.openPopup();






/**Adicionado marcador que identifica no mapa Reino de Cúmura*/
L.marker([11.845307, -15.648148]).addTo(map)
    .bindPopup('Reino de Cúmura')
    .openPopup();
    

    
