//Concise Body Arrow Functions
const plantNeedsWater = (day) => (day === "Wednesday" ? true : false);

console.log(plantNeedsWater("Wednesday"));

//If a function looks like:

/*
const greaterThanFive = (num) => {
  return num > 5 ? true : false;
};
*/

/*
To make it into a concise body, we would remove the parentheses, curly braces, and the return keyword:
*/

const greaterThanFive = (num) => (num > 5 ? true : false);
console.log(plantNeedsWater(4));
