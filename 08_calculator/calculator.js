const add = function(x,y) {
	let added = x + y;
  return added;
};

const subtract = function(x, y) {
	let minus = x - y;
  return minus;
};

const sum = function(a) {
   let summation = a.reduce(function(a, b) {
      return a + b; },
      0)
      return summation;
    };

const multiply = function(a) {
  var output = 1;
  for (var i = 0; i < a.length; i++) {
    output *= a[i];
    
  }
  return output;
};

const power = function(x, y) {
  exponential = x ** y
  return exponential;
};

const factorial = function(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *=i;
  }
    return num;
  }

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
