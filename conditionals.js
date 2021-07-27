// const raining = true;
// const cold = false;

// if (raining) {
//   console.log("Don't forget your umbrella!");
// }

// if (cold) {
//   console.log("Make sure you pick out a scarf!");
// }

// console.log("Now you'reready to go out!");

// const isCitizen = true;
// const age = 26;

// if (isCitizen && age > 18) {
//   console.log("You are eligible to vote.");
// }

const whichSchool = function (age) {
  // Your code in hereif(age  < 13){
  if (age >= 13 && age <= 18) {
    console.log("Secondary School");
  } else if (age >= 19 && age <= 100) {
    console.log("Lighthouse labs");
  } else if (age < 13) {
    console.log("Elementary school");
  }
};

whichSchool(12);
whichSchool(15);
whichSchool(100);
