const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas",
];

// Write a while loop that prints out the contents of ingredients:
var i = 0;

while (i <= ingredients.length - 1) {
  console.log(ingredients[i]);
  i++;
}

for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

for (let i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}
