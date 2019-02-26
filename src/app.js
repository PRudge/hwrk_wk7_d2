const instrumentFamilyData = require('./data/instrument_family_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const InstrumentFamilySelect = require('./views/instrument_family_select.js');
const InstrumentFamilyView = require('./views/instrument_family_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectInstrumentFamily = document.querySelector('select#instrument-families');
  const instrumentFamilyDropDown = new InstrumentFamilySelect(selectInstrumentFamily);
  instrumentFamilyDropDown.bindEvents();

  const instrumentFamilyDets = new InstrumentFamilies(instrumentFamilyData);
  instrumentFamilyDets.bindEvents();



  // const viewInstrumentFamily = document.querySelector('#instrument-family-info');
  // const instrumentFamilyInfo = new InstrumentFamilyView(viewInstrumentFamily);
  // instrumentFamilyInfo.bindEvents();

});
