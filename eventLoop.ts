// console.log("Start");

// setTimeout(function () {
//     console.log("Timeout 1");
// }, 0);

// Promise.resolve().then(function () {
//     console.log("Promise 1");
// });

// console.log("End");

console.log("Start");

// setTimeout simulates an asynchronous operation
setTimeout(function () {
  console.log("Timeout 1");
}, 0);

// Promise simulates another asynchronous operation
new Promise(function (resolve) {
  console.log("Promise executor");
  resolve("Promise 1");
}).then(function (value) {
  console.log(value);
});

// Synchronous function
function syncFunction() {
  console.log("Sync Function");
}

syncFunction();

// Another setTimeout with a longer delay
setTimeout(function () {
  console.log("Timeout 2");
}, 1000);

// Reading a file asynchronously (simulated with setTimeout)
setTimeout(function () {
  console.log("Reading file...");
}, 500);

console.log("End");

function two() {
  console.log("two");
}

/* => call stack
x two() 
  one()
*/

/* => call stack
 x one()
*/

/* => call stack

*/

function one() {
  console.log("one");
  two();
}

one(); // => call stack [one()]

function asyncFunction() {
  console.log("asyncFunction start");

  setTimeout(() => {
    console.log("called after 2000");
  }, 2000);

  console.log("asyncFunction end");
}

// microtask