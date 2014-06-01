
// via http://www.troublefreepool.com/content/128-chlorine-cya-chart-slam-shock
var FC = [3, 4, 5, 6, 7, 8, 9, 10, 12];
var FC_SWG = [4, 5, 6];
module.exports.getFC = function(CYA, SWG) {
  var index;
  if (!SWG) {
    index = Math.max(0, Math.min(FC.length-1, Math.floor(CYA/10 - 2)));
    return FC[index];
  }
  index = Math.max(0, Math.min(FC_SWG.length-1), Math.floor(CYA/10 - 6));
  return FC_SWG[index];
};

module.exports.getpH = function() {
  return 7.5;
};

// ppm
module.exports.getTA = function(SWG) {
  return SWG? 70 : 80;
};

module.exports.getCYA = function(SWG) {
  return SWG? 75 : 40;
};
