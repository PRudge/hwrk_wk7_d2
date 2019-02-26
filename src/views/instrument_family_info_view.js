const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilyView = function(container) {
  this.container = container;

};

InstrumentFamilyView.prototype.bindEvents = function (){
  PubSub.subscribe('InstrumentFamilies:ready-to-display', (evt) => {
    const instrumentFamilyDets = evt.detail;
    this.outputDetails(instrumentFamilyDets);
  });
};

InstrumentFamilyView.prototype.outputDetails = function(dets) {
  detail = createInstrumentFamilyInfo(dets);
  detail = createInstrumentList(dets);

  this.container.innerHTML = '';
  this.container.appendChild(detail);
}

const createInstrumentFamilyInfo = function (dets){
  const detail = document.createElement('div');
  const name = document.createElement('h2');
  name.textContent = dets.name;
  detail.appendChild(name);

  const descript = document.createElement('p');
  descript.textContent = dets.description;
  detail.appendChild(descript);

  return detail;
}
const createInstrumentList = function(dets){
  const instrumentsInclude = document.createElement('h3');
  instrumentsInclude.textContent = `Instruments include :`;
  detail.appendChild(instrumentsInclude);

  const instrumentListItem = document.createElement('ul');

  dets.instruments.forEach(function(name) {
    addInstrumentName(name, instrumentListItem);
  });

  detail.appendChild(instrumentListItem);

  return detail;
}
const addInstrumentName = function(name, instrumentListItem) {
  const instrument = document.createElement('li');
  instrument.textContent = name;
  instrumentListItem.appendChild(instrument);
}

module.exports = InstrumentFamilyView;
