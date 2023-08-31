var mapa
var map;



window.onload = function(){
    document.getElementById('emailUtilizador').innerHTML = localStorage.getItem('emailUtilizador');
}

mapa = carregarMapa('map');

/**Função carregar o map */
function carregarMapa(getElementById){
    map = L.map("map").setView([11.794613, -15.910183], 8);

    //osm layer
    var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    });
    osm.addTo(map);
}

