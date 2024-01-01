// 1. Comments

/* multiline
comment */

// 2. declare variables
var a = 1;
var b = "b";
var c: number;
c = 2;

// 3. swap vars without extra var
let x = 2;
let y = 3;
x = x + y;
y = x - y;
x = x - y;

// console.log({x,y})

// 4. let,const

let some = 5;
{
  let some = 9;
  //   console.log(some); // => 9
}

const arr = [1, 2];
arr.push(3);
// console.log(arr); // => [1,2,3]

// 5. arithmetic
const add = (a: any, b: any) => a + b;
const sub = (a: any, b: any) => a - b;
const multiply = (a: any, b: any) => a * b;
const divide = (a: any, b: any) => a / b;
const modulus = (a: any, b: any) => a % b;

// 6. increment, decrement

let someVar = 1;
someVar++;
// console.log(someVar); // => 2
someVar--;
// console.log(someVar); // => 2

// 6. decimals

let fraction1 = 1.1;
let fraction2 = 2.2;
// console.log({ addition: fraction1 + fraction2 }); // => { addition: 3.3000000000000003 }

// 7. compound assignment
let i = 1;
i += 2;
// console.log({ i }); // => { i: 3 }

// 8. literal quotes
// const string = "Alan said, \"Peter is learning JavaScript\"";

// 9. strings
const string = "hello world!";
// console.log(string[0]);
// string[0] = "4"; // => error
// string[string.length - 1];

// 10. arrays
const array = [1, 2, 3];
array.push(4);
// console.log(array); // => [ 1, 2, 3, 4 ]
array[array.length - 1];
array.pop();
// console.log(array); // => [ 1, 2, 3 ]
array.shift();
// console.log(array); // => [2,3]
array.unshift(0);
// console.log(array); // => [0,2,3]

// 11. Lists

const shoppingList = [
  ["apple", 20],
  ["orange", 15],
];

// console.log({ apple: shoppingList[0] });

// 12. functions
function myFunction(a: number = 10) {
  return a + 1;
}

// 13. Variable Global vs Local Scope
function exampleFunction() {
  var localVar = "I am a local variable.";
  //   console.log(localVar); // Accessible here
}

exampleFunction();
// console.log(localVar);  // This would result in an error - localVar is not defined outside the function

function exampleBlockScope() {
  if (true) {
    let blockVar = "I am a block-scoped variable.";
    // console.log(blockVar); // Accessible here
  }
  // console.log(blockVar);  // This would result in an error - blockVar is not defined here
}

exampleBlockScope();

function bothScopeExample() {
  var functionVar = "I am a function-scoped variable.";

  if (true) {
    let blockVar = "I am a block-scoped variable.";
    // console.log(functionVar); // Accessible here
    // console.log(blockVar); // Accessible here
  }

  //   console.log(functionVar); // Accessible here
  // console.log(blockVar);  // This would result in an error - blockVar is not defined here
}

bothScopeExample();

// 14. variable hoisting

// console.log(x); // Output: undefined
// var x = 5;
// console.log(x); // Output: 5

// 15. function hoisting

hoistedFunction(); // Output: "I am hoisted!"
function hoistedFunction() {
  //   console.log("I am hoisted!");
}

// hoistedFunctionExp();
// => Cannot access 'hoistedFunctionExp' before initialization
// if var hoistedFunctionExp is not a function

const hoistedFunctionExp = () => {
  //   console.log("I am hoistedFunctionExp!");
};

// 16. hoisting with let, const

// console.log(myLetVar); // This would result in an error - myLetVar is not defined
// let myLetVar = 20;
// console.log(myLetVar); // Output: 20

// Caveats with Hoisting:
// Order Matters:
// The order in which variables and functions are declared matters when it comes to hoisting.

// Only Declarations are Hoisted:
// It's important to note that only the declarations are hoisted, not the initializations.
// For example, if you try to use the value of a variable before it's assigned, you'll get undefined.

// 17. Objects

type MyObject = {
  name: string;
  age?: number;
  "work-email": string;
};

const object: MyObject = {
  name: "mark",
  age: 22,
  "work-email": "some@some.com",
};

// console.log({ age: object.age, workEmail: object['work-email'] });
object.name = "ram";
// console.log({ name: object.name });

delete object.age;

if (object.hasOwnProperty("age")) {
  console.log("has age");
}

// 18. object manipulation

type Contact = {
  firstName: string;
  lastName: string;
  number: string;
  likes: string[];
};

const contacts: Contact[] = [
  {
    firstName: "mark",
    lastName: "twain",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "harry"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "ram",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

const profile = lookUpProfile("Sherlock", "likes");

// console.log({ profile }); // => { profile: [ 'Intriguing Cases', 'Violin' ] }

function lookUpProfile(name, prop) {
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

// 19. recursion
function rangeOfNumbers(start: number, end: number) {
  if (start > end) {
    return [];
  } else {
    const numbersInRange = rangeOfNumbers(start, end - 1);
    numbersInRange?.push(end as never);
    return numbersInRange;
  }
}

// const result = rangeOfNumbers(1, 5);
// console.log(result); // => [ 1, 2, 3, 4, 5 ]

const addAll = (numbers: number[]) => {
  if (numbers.length === 0) {
    return 0;
  } else {
    return numbers[0] + addAll(numbers.slice(1));
  }
};

// const numbers = [1, 2, 3, 4, 5];
// const result = addAll(numbers);
// console.log(result); // => 15

//. 20 loops

let users = [
  { name: "one", age: 1 },
  { name: "two", age: 2 },
  { name: "three", age: 3 },
];

for (let i = 0; i < users.length; i++) {
  //   const user = users[i];
  //   console.log(user.name);
}
