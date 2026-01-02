const convertToCelsius = function(grados) {
  let conversion = (grados-32)* (5/9);
  return Math.round(conversion *10)/10
};

const convertToFahrenheit = function(grados) {
  let conversion = (grados* 9/5)+ (32) 
  return Math.round(conversion *10)/10
};

console.log(convertToCelsius(32));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
