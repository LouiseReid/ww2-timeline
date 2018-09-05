PubSub = require('../helpers/pub_sub')

const MarkerRender = function(){

}

MarkerRender.prototype.addMarkers = function () {
  PubSub.subscribe('TimeLine:data-ready', (event) => {
    event.detail.forEach(function(section) {
      map.addMarker(section)
    })
  })
};

module.exports = MarkerRender;
