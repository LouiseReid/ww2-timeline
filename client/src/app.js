const TimeLine = require('./models/timeline')
const TimeLineView = require('./views/timeline_view')
const DetailsView = require('./views/details_view')
const MapWrapper = require('./models/map_wrapper.js')
const MarkerRender = require('./views/marker_render.js')

document.addEventListener('DOMContentLoaded', () => {
  map = new MapWrapper('map', [13.282379, 50.824481], 3.3);
  map.bindEvents()

  const timeLine = new TimeLine()
  timeLine.getData()

  const markerRender = new MarkerRender()
  markerRender.addMarkers()

  const tl = document.querySelector('#timeline')
  const timeLineView = new TimeLineView(tl)
  timeLineView.bindEvents()


  const detailsContainer = document.querySelector('#details')
  const detailsView = new DetailsView(detailsContainer)
  detailsView.bindEvents()

})
