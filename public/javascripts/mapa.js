

var map = L.map('map').setView([11.895015, -15.850439], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([11.895015, -15.850439]).addTo(map)
    .bindPopup('Sector de Quinhamel.<br>')
    .openPopup();


