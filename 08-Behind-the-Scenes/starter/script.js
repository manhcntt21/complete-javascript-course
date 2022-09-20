'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);
//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       // create new variable with same name as outer' scope variable
//       const firstName = 'Steven';
//       // reassinging outer'scope variable
//       output = 'NEW OUTPUT';
//       var millenial = true;
//       const str = `oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//     }

//     // console.log(str);
//     // console.log(millenial);
//     // add(2, 3);
//     // console.log(output);
//   }
//   printAge();
//   return age;
// }
// const firstName = 'Jonas';
// calcAge(1991);
// // console.log(age);
// // printAge();

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Manh';
// let job = 'teacher';
// const year = 1997;

// console.log(addDecl(1, 2));
// // console.log(addExpr(1, 2));
// // console.log(addArrow(1, 2));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// if (!numProducts) {
//   deleteShoppingCart();
// } else {
// }
// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   //   console.log(this);
// };

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   //   console.log(this);
// };

// calcAgeArrow(1991);

// const Michael = {
//   year: 1997,
//   calcAge: function () {
//     console.log(2037 - this.year);
//   },
// };

// Michael.calcAge();

// var firstName = 'Matilda';

// const jonas = {
//   firstName: 'jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);
//     // // solution 1
//     // const self = this;
//     // const isMillential = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };
//     //solution 2
//     const self = this;
//     const isMillential = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillential(); // regular function call
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// jonas.calcAge();
// jonas.greet();
// console.log(this);

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 3);
// addExpr(2, 3, 3);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 8);

///////////////
//
//

// primitive type
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// reference types
// const jesscia = {
//   firstName: 'Jesscia',
//   lastName: 'Williams',
//   age: 27,
// };

// const mariedJesscia = jesscia;
// mariedJesscia.lastName = 'Davis';
// console.log(jesscia, mariedJesscia);
// copy object
const jesscia2 = {
  firstName: 'Jesscia',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// first level copy
const jessciaCopy = Object.assign({}, jesscia2);
jessciaCopy.lastName = 'Davis';
// console.log(jesscia2);
// console.log(jessciaCopy);

jessciaCopy.family.push('Mary');
jessciaCopy.family.push('John');

console.log(jesscia2);
console.log(jessciaCopy);
