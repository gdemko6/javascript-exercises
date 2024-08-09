const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(numbers) {
	return numbers.reduce((total, number) =>{
    return total+=number;
  }, 0)
};

const multiply = function(numbers) {
  return numbers.reduce((total, num) => total*=num, 1)
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function() {
	
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
