// Prep Work - 4: Programming Intro
// Conditionals - whichSchool

/*const whichSchool = function (age) {
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
*/

/**************************/

// Prep Work - 4:Programming Intro
// Loopy Lighthouse

// const minNumber = 100;
// const maxNumber = 200;
// for (let i = minNumber; i <= maxNumber; i++) {
//   if (i % 3 == 0 && i % 4 == 0) {
//     console.log("LoopyLighthouse");
//   } else if (i % 4 == 0) {
//     console.log("Lighthouse");
//   } else if (i % 3 == 0) {
//     console.log("Loopy");
//   } else {
//     console.log(i);
//   }
// }

// Prep Work - 4:Programming Intro
// Voting Station Calculation

// const stations = [
//   ["Big Bear Donair", 10, "restaurant"],
//   ["Bright Lights Elementary", 50, "school"],
//   ["Moose Mountain Community Centre", 45, "community centre"],
// ];

// const chooseStations = function (stations) {
//   const goodStations = [];

//   for (const station of stations) {
//     const capacity = station[1];
//     if (capacity >= 20) {
//       // console.log(station[0]);
//       const type = station[2];
//       if (type === "school" || type === "community centre") {
//         goodStations.push(station[0]);
//         // console.log(station[0]);
//         // if (goodStations.length >= 2)
//         // console.log(goodStations);
//       }
//     }
//   }
//   return goodStations;
// };

// console.log(chooseStations(stations));

/*********************************************/
// Prep Work - 4:Programming Intro
// X marks the perfect spot

// const moves = ["north", "north", "west", "west", "north", "east", "north"];

// const finalPosition = function (moves) {
//   let paradePosition = [0, 0];

//   for (let x = 0; x <= moves.length; x++) {
//     if (moves[x] == "north") {
//       paradePosition[1]++;
//     } else if (moves[x] == "south") {
//       paradePosition[1]--;
//     } else if (moves[x] == "east") {
//       paradePosition[0]++;
//     } else if (moves[x] == "west") {
//       paradePosition[0]--;
//     }
//   }
//    console.log(paradePosition);
//   return paradePosition;
// };

// finalPosition(moves);

/**************************** */
// Prep Work - 4:Programming Intro
// Age calculator

// const ageCalculator = function (name, yearOfBirth, currentYear) {
//   let age;
//   age = currentYear - yearOfBirth;

//   return `${name}` + " " + "is" + " " + `${age}` + " " + "years old.";
// };

// console.log(ageCalculator("Suzie", 1984, 2016));
// console.log(ageCalculator("Jack", 2004, 2016));
// console.log(ageCalculator("Ali", 2016, 2016));

/**************************** */
// Prep Work - 4:Programming Intro
// Age calculator

// const howManyHundreds = function (number) {
//   return (number - (number % 100)) / 100;
// };
// console.log(howManyHundreds(1000), "=?", 10);
// console.log(howManyHundreds(894), "=?", 8);
// console.log(howManyHundreds(520), "=?", 5);
// console.log(howManyHundreds(99), "=?", 0);
// console.log(howManyHundreds(0), "=?", 0);

/**************************** */
// Prep Work - 4:Programming Intro
// Area calculator

// const calculateRectangleArea = function (length, width) {
//   if (length * width > 0) {
//     console.log(length * width);
//     return length * width;
//   } else {
//     return undefined;
//   }
// };

// const calculateTriangleArea = function (b, h) {
//   // halfTriangle = 0.5;
//   let area = 0.5 * b * h;
//   if (area > 0) {
//     console.log(area);
//     return area;
//   } else {
//     return undefined;
//   }
// };

// const calculateCircleArea = function (radius) {
//   //areaOfCircle = Math.PI * (radius * radius);

//   if (Math.PI * (radius * radius) > Math.PI) {
//     console.log(Math.PI * (radius * radius));
//     return Math.PI * (radius * radius);
//   } else {
//     return undefined;
//   }
// };

// calculateRectangleArea(10, 5);
// calculateRectangleArea(1.5, 2.5);
// calculateRectangleArea(10, -5);

// calculateTriangleArea(10, 5);
// calculateTriangleArea(3, 2.5);
// calculateTriangleArea(10, -5);

// calculateCircleArea(10);
// calculateCircleArea(3.5);
// calculateCircleArea(-1);

/*********************************************/
// Prep Work - 4:Programming Intro
// Arrays - Ice Cream!

const iceCreamFlavours = [
  "chocolate",
  "vanilla",
  "cookies and cream",
  "rocky road",
  "strawberry",
];
console.log(iceCreamFlavours);
iceCreamFlavours.push("root beer");
console.log(iceCreamFlavours);

console.log(iceCreamFlavours[0]);
console.log(iceCreamFlavours[iceCreamFlavours.length - 1]);
console.log(iceCreamFlavours.length);
