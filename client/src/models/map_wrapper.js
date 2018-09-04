const mapboxgl = require('mapbox-gl');
PubSub = require('../helpers/pub_sub')

const MapWrapper = function(element, center, zoom){

  mapboxgl.accessToken = 'undefined';
  this.map = new mapboxgl.Map({
    container: element,
    center: center,
    zoom: zoom,
    style: 'https://maps.tilehosting.com/c/066aca05-6c64-4e72-908d-813f83452c9b/styles/voyager/style.json?key=WZ0rA6oP6gDrg3oV4w1L'
  })
};

MapWrapper.prototype.addMarker = function(section){
  let lat = section.latlng[0]
  let lng = section.latlng[1]
  let marker = L.marker([lat, lng])
  .addTo(this.map)
  .on('click', this.markerClick);
  marker.detail = section
}

MapWrapper.prototype.markerClick = function (e) {
  PubSub.publish('MapWrapper:marker-clicked', e.target.detail)
};

module.exports = MapWrapper;
