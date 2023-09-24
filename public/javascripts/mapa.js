
/**Adicionar o mapa na pagina, centralizado nas coordenas de Sector de Quinhamel */
var map = L.map('map').setView([11.895015, -15.850439], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

/**Adicionado marcador que identifica no mapa Sector de Quinhamel */
L.marker([11.895015, -15.850439]).addTo(map)
    .bindPopup('Sector de Quinhamel.<br>')
    .openPopup();

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




    