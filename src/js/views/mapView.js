export const makeMap = (map, tile, marker) => {
  const popup = "<b>Brunch Birds</b><br>Come eat with us!";
  const options = { className: 'custom-popup' };

  tile.addTo(map);
  marker.addTo(map).bindPopup(popup, options);
}