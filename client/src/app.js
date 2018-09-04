const TimeLine = require('./models/timeline')
const TimeLineView = require('./views/timeline_view')
const DetailsView = require('./views/details_view')
const MapWrapper = require('./models/map_wrapper.js');


document.addEventListener('DOMContentLoaded', () => {
  map = new MapWrapper('map', [15.2551, 54.5260], 3);

  const timeLine = new TimeLine()
  timeLine.getData()

  const tl = document.querySelector('#timeline')
  const timeLineView = new TimeLineView(tl)
  timeLineView.bindEvents()

  const detailsContainer = document.querySelector('#details')
  const detailsView = new DetailsView(detailsContainer)
  detailsView.bindEvents()
})
