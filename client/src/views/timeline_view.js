const PubSub = require('../helpers/pub_sub.js');

const TimeLineView = function(element) {
  this.element = element
}

TimeLineView.prototype.bindEvents = function () {
  PubSub.subscribe('TimeLine:data-ready', (evt) => {
    this.render(evt.detail)
  })
};

TimeLineView.prototype.render = function (content) {
  content.forEach((date) => {
    let li = document.createElement('li')
    li.textContent = date.date
    li.data = date
    this.element.appendChild(li)
    li.addEventListener('click', function(){
      PubSub.publish('TimeLineView:date-clicked', this.data)
    })
  })
};


module.exports = TimeLineView;
