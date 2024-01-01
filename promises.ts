// Simulating an asynchronous operation with a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data...");

    setTimeout(() => {
      const success = Math.random() < 0.5; // Simulating success or failure randomly

      if (success) {
        const data = { name: "John", age: 30 };
        console.log("Data fetched successfully!");
        resolve(data); // Resolve the Promise with the fetched data
      } else {
        const error = new Error("Failed to fetch data");
        console.error("Error fetching data:", error.message);
        reject(error); // Reject the Promise with an error
      }
    }, 2000);
  });
}

// Using the Promise with the then() and catch() methods
fetchData()
  .then((data) => {
    console.log("Handling data:", data);
  })
  .catch((error) => {
    console.error("Error handling data:", error.message);
  })
  .finally(() => {
    console.log(
      "Cleanup or additional logic, regardless of success or failure"
    );
  });
