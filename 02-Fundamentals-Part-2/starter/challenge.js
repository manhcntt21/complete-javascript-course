// // coding challenge #1
// // function calcAverage(score1, score2, score3) {
// //   return (score1 + score2 + score3) / 3;
// // }

// // const calcAverage = function (score1, score2, score3) {
// //   return (score1 + score2 + score3) / 3;
// // };

// // arrow function
// const calcAverage = (a, b, c) => (a + b + c) / 3;

// // function declaration
// function checkWinner(avgDophins, avgKoalas) {
//   if (avgDophins >= avgKoalas * 2) {
//     console.log(`Dophins win (${avgDophins}, ${avgKoalas})`);
//   } else if (avgKoalas >= avgDophins * 2) {
//     console.log(`Koalas win (${avgKoalas}, ${avgDophins})`);
//   } else {
//     console.log("no team wins");
//   }
// }

// let avgDophins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);
// // test 1
// checkWinner(avgDophins, avgKoalas);

// avgDophins = calcAverage(85, 54, 41);
// avgKoalas = calcAverage(23, 34, 27);
// // test 2
// checkWinner(avgDophins, avgKoalas);
// -----------------------------------------------------------------
// // coding challenge #2
// const bills = [125, 555, 44];
// const tips = [];
// const totals = [];

// // function calcTip(bill) {
// //   return bill * (bill <= 300 ? (bill >= 50 ? 0.15 : 0.2) : 0.15);
// // }

// // arrow function
// const calcTip = (bill) =>
//   bill * (bill <= 300 ? (bill >= 50 ? 0.15 : 0.2) : 0.2);

// tips.push(calcTip(bills[0]));
// tips.push(calcTip(bills[1]));
// tips.push(calcTip(bills[2]));
// totals.push(bills[0] + tips[0]);
// totals.push(bills[1] + tips[1]);
// totals.push(bills[2] + tips[2]);
// console.log(totals);
// -----------------------------------------------------------------
// // // coding challenge #3
// const mark = {
//   fullName: "Mark",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi} is higher than ${john.fullName}'s(${john.bmi}))`
//   );
// } else if (mark.bmi < john.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi} is higher than ${mark.fullName}'s(${mark.bmi}))`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi} is as high as ${mark.fullName}'s(${mark.bmi}))`
//   );
// }
// -----------------------------------------------------------------
// // // coding challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [],
  totals = [];

const calcTip = (bill) =>
  bill * (bill <= 300 ? (bill >= 50 ? 0.15 : 0.2) : 0.2);

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(tips, totals);

// bonus
const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(`Average of totals are: ${calcAverage(totals)}`);
