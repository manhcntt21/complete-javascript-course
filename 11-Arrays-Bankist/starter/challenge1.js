'use strict';
// challenge 1, 2, 3, 4
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

const dogsJulia = [9, 16, 6, 8, 3];
const dogsKate = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice(1, -2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);

  dogs.forEach(function (dogAge, i, arr) {
    if (dogAge > 3) {
      console.log(
        `Dog number ${i + 1} is an adult, and is ${dogAge} years old`
      );
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(cur => (cur <= 2 ? cur * 2 : 16 + cur * 4));
//   const adults = humanAges.filter(cur => cur >= 18);
//   const average = adults.reduce((sum, cur) => sum + cur, 0) / adults.length;
//   return average;
// };

const calcAverageHumanAge = ages =>
  ages
    .map(cur => (cur <= 2 ? cur * 2 : 16 + cur * 4))
    .filter(cur => cur >= 18)
    .reduce((sum, cur, _, arr) => sum + cur / arr.length, 0);

checkDogs(dogsJulia, dogsKate);

// const average = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const average = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(average);
// const dogsAge = calcAverageHumanAge(dogsJulia);
const dogs = [
  { weight: 22, curFood: 250, owner: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owner: ['Matilda'] },
  { weight: 13, curFood: 275, owner: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owner: ['Michael'] },
];

// 4.1
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

// 4.2
const validFoodPortion = function (dog) {
  return dog.curFood > 1.1 * dog.recommendedFood
    ? 'too much'
    : dog.curFood < 0.9 * dog.recommendedFood
    ? 'too little'
    : 'ok';
};

const dogsSarah = dogs.filter(dog => dog.owner.includes('Sarah'));
console.log(dogsSarah);
console.log(
  `Sarah's dog is eating too ${
    dogsSarah.curFood > dogsSarah.recommendedFood ? 'much' : 'little'
  }`
);
console.log(validFoodPortion(dogsSarah));
// 4.3
const ownersEatTooMuch = dogs
  .filter(dog => validFoodPortion(dog) === 'too much')
  .flatMap(dog => dog.owner);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => validFoodPortion(dog) === 'too little')
  .flatMap(dog => dog.owner);
console.log(ownersEatTooLittle);
// 4.4
console.log('4.4');
const ownersEatTooMuch2 = dogs
  .filter(dog => validFoodPortion(dog) === 'too much')
  .flatMap(dog => dog.owner)
  .join(' ')
  .concat(" 's dog eat too much");

console.log(ownersEatTooMuch2);

const ownersEatTooLittle2 = dogs
  .filter(dog => validFoodPortion(dog) === 'too little')
  .flatMap(dog => dog.owner)
  .join(' ')
  .concat(" 's dog eat too little");
console.log(ownersEatTooLittle2);

// 4.5
const exactlyFoodPortion = dogs.some(
  dog => dog.recommendedFood === dog.curFood
);
console.log(exactlyFoodPortion);

// 4.6
const okDog = dogs.some(dog => validFoodPortion(dog));
console.log(okDog);
// 4.7

const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

const nameOkDog = dogs.filter(checkEatingOkay);
console.log(nameOkDog);
// 4.8
const dogsSorted = dogs
  .slice()
  .sort((a, b) => (a.recommendedFood > b.recommendedFood ? 1 : -1));
console.log(dogsSorted);
console.log(dogs);
