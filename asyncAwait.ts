// Simulating an asynchronous operation with a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data...");

    setTimeout(() => {
      const success = Math.random() < 0.8; // Simulating success or failure randomly

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

// Using async/await to handle asynchronous code
async function fetchDataAndProcess() {
  try {
    console.log("Start");

    // Using await to wait for the asynchronous operation to complete
    const data = await fetchData();

    // After the Promise is resolved, continue with the synchronous-style code
    console.log("Handling data:", data);

    // Simulating another asynchronous operation
    const processedData = await processAsyncData(data);
    console.log("Processed data:", processedData);

    console.log("End");
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    console.log(
      "Cleanup or additional logic, regardless of success or failure"
    );
  }
}

// Simulating another asynchronous operation
function processAsyncData(data) {
  return new Promise((resolve) => {
    console.log("Processing data...");
    setTimeout(() => {
      // Simulating processing and returning modified data
      const processedData = { ...data, processed: true };
      console.log("Data processed successfully!");
      resolve(processedData);
    }, 1000);
  });
}

// Calling the asynchronous function
fetchDataAndProcess();
