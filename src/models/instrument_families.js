const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};


InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('InstrumentFamilies:all-families-ready', this.data);

  PubSub.subscribe('InstrumentFamilySelect:change', (evt) => {
    const selectedIndex = evt.detail;
    this.chosenInstrumentFamily(selectedIndex);
  });
};

InstrumentFamilies.prototype.chosenInstrumentFamily = function(index){
  const selectedInstrumentFamily = this.data[index];
  PubSub.publish('InstrumentFamilies:ready-to-display', selectedInstrumentFamily)
};

module.exports = InstrumentFamilies;
