function syncFunction() {
  console.log("Start");
  const result = performSyncOperation();
  console.log("Result:", result);
  console.log("End");
}

function performSyncOperation() {
  return "Sync Operation Result";
}

syncFunction();

async function asyncFunction() {
  console.log("Start");
  const result = await performAsyncOperation();
  console.log("Result:", result);
  console.log("End");
}

function performAsyncOperation() {
  return new Promise((resolve) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      resolve("Async Operation Result");
    }, 2000);
  });
}

asyncFunction();
