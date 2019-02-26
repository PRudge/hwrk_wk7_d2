const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilyView = function(container) {
  this.container = container;

};


InstrumentFamilyView.prototype.bindEvents = function (){
  PubSub.subscribe('InstrumentFamilies:ready-to-display', (evt) => {
    const instrumentFamilyDets = evt.detail;
    console.log("instrument family dets")
    console.log(instrumentFamilyDets)
    this.outputDetails(instrumentFamilyDets);
  });

};

InstrumentFamilyView.prototype.outputDetails = function(dets) {
  const detail = document.createElement('p');
  detail.textContent = dets.name;
  this.container.appendChild(detail);
}



module.exports = InstrumentFamilyView;
