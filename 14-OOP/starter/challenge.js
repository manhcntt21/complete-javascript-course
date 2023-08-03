'use strict';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const car1 = new Car('BM', 120);
const car2 = new Car('Merceses', 95);

car1.accelerate();
car1.brake();
car2.accelerate();
car2.brake();

// challenge #2
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
  }

  brake() {
    this.speed -= 5;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed / 1.6;
  }
}

const carCl = new CarCl('Ford', 120);

console.log(carCl);
carCl.accelerate();
console.log(carCl);
carCl.brake();
console.log(carCl);
console.log(carCl.speedUS);
carCl.speedUS = 160;
console.log(carCl);
