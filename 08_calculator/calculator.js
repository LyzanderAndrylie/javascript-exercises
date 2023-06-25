const add = function(...num) {
	return num.reduce((total, value) => total + value, 0);
};

const subtract = function(...num) {
  if (num.length === 0) {
    return 0;
  }

	return num.reduce((total, value) => total - value);
};

const sum = function(numbers) {
	return add(...numbers);
};

const multiply = function(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  return numbers.reduce((total, value) => total * value);
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(num) {
  let total = 1;

  for (let i = 2; i <= num; i++) {
    total *= i;
  }

  return total;
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
