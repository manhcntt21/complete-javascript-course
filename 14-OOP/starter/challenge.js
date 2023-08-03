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
