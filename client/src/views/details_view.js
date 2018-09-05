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
};

DetailsView.prototype.createElement = function (element, content) {
  const htmlElement = document.createElement(element)
  htmlElement.innerText = content
  return htmlElement
};

DetailsView.prototype.clearContent = function () {
  while(this.element.firstChild){
    this.element.removeChild(this.element.firstChild)
  }
};


module.exports = DetailsView
