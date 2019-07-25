const MAP_KEY = MAP_TOKEN;

export default Map = {
  map: L.map('map', {
    center: [40.750052, -111.875542],
    zoom: 15
  }),
  tile: L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${MAP_KEY}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 17,
    minZoom: 13,
    id: 'mapbox.streets',
  }),
  marker: L.marker([40.750052, -111.875542]),
}