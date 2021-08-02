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
// Prep Work - 4: Programming Intro
// Arrays - Ice Cream!
// const iceCreamFlavours = [
//   "chocolate",
//   "vanilla",
//   "cookies and cream",
//   "rocky road",
//   "strawberry",
// ];
// console.log(iceCreamFlavours);
// iceCreamFlavours.push("root beer");
// console.log(iceCreamFlavours);
// console.log(iceCreamFlavours[0]);
// console.log(iceCreamFlavours[iceCreamFlavours.length - 1]);
// console.log(iceCreamFlavours.length);
//Prep Work - 4: Programming intro
// Looping - Range
// const range = function (start, end, steps) {
//   const array = [];
//   if (start === null || end === null || start > end || steps < 0) {
//     return array;
//   } else {
//     for (let i = start; i <= end; i += steps) {
//       array.push(i);
//     }
//     // console.log(array);
//     return array;
//   }
// };
// console.log(range(0, 10, 2));
// console.log(range(10, 30, 5));
// console.log(range(-5, 2, 3));
//Prep Work - 4: Programming intro
// Looping - lastIndexOf
/**************************************************************** */
//Prep Work - 4: Programming intro
//Looping - lastIndexOf
// const lastIndexOf = function (array, value) {
//   let iValue = 0;
//   for (let i = array.length - 1; i >= -1; i--) {
//     // console.log(i);
//     if (array[i] === value) {
//       iValue = i;
//       break;
//     } else if (array === [] || value !== array[i]) {
//       iValue = -1;
//     }
//   }
//   console.log(iValue);
//   return iValue;
// };
// lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3;
// lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4;
// lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1;
// lastIndexOf([5, 5, 5], 5), "=?", 2;
// lastIndexOf([], 3), "=?", -1;
/**************************************************************/
// Prep Work - 4:Programming Intro
// Loopy Lighthouse 2
// const loopyLighthouse = function (range, multiples, words) {
//   let minNumber;
//   let maxNumber;
//   minNumber = range[0];
//   maxNumber = range[1];
//   for (let i = minNumber; i <= maxNumber; i++) {
//     if (i % multiples[1] == 0 && i % multiples[0] == 0) {
//       console.log(words[0] + words[1]);
//     } else if (i % multiples[1] == 0) {
//       console.log(words[1]);
//     } else if (i % multiples[0] == 0) {
//       console.log(words[0]);
//     } else {
//       console.log(i);
//     }
//   }
// };
// loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
/**************************************************************/
// Prep Work - 4: Programming Intro
// Concatenate Arrays
// console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
// console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
// console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
// console.log(concat([5, 10], []), "=?", [5, 10]);

/**************************************************************/

/* ***************THIS IS NOT FINISHED - STRETCH****************/

// Prep Work - 4: Programming Intro
//  Merge Arrays

/********   This is not finished ********/

// const merge = function (array1, array2) {
//   let concatArray = array1.concat(array2);
//   console.log(concatArray);
//   return concatArray;
// };
// merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6];
// merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8];
// merge([1, 2, 6], []), "=?", [1, 2, 6];

/***********************************************************************/

// Prep Work - 4: Programming Intro
// Objects - Trash to Treasure

// const smartGarbage = function (trash, bins) {
//   if (trash === "compost") {
//     bins.compost++;
//   } else if (trash === "recycling") {
//     bins.recycling++;
//   } else if (trash === "waste") {
//     bins.waste++;
//   }
//   console.log(bins);
//   return bins;
// };

// smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 });

/******************************************************* */
// Prep Work - 4: Programming Intro
// Objects - Driving Mayor Daisy

// const cars = [
//   {
//     time: 1568329654807,
//     speed: 40,
//   },
//   {
//     time: 1568329821632,
//     speed: 42,
//   },
//   {
//     time: 1568331115463,
//     speed: 35,
//   },
// ];

// const speed = 38;

// const carPassing = function (cars, speed) {
//   let addCar = {
//     time: Date.now(),
//     speed: speed,
//   };
//   cars.push(addCar);
//   console.log(cars);
//   return cars;
// };
// carPassing(cars, speed);

/******************************************************* */
// Prep Work - 4: Programming Intro
// Objects - We're Rooting for You!

// const vegetables = [
//   {
//     submitter: "Old Man Franklin",
//     redness: 10,
//     plumpness: 5,
//   },
//   {
//     submitter: "Sally Tomato-Grower",
//     redness: 2,
//     plumpness: 8,
//   },
//   {
//     submitter: "Hamid Hamidson",
//     redness: 4,
//     plumpness: 3,
//   },
// ];

// const metric = "redness";

// const judgeVegetable = function (vegetables, metric) {
//   let bestVeg = 0;

//   if (metric === "redness") {
//     for (let i = 0; i <= vegetables.length - 1; i++) {
//       if (vegetables[i].redness >= bestVeg) {
//         bestVeg = vegetables[i].redness;
//         console.log(vegetables[i].submitter);
//         return vegetables[i].submitter;
//       }
//     }
//   }
// };
// judgeVegetable(vegetables, metric);

// Prep Work - 6: Katas
// Kata 1 - Sum the  Largest Numbers

// const sumLargestNumbers = function (data) {
//   var firstLargest = 0;
//   var secondLargest = 0;
//   for (let i = 0; i < data.length; i++) {
//     if (data[i] > firstLargest) {
//       secondLargest = firstLargest;
//       firstLargest = data[i];
//     } else if (data[i] === firstLargest) {
//       secondLargest = data[i];
//     }
//   }
//   console.log(firstLargest + secondLargest);
//   return firstLargest + secondLargest;
// };

// console.log(sumLargestNumbers([1, 10]));
// console.log(sumLargestNumbers([1, 2, 3]));
// console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

// Prep Work - 6: Katas
// Kata 2 - Conditional Sums

const conditionalSum = function (values, condition) {
  let array1 = [];
  let addNum = 0;
  let sumNum = 0;

  if (condition === "even") {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 == 0) {
        array1.push(values[i]);
        addNum = values[i];
        sumNum = sumNum + addNum;
      }
    }
    // console.log(sumNum);
    return sumNum;
  } else if (condition === "odd") {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 != 0) {
        array1.push(values[i]);
        addNum = values[i];
        sumNum = sumNum + addNum;
      }
    }
    // console.log(sumNum);
    return sumNum;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
