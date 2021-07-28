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

// Prep Work - 4:Programming Intro
// Loopy Lighthouse

const minNumber = 100;
const maxNumber = 200;
for (let i = minNumber; i <= maxNumber; i++) {
  if (i % 3 == 0 && i % 4 == 0) {
    console.log("LoopyLighthouse");
  } else if (i % 4 == 0) {
    console.log("Lighthouse");
  } else if (i % 3 == 0) {
    console.log("Loopy");
  } else {
    console.log(i);
  }
}
