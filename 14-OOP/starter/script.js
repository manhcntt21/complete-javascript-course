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

Person.hey = function () {
  console.log('Hey there!');
};

Person.hey();

// jonas.hey(); // errorr
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

// 213 ES6 classes
// class expression
// const PersonCl = class {};

// class declaration
// uu tien cai nay hon
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // instance method
  // method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey, ${this.firstName}`);
  }

  // static method
  static hey() {
    console.log('Hey there!');
  }
}

const jessica = new PersonCl('Jessica', 1996);

console.log(jessica);
console.log(PersonCl.prototype === jessica.__proto__);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey, ${this.firstName}`);
// };

jessica.greet();

PersonCl.hey();

// 216 Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

console.log(steven);

steven.name = 'Steven';
steven.birthYear = 2002;

steven.calcAge();

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto); //true

const sarah = Object.create(PersonProto);

// khong ke thua thuoc tinh va method khi tao o instance
// nen voi moi thuoc tinh phai thao tac lai
console.log(sarah);
sarah.init('Sarah', 2000);
sarah.calcAge();

// 218
const Person2 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person2.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student2 = function (firstName, birthYear, course) {
  Person2.call(this, firstName, birthYear);
  this.course = course;
};

// link prototypes
Student2.prototype = Object.create(Person2.prototype);

Student2.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student2('Mike', 2000, 'Computer Science');
console.log(mike);
mike.introduce();

mike.calcAge();

console.log(mike.__proto__); // introduce
console.log(mike.__proto__.__proto__); // Person2.prototype

console.log(mike instanceof Student2);
console.log(mike instanceof Person2);
console.log(mike instanceof Object);

console.dir(Student2.prototype.constructor);
Student2.prototype.constructor = Student2;
console.dir(Student2.prototype.constructor);

console.dir(mike);

// 220: inheritance between "Classese": ES6
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // always need to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student i feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

// const martha = new StudentCl('Martha Jone', 2012);
const martha = new StudentCl('Martha Jone', 2012, 'Computer Science');

martha.introduce();

martha.calcAge();

// 221: inheritance betwwen "Classes" with Object.create
const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay2 = Object.create(StudentProto);

jay2.init('Jay', 2010, 'Computer Science');
jay2.introduce();
jay2.calcAge();

// 222 Another Class Example
class Account {
  // 1 public field
  locale = navigator.language;

  // 2 private field
  // true encapsulation
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // fake encapsulation
    this.#pin = pin;

    // fake encapsulation
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening account, ${this.owner}`);
  }
  // 3 public method
  // puclic interface - a API
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }
  // 4 private method
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 11111);
// console.log(acc1);
// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.#approveLoan(1000);

console.log(acc1.getMovements());
console.log(acc1);

// console.log(acc1.#pin);
// console.log(acc1.#movements);

// 225 Chaning
acc1.deposit(300).deposit(500).withdraw(350).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
