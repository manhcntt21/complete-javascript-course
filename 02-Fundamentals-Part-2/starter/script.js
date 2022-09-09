"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//   //   hasDriverLicense = true; // omit s, strict mode raise a error
//   hasDriversLicense = true;
// }

// if (hasDriversLicense) console.log("I can drive :D");

// reversed word
// const interface = "audio";
// const private = 10;
// --------------------------------------------------------------------------
// // function
// function logger() {
//   console.log("My name is Teddy");
// }
// calling/ running/ invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} aplles and ${oranges} oranges`;
//   return juice;
// }

// const applehuice = fruitProcessor(5, 3);
// console.log(applehuice);
// --------------------------------------------------------------------------
// function vs expression
// function calcAge(birthday) {
//   return 2037 - birthday;
// }

// const age1 = calcAge(1991);
// console.log(age1);

// // anonymous function
// const calcAge2 = function (birthday) {
//   return 2037 - birthday;
// };

// const age2 = calcAge2(1991);
// console.log(age2);
// --------------------------------------------------------------------------
// arrow function
// const calsAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calsAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement}`;
// };

// console.log(yearsUntilRetirement(1997, "Manh"));
// console.log(yearsUntilRetirement(1991, "Jonas  "));
// --------------------------------------------------------------------------
// function calling other function
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const oangePieces = cutFruitPieces(oranges);
//   //   console.log(apples, oranges);
//   const juice = `Juice with ${applePieces} aplles and ${oangePieces} oranges`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));
// --------------------------------------------------------------------------
// review

// function calcAge(birthday) {
//   return 2037 - birthday;
// }

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     // return `${firstName} retires in ${retirement}`;
//     return retirement;
//   } else {
//     // return `${firstName} has already retired 🎉`;
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, "Michael"));
// console.log(yearsUntilRetirement(1970, "Bob"));
// --------------------------------------------------------------------------
// // data structure
// // array
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);
// // another way
// const years = new Array(1991, 1992, 1993);
// console.log(years);

// console.log(friends[0]);
// console.log(friends.length);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Michael";
// const michael = [firstName, "Do", "2037 - 1991", "teacher", friends];
// console.log(michael);

// function calcAge(birthday) {
//   return 2037 - birthday;
// }

// // calcAge(years); // not working with array - NaN
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);
// --------------------------------------------------------------------------
// // basic array operations (method)
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);
// // add tail
// const newLength = friends.push("Jay"); // 4
// // add head
// friends.unshift("John");
// console.log(friends);
// console.log(newLength);

// // remove last
// const popped = friends.pop(); // jay
// console.log(friends);
// console.log(popped);

// // remove first
// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob")); // -1 if element not in array

// // true of false
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));

// if (friends.includes("Peter")) {
//   console.log("You have a friend called Peter");
// } else {
//   console.log("You don't have a friend called Peter");
// }
// --------------------------------------------------------------------------
// object
// key: value
// const michaelDo = {
//   firstName: "Michael",
//   lastName: "Do",
//   age: 2037 - 1997,
//   job: "teacher",
//   friends: ["Burrows", "Secrue", "T-Bag", "LJ"],
// };
// console.log(michaelDo);

// //  two ways to retrieve value in object
// console.log(michaelDo.lastName);
// console.log(michaelDo["lastName"]);

// const nameKey = "Name";
// console.log(michaelDo["first" + nameKey]);
// console.log(michaelDo["last" + nameKey]);

// const interestedIn = prompt(
//   "what do you want to know about Michael Do? Choose between firstName, lastName, age, job, and friends"
// );
// // console.log(michaelDo.interestedIn); // not working
// // console.log(michaelDo[interestedIn]); // working
// console.log();
// if (michaelDo[interestedIn]) {
//   a;
//   console.log(michaelDo[interestedIn]); // working
// } else {
//   console.log(
//     "wrong request! Choose between firstName, lastName, age, job, and friends"
//   );
// }

// michaelDo.location = "Vietnam";
// michaelDo["twitter"] = "@Michael";

// console.log(michaelDo);
// console.log(michaelDo["age"]);

// // challenge
// console.log(
//   `${michaelDo.firstName} has ${michaelDo.friends.length} friends, and hist best friend is called ${michaelDo.friends[0]} `
// );
// // --------------------------------------------------------------------------
// object method
// const michaelDo = {
//   firstName: "Michael",
//   lastName: "Do",
//   birthYear: 1997,
//   job: "teacher",
//   friends: ["Burrows", "Secrue", "T-Bag", "LJ"],
//   hasDeriversLicense: true,
//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },
//   // calcAge: function () {
//   //   // console.log(this);
//   //   return 2037 - this.birthYear;
//   // },
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   hasDeriversLicense: true,
//   summarize: function () {
//     return `${this.firstName} is ${this.calcAge()} year old ${
//       this.job
//     }, and he has ${this.hasDeriversLicense ? "a" : "no"} driver's license`;
//   },
// };
// console.log(michaelDo);

// // console.log(michaelDo.calcAge(1991));
// // console.log(michaelDo["calcAge"](1991));
// console.log(michaelDo.calcAge());

// console.log(michaelDo.age);
// console.log(michaelDo.age);
// console.log(michaelDo.age);
// console.log(michaelDo.age);
// // challenge
// console.log(michaelDo.summarize());

// "Jonas is 46-year old teacher, and he has a/no drivers lience"
// --------------------------------------------------------------------------
// iteration: loop
// console.log("Lifting weights repetition 1 🏋🏻‍♂️");
// console.log("Lifting weights repetition 2 🏋🏻‍♂️");
// console.log("Lifting weights repetition 3 🏋🏻‍♂️");
// console.log("Lifting weights repetition 4 🏋🏻‍♂️");
// console.log("Lifting weights repetition 5 🏋🏻‍♂️");

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋🏻‍♂️`);
// }
// --------------------------------------------------------------------------
// // loop
// const michaelDo = [
//   "Michael",
//   "Do",
//   2037 - 1997,
//   "teacher",
//   ["Burrows", "Secrue", "T-Bag", "LJ"],
// ];

// // loop forwards, brack, continue
// for (let i = 0; i < 10; i++) {}

// // loop backwards
// --------------------------------------------------------------------------
// while loops
// let rep = 0;
// while (rep <= 10) {
//   console.log(`WHILE: Lifing weights repetition ${rep} 🏋🏻‍♂️`);
//   rep++;
// }
// let dice = Math.trunc(Math.random() * 6 + 1);
// console.log(dice);
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6 + 1);
// }
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
