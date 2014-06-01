

// input Liters, ppm
// output: grams
module.exports.getGrSodiumBicarbonate = function(volume, ppmIncrease) {
  return volume * ppmIncrease * 0.0014;
};

// input Liters, ppm
// output ml
module.exports.getMlHcl_30pct = function(volume, ppmIncrease) {
  return volume * ppmIncrease * 0.0016;
};

// input Liters, ppm
// output grams
module.exports.getGrDryAcid = function(volume, ppmIncrease) {
  return volume * ppmIncrease * 0.0002;
};

// input Liters, pH unit
// output grams
module.exports.getGrSodaAsh = function(volume, d_pH) {
  return volume * d_pH * 0.04;
};

// input Liters, pH unit
// output ml
module.exports.getMlMuriaticAcid = function(volume, d_pH) {
  return volume * d_pH * 0.03;
};

// input Liters, ppm
// output grams
module.exports.getGrCyanuricAcid = function(volume, ppmIncrease) {
  return volume * ppmIncrease * 0.00075;
};

// input Liters, ??
// output grams
module.exports.getGrBakingSoda = function(volume, delta) {
  if (delta < 0) return;
  return volume * delta * 0.001758;
};


// input pH Units, millivolts
// output ppm
module.exports.getFC = function(pH, ORP) {
  var ORP_index = 650;
  var ORP_delta = 100;
  var pH_index = 7;
  var pH_delta = 0.1;

  var values = [
    // ORP: 650
    [
      0,
      0.5,
      0.11,
      0.16,
      0.21,
      0.26,
      0.31,
      0.36,
      0.41,
      0.44,
      0.48
    ],
    // ORP: 750
    [
      0.25,
      0.29,
      0.34,
      0.40,
      0.48,
      0.55,
      0.62,
      0.67,
      0.75,
      0.85,
      0.95
    ],
    // ORP: 850
    [
      1.6,
      2.0,
      2.4,
      3.0
    ]
  ];

  var i = Math.round((ORP - ORP_index) / ORP_delta);
  i = Math.max(0, Math.min(values.length - 1, i));
  var iValues = values[i];

  var j =  Math.round((pH - pH_index)/ pH_delta);
  j = Math.max(0, Math.min(iValues.length - 1, j));
  return iValues[j];
};

// input Liters, ppm
// output ml
module.exports.getMl_6pctBleach = function(poolVolume, ppmIncrease) {
  return poolVolume * ppmIncrease * 0.0162;
};

