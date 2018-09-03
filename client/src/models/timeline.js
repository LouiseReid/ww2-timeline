const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const TimeLine = function() {

}

TimeLine.prototype.getData = function () {
  const request = new Request('/api/timeline');
  request.get()
  .then((data) => {
    PubSub.publish('TimeLine:data-ready', data)
  })
  .catch(console.error)
};


module.exports = TimeLine;
