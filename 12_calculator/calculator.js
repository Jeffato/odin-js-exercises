const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(list) {
	let sum = 0;

  for(i = 0; i < list.length; i++){
    sum += list[i];
  }

  return sum;
};

const multiply = function(list) {
  let product = 1;

  for(i = 0; i < list.length; i++){
    product *= list[i];
  }

  return product;
};

const power = function(base, power) {
	return Math.pow(base, power)
};

const factorial = function(num) {
	if (num == 0) return 1

  let factorial = 1

  for(i = 1; i <= num; i++){
    factorial *= i
  }

  return factorial
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
