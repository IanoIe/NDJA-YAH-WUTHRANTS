var routes = [];
var map;
var marker;


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

/**Função que permite pesquisar a localização atraves da barra de pesquisa e mostra na tela
Recebe a string do utilizador e vai sugerindo e quando clicando da as coords e nome da zona de localização */

async function geolocalizacao(event){
  var localizacao = event.target.value;

  if (localizacao.trim() !== ""){
    var resultados = await $.ajax({
      url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${localizacao}.json?country=pt&limit=5&proximity=ip&types=place%2Cpostcode%2Caddress&language=pt&access_token=pk.eyJ1IjoiZ2FzZGYyMiIsImEiOiJjbDFvN3RkancwMnVrM2RrYnNjZGJhYTduIn0.IuFv3hseMpUHRZY-TnhbDw`,
      method: "get",
      dataType: "json",
    });

    var html = "";

    for (var resultado of resultados.features){
      html += ` <button onclick="selecionarLocalizacao(${resultado.center[0]}, ${resultado.center[1]})" type="button">${resultado.place_name_pt}</button>`;
    }
    document.querySelector("#resultados").innerHTML = html;
  } else {
    document.querySelector("#resultados").innerHTML = "";
  }
}


mapa = carregarMapa('map');


