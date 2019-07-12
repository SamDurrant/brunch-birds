let map = L.map('mapid', {
  center: [40.750052, -111.875542],
  zoom: 14
})
const mapToken = config.MAP_TOKEN;

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom: 9,
    id: 'mapbox.streets',
    accessToken: mapToken,
}).addTo(map);


let customPopup = "<b>Brunch Birds</b><br>Come eat with us!";
let customOptions = {
  className: 'custom-popup'
}

let marker = L.marker([40.750052, -111.875542]).addTo(map).bindPopup(customPopup, customOptions);


