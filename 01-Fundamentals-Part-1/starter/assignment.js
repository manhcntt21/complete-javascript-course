// Assignement

/* // --------------------------------------------
// LECTURE: Values and Variables
let country = "Vietnam";
let continent = "Asia";
let population = 100;
console.log(country);
console.log(continent);
console.log(population);
// END LECTURE
// --------------------------------------------
// LECTURE: Data Types
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
// END LECTURE: Data Types
// --------------------------------------------
// LECTURE: let, const, and var
language = "vietnamese";
// const country = "vietname";
// syntax error: Identifier has already been decleared
// END LECTURE: let, const, and var
// --------------------------------------------
// LECTURE: basic operators
eachHalf = population / 2;
population++;
console.log(population);
const Finland = 6;
console.log(population > Finland);
const averagePopulation = 33;
console.log(population < averagePopulation);
const description =
  "Portugal is in Europe, and it's 11 million people speak portuguese";
console.log(description);
// END LECTURE: basic operators
// --------------------------------------------
// LECTURE: strings and template literals
const description2 = `${country} is in ${continent}, and it's ${population} million people speak ${language}`;
console.log(description2);
// END LECTURE: basic operators
// --------------------------------------------
// LECTURE: Taking decisions: if / ekse statements
population = 130;
if (population > 33) {
  console.log(`Vietnam's population is above average`);
} else {
  console.log(`Vietnam's population is ${33 - population} below average`);
}
// END LECTURE: Taking decisions: if / ekse statements
// --------------------------------------------
// LECTURE: Type conversion and coercion
console.log("9" - "5"); //4
console.log("19" - "13" + "17"); // '617'
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // flase
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143
// END LECTURE: Type conversion and coercion */
// --------------------------------------------
/* // START LECTURE Logical operator
const language = "english";
const population = 100;
const isIsland = false;
const country = "Vietnam";
if (language === "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country}  dose not meet your criteria`);
}
// END */
// --------------------------------------------
/* // switch statement
const language = "chinese";

switch (language) {
  case "chinese":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("great language too!");
} */
// --------------------------------------------
// ternary operator
const country = "Vietnam";
const population = 100;

console.log(
  `${country}'s population is ${population >= 33 ? "above" : "below"} average`
);
