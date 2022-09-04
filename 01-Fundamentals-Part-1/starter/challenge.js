/* // --------------------------------------------
// --------------------------------------------
// coding challenge
// --------------------------------------------
// --------------------------------------------
// coding challenge #1

// const markWeight = 78,
//   markHeight = 1.69;
// const johnWeight = 95,
//   johnHeight = 1.88;
const markWeight = 95,
  markHeight = 1.88;
const johnWeight = 85,
  johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

// coding challenge #2
if (markBMI > johnBMI) {
  console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})`);
} else {
  console.log(`Mark's BMI(${markBMI}) is lower than John's(${johnBMI})`);
}

// coding challenge #3
// bonus 1
const scoreDolphins = 97 + 112 + 101;
const scoreKoalas = 109 + 95 + 123;
const averageScoreDolphins = scoreDolphins / 3;
const averageScoreKoalas = scoreKoalas / 3;
console.log(averageScoreDolphins, averageScoreKoalas);

if (averageScoreDolphins >= 100 || averageScoreKoalas >= 100) {
  if (averageScoreDolphins === averageScoreKoalas) {
    console.log("Both teams win the trophy!");
  } else if (averageScoreDolphins > averageScoreKoalas) {
    console.log("Dolphins team win!");
  } else {
    console.log("Koalas team win!");
  }
} else {
  console.log("no team wins the trophy!");
}*/
// coding challenge #4
const bill = 300; // 400, 50, 10
const tip = bill <= 300 ? (bill >= 50 ? 0.15 : 0.2) : 0.2;

console.log(
  `The bill was ${bill}, the tip was ${
    (bill * tip) / 100
  } , and the total value  ${bill + bill * tip}`
);
