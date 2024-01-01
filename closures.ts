const createCounter = () => {
  let count = 0; // Private variable

  const increment = () => {
    count++;
    console.log(`Counter: ${count}`);
  };

  const getCount = () => count;

  return {
    increment,
    getCount,
  };
};

// Create an instance of the counter
const counterInstance = createCounter();

// Use the public methods to interact with the private counter
counterInstance.increment(); // Output: Counter: 1
counterInstance.increment(); // Output: Counter: 2
counterInstance.increment(); // Output: Counter: 3

console.log(counterInstance.getCount()); // Output: 2
