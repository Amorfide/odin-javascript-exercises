const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sum = 0;
  for(i=0; i<array.length; i++){
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let multiplication = 1;
  for(let i=0; i<array.length; i++){
    multiplication *= array[i];
  }
  return multiplication;
};

const power = function(a, b) {
	return a**b
};

const factorial = function(a) {
  let sum = 1;
  if(a ==0){
    return sum;
  }else{
    for(let i=1; i<=a; i++){
      sum *= i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
