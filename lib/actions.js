var targets = require('./targets');
var chem = require('./chem.js');

// inputs
//  poolVolume: liters
//  CYA: ppm
//  SWG: true || false
// output
var actions = [
  function(values) {
    var delta = targets.getCYA(values.SWG) - values.CYA;
    if (delta > 0) {
      return {
        action: 'add',
        material: 'cyanuric acid',
        amount: chem.getGrCyanuricAcid(values.poolVolume, delta),
        units: 'grams'
      };
    }
  },

  function(values) {
    var delta = targets.getpH() - values.pH;
    if (delta > 0) {
      return {
        action: 'add',
        material: 'soda ash',
        amount: chem.getGrSodaAsh(values.poolVolume, delta),
        units: 'grams'
      };
    } else {
      return {
        action: 'add',
        material: 'muriatic acid',
        amount: chem.getMlMuriaticAcid(values.poolVolume, delta),
        units: 'ml'
      };
    }
  },

  function(values) {
    var delta = targets.getTA(values.SWG) - values.TA;
    if (delta > 0) {
      return {
        acount: 'add',
        material: 'baking soda',
        amount: chem.getGrBakingSoda(values.poolVolume, delta),
        units: 'grams'
      };
    } else {
      // To lower TA you reduce pH to 7.0-7.2 with acid and then aerate to
      // increase pH.
      return;
    }
  },

  function(values) {
    var FC = chem.getFC(values.pH, values.ORP);
    var delta = targets.getFC(values.CYA, values.SWG) - FC;
    if (delta > 0) {
      return {
        acount: 'add',
        material: '6% bleach',
        amount: chem.getMl_6pctBleach(values.poolVolume, delta),
        units: 'ml'
      };
    }
  }
];


// values:
//  pH: 0-14
//  ORP: 650-850
//  TDS: ??
//  CYA: ppm
module.exports.getActions = function(values) {
  var theseActions = [];

  actions.forEach(function(fn) {
    var action = fn(values);
    if (action) theseActions.push(action);
  });

  return theseActions;
};
