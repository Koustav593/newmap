var map = L.map('map').setView([21.7679, 78.8718],4.4);
// console.log("gbdj");
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
map.on("click",function(e){
    console.log(e.latlng.lat);
    console.log(e.latlng.lng);
    L.marker([e.latlng.lat, e.latlng.lng]).addTo(map)
    .bindPopup(`latitude:${e.latlng.lat}
    longitude:${e.latlng.lng}`)
    .openPopup();
});
