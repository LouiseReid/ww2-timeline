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

MapWrapper.prototype.bindEvents = function () {
  PubSub.subscribe('TimeLineView:date-clicked', (evt) => {
    this.highlightMarker(evt.detail)
  })
};

MapWrapper.prototype.addMarker = function(section){
  let el = document.createElement('div')
  el.className = 'marker'
  el.addEventListener('click', function(){
    this.flyTo(section)
  }.bind(this))


  let marker = new mapboxgl.Marker(el)
  .setLngLat(section.coords)
  .addTo(this.map)
}

MapWrapper.prototype.flyTo = function (location) {
  this.map.flyTo({center: location.coords, zoom: 9})
};

MapWrapper.prototype.highlightMarker = function (marker) {
  console.log(marker);
};




module.exports = MapWrapper;
