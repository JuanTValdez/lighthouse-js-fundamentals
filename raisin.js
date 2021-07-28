// const raisinAlarmArray = function (cookies) {
//   for (let i = 0; i < cookies.length; i++) {
//     if ((cookies[i] = "Raisin")) {
//       return "Yucky, a raisin";
//     } else {
//       return "Yummy, chocolate";
//     }
//   }
// };

const raisinAlarmArray = function (cookies) {
  for (var i = 0; i < cookies.length; i++) {
    for (var j = 0; j < cookies[i].length; j++) {
      if (cookies[i][j] === "Raisin") {
        console.log("Raisin Alert!");

        return;
      } else {
        console.log("All Good");
      }
    }
  }
};

console.log(
  raisinAlarmArray([
    ["Chocolate", "Chocolate", "Raisin", "Chocolate"],
    ["Chocolate", "Raisin", "Chocolate", "Chocolate", "Raisin"],
    ["Chocolate", "Chocolate", "Chocolate"],
  ])
);
