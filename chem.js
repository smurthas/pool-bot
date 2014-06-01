

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
