var map = L.map("map").setView([21.7679, 78.8718], 6);
// console.log("gbdj");
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var caricon = L.icon({
  iconUrl:'/car3.png',
  iconSize:[40,40]
});
L.marker([lat1, long1])
  .addTo(map)
  .bindPopup(
    `Starting Point                
     latitude:${lat1}
     longitude:${long1}`
  )
  .openPopup();
L.marker([lat2, long2])
  .addTo(map)
  .bindPopup(
    `Ending Point 
    latitude:${lat2}
    longitude:${long2}`
  )
  .openPopup();
  var gomarker=L.marker([lat1, long1],{icon:caricon})
  .addTo(map);
//initialize the routing machine
console.log(L.Routing);
var routing=L.Routing.control({
  waypoints: [
    L.latLng(lat1,long1),
    L.latLng(lat2,long2)
  ]
});
routing.on("routesfound",function(e){
  console.log(e);
  e.routes[0].coordinates.map(function(coor,index){
    setTimeout(() => {
       gomarker.setLatLng([coor.lat,coor.lng]);
    },100 * index);
  })
})
routing.addTo(map);
