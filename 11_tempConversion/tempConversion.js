const convertToCelsius = function(fh) {
  let cs = Math.round(((fh - 32) * 5/9)*10)/10; 
    
  return cs;

};

const convertToFahrenheit = function(cs) {
  let fh = Math.round((32 + 9*(cs/5))*10)/10

  return fh;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
