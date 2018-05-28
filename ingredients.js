var ingredients = ["eggs", "milk", "flour", "sugar",
"baking soda", "baking powder", "chocolate chips", "bananas"];

var repeat = 0;
while (repeat < ingredients.length) {
  console.log(ingredients[repeat]);
  repeat++;
}

for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

var x = ingredients.length - 1;

for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[x]);
  x--;
}