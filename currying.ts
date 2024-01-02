// Original function
function multiply(x, y) {
  return x * y;
}

// Curried function
function curryMultiply(x) {
  return function (y) {
    return x * y;
  };
}

// Reusable partially applied function
const double = curryMultiply(2);
const triple = curryMultiply(3);

console.log(double(2)); // Output: 10
console.log(double(8)); // Output: 16

console.log(triple(2));

// Dynamic function generator
function generatePowerFunction(exponent) {
  return function (base) {
    return Math.pow(base, exponent);
  };
}

const square = generatePowerFunction(2);
const cube = generatePowerFunction(3);

console.log(square(4)); // Output: 16
console.log(cube(3)); // Output: 27
