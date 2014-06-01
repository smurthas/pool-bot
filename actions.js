var targets = require('./targets');
var chem = require('./chem.js');

// inputs
//  poolVolume: liters
//  CYA: ppm
//  SWG: true || false
// output
module.exports.getCYAAction = function(poolVolume, CYA, SWG) {
  var delta = targets.getCYA(SWG) - CYA;
  if (delta > 0) {
    return {
      action: 'add',
      material: 'cyanuric acid',
      amount: chem.getGrCyanuricAcid(poolVolume, delta),
      units: 'grams'
    };
  }
};

module.exports.getpHAction = function(poolVolume, pH) {
  var delta = targets.getpH() - pH;
  if (delta > 0) {
    return {
      acount: 'add',
      material: 'soda ash',
      amount: chem.getGrSodaAsh(poolVolume, delta),
      units: 'grams'
    };
  } else {
    return {
      acount: 'add',
      material: 'muriatic acid',
      amount: chem.getMlMuriaticAcid(poolVolume, delta),
      units: 'ml'
    };
  }
};


module.exports.getTAAction = function(poolVolume, TA, SWG) {
  var delta = targets.getTA(SWG) - TA;
  if (delta > 0) {
    return {
      acount: 'add',
      material: 'baking soda',
      amount: chem.getGrBakingSoda(poolVolume, delta),
      units: 'grams'
    };
  } else {
    // To lower TA you reduce pH to 7.0-7.2 with acid and then aerate to
    // increase pH.
    return;
  }
};
