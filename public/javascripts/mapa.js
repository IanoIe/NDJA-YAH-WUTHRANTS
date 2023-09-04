

function carregarMapa(idElement){
    var mapa = L.map(idElement)
    var attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';
    var tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var tiles = L.ttileLayer(tileUrl, {attribution});
    tiles.addTo(mapa);
    /**Coordenadas da localização de Biombo */
    mapa.setView([11.887675, -15.857155], 6);
    return mapa
}

