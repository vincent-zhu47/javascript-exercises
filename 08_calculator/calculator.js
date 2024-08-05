const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(arr) {
	return arr.reduce(add, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, curr) => total * curr, 1);
};

const power = function(x, y) {
	return Math.pow(x,y);
};

const factorial = function(n) {
	let total = 1;
  
  for (let i = 2; i <= n; i++) {
    total*=i;
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
