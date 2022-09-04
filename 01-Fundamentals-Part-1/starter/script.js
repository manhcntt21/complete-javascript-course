/* let js = "amazing";

console.log(40 + 8 + 23 - 10);

// name
console.log("Manh");
// age
console.log(25);
// job
console.log("Software Developer");

// use variables
// variable name conventions same java language
let firstName = "Bob";
let currentAge = 25;
let currentJob = "Software Developer";
// --------------------------------------------
console.log(firstName);
console.log(currentAge);
console.log(currentJob); */

/* let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
console.log(typeof "Manh"); */
// --------------------------------------------
/* let age = 30;
const birthYear = 1997;
// birthYear = 1998
var job = "programmer";
job = "teacher";
age = 31; */
// --------------------------------------------
/* // assigement operators
const now = 2027;
const ageManh = now - 1997;
const ageSarah = now - 1991;
console.log(ageManh, ageSarah);
console.log(ageManh * 2, ageSarah / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Manh";
const lastName = "Do";
console.log(firstName + " " + lastName);
// math operators
let x = 10 + 5;
x += 10; // x = x +  10
x *= 4;
x++;
x--;
x--;
console.log(x);
// comparison operators
console.log(ageManh > ageSarah); // >, <, =>, =<
const isFullAge = ageSarah >= 16;
console.log(isFullAge);
console.log(now - 1991 > now - 2018); */
// --------------------------------------------
// opertator precedence
/* const now = 2027;
const ageManh = now - 1997;
const ageSarah = now - 1991;

console.log(now - 1991 > now - 2018);
// left to right
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y); */
// --------------------------------------------
/* // strings and template literals
const firstName = "Manh";
const lastName = "Do";
const job = "student";
const birthYear = 1997;
const year = 2037;

const manh = "I'm " + firstName + ", a " + (year - birthYear) + "years " + job;
// ` backticks
const manhNew = `I'm ${firstName}, a ${year - birthYear}years ${job}`;
console.log(manh);
console.log(manhNew);
console.log(`Just a regular string...`);

console.log("String with \n\
multiple\n\
lines");

console.log("String with \nmultiple\nlines");

console.log(`String with
multiple
lines`); */
// --------------------------------------------
/* // taking decisions: if / else statements
const age = 15;
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
} */
// --------------------------------------------
/* // chuyen doi 1 cach ro rang (type casting)
// type conversion: convert string to number
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number("manh")); // NaN - not a number - invalid number
console.log(typeof NaN); // number
// type conversion: convert number to string
console.log(String(24), 24);

// type coercion: chuyen doi ngam dinh
console.log("I am " + 23 + " years old");
// exactly same
console.log("I am " + "23" + " years old");

console.log("23" - "10" - 3); // 10
console.log("23" + "10" + 3); //concate string: 23103

console.log("23" * 2); // 46
console.log("23" / 2); // 11.5

let n = "1" + 1; // '11' type coercion
n = n - 1; // 11 - 1 = 10 type coercion
console.log(n); // 10 */
// --------------------------------------------
/* // truthy and falsy value
// 5 falsy values: 0, '', underfined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN)); */
// --------------------------------------------
/* // LECTURE Equality Operators == vs ===
const age = "18";
if (age === 18) console.log("you just became a adult! :D (strict)");
if (age == 18) console.log("you just became a adult! :D (loose)");

const favourite = Number(prompt("what's your favourite number?"));
console.log(favourite); // string
if (favourite === 23) console.log("Cool! 23 is an amazing number!");
else if (favourite === 7) console.log("7 is also a cool number");
else console.log("Number is not 23 or 7!");
if (favourite === 23) console.log("Cool! 23 is an amazing number!");

if (favourite !== 23) console.log("Why not 23?");
// END LECTURE */
// --------------------------------------------
// LECTURE basic boolean
// and / or / not

// END LECTURE
// --------------------------------------------
// LECTURE logical operations
/* const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);

const shouldDeive = hasDriverLicense && hasGoodVision;

if (shouldDeive) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive...");
}
// END LECTURE */
// --------------------------------------------
/* // LECTURE switch statement
const day = "tuesday";

switch (day) {
  case "monday": // strictly comparison
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
    break;
  case "thursday":
    break;
  case "friday":
    break;
  case "saturday":
    break;
  case "sunday":
    break;
  default:
    console.log("not a valid day!");
}
// END LECTURE */
// --------------------------------------------
// LECTURE Conditional Operator (ternary)
//  write if else statement all in one line
const age = 23;
// equiavalent ưith if-else statement
age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");

const number = 7;

number < 10
  ? number < 8
    ? number < 3
      ? console.log("bye")
      : console.log(number)
    : console.log(numbere)
  : console.log(number);

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

console.log(`i like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
// --------------------------------------------
// --------------------------------------------
// --------------------------------------------
