// const sayHello = function () {
//   console.log("Hello, world");
// };

// sayHello();

// const sayHello = function (name) {
//   console.log("Hello, " + name);
// };

// sayHello("Caliban");
// sayHello("Miranda");
// sayHello("Ferdinand");

const returnSayHello = function (name) {
  return "Hello, " + name;
};
const greeting = returnSayHello("John");
console.log(greeting);

//////////////////////////////////////

// const isEven = function (num) {
//   return num % 2 === 0;
// };

// const tenIsEven = isEven(10);
// const elevenIsEven = isEven(11);

// console.log(tenIsEven);
// console.log(elevenIsEven);

// Simplified version of above commented "isEven"

const isEven = function (num) {
  return num % 2 === 0;
};

console.log(isEven(10));
console.log(isEven(11));
