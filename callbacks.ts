// Simulating an asynchronous operation with setTimeout
function fetchDataCallback(callback) {
  console.log("Fetching data...");

  setTimeout(() => {
    const data = { name: "John", age: 30 };
    console.log("Data fetched successfully!");
    const error = Math.random() < 0.5;
    callback(error, data); // Invoke the callback with the fetched data
  }, 2000);
}

// Callback function to handle the fetched data
function handleData(error, data) {
  if (error) {
    console.error("Error fetching data:", error);
  } else {
    console.log("Handling data:", data);
  }
}

// Using the fetchData function with the handleData callback
fetchDataCallback(handleData);
