const roundToOneDecimal = function(n) {
  return Math.round(n * 10) / 10;
};

const convertToCelsius = function(f) {
  return roundToOneDecimal((f - 32) * 5/9);
};

const convertToFahrenheit = function(c) {
  return roundToOneDecimal(c * 9/5 + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
