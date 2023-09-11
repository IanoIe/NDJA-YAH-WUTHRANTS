

/**Esta função permite carregar o mapa e centraliza-lo nas coordenas que estao abaixo, neste caso coordenadas de Madrid */
function carregarMapa(idElement){
  var mapa = L.map(idElement)
  var attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';
  var tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  var tiles = L.tileLayer(tileUrl, { attribution });
  tiles.addTo(mapa);
  /**Cordenadas da localização de Ondame */
  mapa.setView([11.93221091136645, -15.801588950107647], 11).addTo(mapa);
  
  L.marker([11.93221091136645, -15.801588950107647]).addTo(mapa)
  .bindPoup('A pretty CSS popup.<br> Easily customizable.')
  .openPoup();
  return mapa
}


mapa = carregarMapa('map');

