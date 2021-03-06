const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilySelect = function(element) {
  this.element = element;

};

InstrumentFamilySelect.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:all-families-ready', (evt) => {
    const allInstrumentFamilies = evt.detail;

    this.createDropDown(allInstrumentFamilies);
  });
  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('InstrumentFamilySelect:change', selectedIndex);
  });
};

InstrumentFamilySelect.prototype.createDropDown = function(instrumentFamiliesData){
  instrumentFamiliesData.forEach((instrumentFamily, index) => {
    const option = document.createElement('option');
    option.textContent = instrumentFamily.name;
    option.value = index;
    this.element.appendChild(option);
  })
}


module.exports = InstrumentFamilySelect;
