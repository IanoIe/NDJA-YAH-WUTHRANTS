
var map;

/** Função carregar o mapa */
function carregarMapa(idElement) {
    map = L.map("map").setView([38.7015863, -9.1566962], 8);
  
    // osm layer
    var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    });
    osm.addTo(map);
  }