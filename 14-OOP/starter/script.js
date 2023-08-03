'use strict';

// constructor function
const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never to do that
  //   this.calcAge = function () {
  //     return 2037 - this.birthYear;
  //   };
};

const manh = new Person('Manh', 1997);

console.log(manh);

//1. a new empty object {} is created
//2. function is called, this = {}
//3. {} linked to prototype
// function automatically return {}

const matilda = new Person('Matilda', 1992);

console.log(matilda);

const jay = 'Jay';
console.log(manh instanceof Person);
console.log(jay instanceof Person);

// 209: Prototypes
console.log(Person.prototype);

// chi tao 1 lan, moi object duoc tao ra tu constructor o tren deu co the truy capj method nay
// thay vi object nao cung phai tao ham nay nhu luc dau
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

manh.calcAge();
matilda.calcAge();

console.log(manh.__proto__);

// prototype cua function = proto cua object ma tao ra no
console.log(Person.prototype === manh.__proto__);
console.log(Person.prototype.isPrototypeOf(manh));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = 'Homo Sapiens';

console.log(manh, matilda);
console.log(manh.species, matilda.species);

console.log(manh.hasOwnProperty('firstName')); // true
console.log(manh.hasOwnProperty('birthYear')); //true
console.log(manh.hasOwnProperty('species')); // false

// gia tri nay goi la Prototype, nhung no cung la 1 object
// ma 1 object thi lai co prototype (goi la __proto__)
console.log(Person.prototype);

console.log(Person.prototype.__proto__);

// 211 prototypal inheritance on Built-in Object (ex: Array)

console.log(manh.__proto__); // Prototype of Person
// Object.prototype (top of prototype chain)
console.log(manh.__proto__.__proto__); // Prototype of Object
console.log(manh.__proto__.__proto__.__proto__); // null

console.log(Person.prototype); // == manh.__proto__
console.log(Person.prototype.constructor); //

const arr = [1, 1, 2, 3, 4, 5, 6, 7, 7]; // giong nhu new Array
console.log(arr.__proto__); // prototype of Array
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__); // Object.prototype
console.log(arr.__proto__.__proto__.__proto__); // null

Array.prototype.unique = function () {
  //   return [...new Set(this)];
  return [...new Set(this)];
};

console.log(arr.unique());

console.log(Array.prototype.__proto__ === Object.prototype); // true
console.log(Array.__proto__ === Object.prototype); // false
