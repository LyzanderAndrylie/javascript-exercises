/**
 * Converts fahrenheit to celsius.
 * @param {number} fahrenheit 
 * @param {number} [decimalPlace = 1] - rounded to specified decimal place.
 */
const convertToCelsius = function(fahrenheit, decimalPlace = 1) {
  const convertResult = (fahrenheit-32) * (5/9);
  return parseFloat(convertResult.toFixed(decimalPlace));
};

/**
 * Covert celsius to fahrenheit.
 * @param {number} celsius 
 * @param {number} [decimalPlace = 1] - rounded to specified decimal place.
 */
const convertToFahrenheit = function(celsius, decimalPlace = 1) {
  const convertResult = (celsius * (9/5)) + 32;  
  return parseFloat(convertResult.toFixed(decimalPlace));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
