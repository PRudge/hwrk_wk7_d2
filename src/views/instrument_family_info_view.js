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
  const detail = document.createElement('div');
  console.log(detail)
  const name = document.createElement('h2');
  name.textContent = dets.name;
  detail.appendChild(name);

  const descript = document.createElement('p');
  descript.textContent = dets.description;
  detail.appendChild(descript);

  const instrumentsInclude = document.createElement('h3');
  instrumentsInclude.textContent = `Instruments include :`;
  detail.appendChild(instrumentsInclude);

  // instrumentList = this.createInstrumentListElement();
  const instrumentListItem = document.createElement('ul');

  dets.instruments.forEach(function(name) {
    const instrument = document.createElement('li');
    instrument.textContent = name;
    instrumentListItem.appendChild(instrument);
    // this.addInstrumentName(name, instrumentListItem)

  });

  detail.appendChild(instrumentListItem);

  this.container.innerHTML = '';
  this.container.appendChild(detail);
}

// InstrumentFamilyView.prototype.addInstrumentName = function(name, instrumentListItem) {
//   const instrument = document.createElement('h4');
//   instrument.textContent = name;
//   instrumentListItem.appendChild(instrument);
// }


module.exports = InstrumentFamilyView;
