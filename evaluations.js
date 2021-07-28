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

const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];
const goodStations = [];
const chooseStations = function (stations) {
  for (const station of stations) {
    const capacity = station[1];
    if (capacity >= 20) {
      // console.log(station[0]);
      const type = station[2];
      if (type === "school" || type === "community centre") {
        // let goodStations = [];

        goodStations.push(station[0]);
        // console.log(station[0]);
        if (goodStations.length >= 2) console.log(goodStations);
      }
    }
  }
};

console.log(chooseStations(stations));
