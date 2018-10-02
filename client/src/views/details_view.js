const PubSub = require('../helpers/pub_sub.js');

const DetailsView = function(element){
  this.element = element
}

DetailsView.prototype.bindEvents = function () {
  PubSub.subscribe('TimeLineView:date-clicked', (evt) => {
    this.render(evt.detail)
  })
  PubSub.subscribe('Marker:marker-clicked', (evt) => {
    this.render(evt.detail)
  })
};

DetailsView.prototype.render = function (location) {
  this.clearContent()
  this.element.appendChild(this.createElement('h2', location.heading))
  this.element.appendChild(this.createElement('h3', location.date))
  this.element.appendChild(this.createElement('h3', location.location))
  this.element.appendChild(this.createElement('p', location.info))
  this.element.appendChild(this.createImage(location))
};

DetailsView.prototype.createElement = function (element, content) {
  const htmlElement = document.createElement(element)
  htmlElement.innerText = content
  return htmlElement
};

DetailsView.prototype.createImage = function (location) {
  const img = document.createElement('img')
  img.src = location.image
  img.classList.add('location-img')
  return img
};

DetailsView.prototype.clearContent = function () {
  while(this.element.firstChild){
    this.element.removeChild(this.element.firstChild)
  }
};


module.exports = DetailsView
