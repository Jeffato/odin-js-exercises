// return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;

const convertToCelsius = function(tempF) {
  //(°F − 32) × 5/9 = 0°C
  let tempC =  ((tempF - 32) * 5) / 9;
  return +tempC.toFixed(1);
};

const convertToFahrenheit = function(tempC) {
  // (°C × 9/5) + 32 
  let tempF = ((tempC * 9) / 5) + 32;
  return +tempF.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
