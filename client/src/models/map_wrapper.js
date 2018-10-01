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
  this.markers = []
};

MapWrapper.prototype.bindEvents = function () {
  PubSub.subscribe('TimeLineView:date-clicked', (evt) => {
    this.toggleHighlight(evt.detail)
  })
};

MapWrapper.prototype.addMarker = function(location){
  let el = document.createElement('div')
  el.className = 'marker'
  el.addEventListener('click',() => {
    this.flyTo(location)
    PubSub.publish('Marker:marker-clicked', location)
  })

  let popup = new mapboxgl.Popup({ offset: 10 })
  .setText(location.heading)

  let marker = new mapboxgl.Marker(el)
  .setLngLat(location.coords)
  .setPopup(popup)
  .addTo(this.map)

  this.markers.push(marker)
}

MapWrapper.prototype.flyTo = function (location) {
  this.map.flyTo({center: location.coords, zoom: 9})
  this.toggleHighlight(location)
};

MapWrapper.prototype.toggleHighlight = function (location) {
  this.markers.forEach((marker) => {
    let flag = marker._lngLat.lng === location.coords[0]
    if(flag){
      marker._element.classList.add('marker-active')
    } else {
      marker._element.classList.remove('marker-active')
    }
  })
};

MapWrapper.prototype.recenter = function () {
  this.map.flyTo({center: [13.282379, 50.824481], zoom: 3.3})
};






module.exports = MapWrapper;
