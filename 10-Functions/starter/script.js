'use strict';
// 128
// const bookings = [];
// // es5
// const createBooking = function (flightNum, numPassengers, price) {
//     // set deafault value by short circuitting
//     numPassengers = numPassengers || 1;
//     price = price || 199;
//     const booking = {
//         flightNum,
//         numPassengers,
//         price,
//     };
//     console.log(booking);
//     bookings.push(booking);
// };
// // es 6
// const createBookingES6 = function (
//     flightNum,
//     numPassengers = 1,
//     price = 199 * numPassengers
// ) {
//     const booking = {
//         flightNum,
//         numPassengers,
//         price,
//     };
//     console.log(booking);
//     bookings.push(booking);
// };
// // createBooking('LH123');
// // createBooking('LH123', 2, 800);
// createBookingES6('LH123');
// createBookingES6('LH123', 2);
// createBookingES6('LH123', 2, 800);
// createBookingES6('LH123', undefined, 1000); // no an default
// 129
// const flight = 'LH234';
// const jonas = {
//     name: 'Jonas Schmedmann',
//     passport: 123123123123,
// };

// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;
//     if (passenger.passport === 123123123123) {
//         alert('checked in');
//     } else {
//         alert('wrong passport!');
//     }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 1000000000000);
// };

// newPassport(jonas);
// console.log(jonas);
// checkIn(flight, jonas);

// 131
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by ${fn.name}`);
};
transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// js uses callback all the time
const high5 = function () {
    console.log('Hight5');
};
document.body.addEventListener('click', high5);
// 132

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');
greet('Jonas')('Steven');

// use with arrow function
const greet2 = greeting => name => {
    console.log(`${greeting} ${name}`);
};

greet2('Hey')('Jonas');
// 133 call and apply method
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
    },
};

lufthansa.book(231, 'Jonas');
lufthansa.book(232, 'Schedmann');
console.log(lufthansa);
const euroWings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;
// does not WORK
// book(23, 'Sarah Williams');

// call method,
// gọi phương thúc của một object trong một object khác (truyền object vào tham số this)
book.call(euroWings, 23, 'Sarah Williams');
console.log(euroWings);

book.call(lufthansa, 239, 'Mary Cooper');

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
// tương đương với apply ở trên với spread operator, trong javascript hiện đại, ưu tiên dùng call
book.call(swiss, ...flightData);
// 134 bind method

const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);

bookEW(111, 'Steven Williams');
bookLH(111, 'Steven Williams');

const bookEW23 = book.bind(euroWings, 23);
bookEW23('Jonas Schedmann');
bookEW23('Martha Cooper');

// with event listenner
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};
// console.log(lufthansa);
// lufthansa.buyPlane();
// nếu chỉ truyền vào lufthansa.buyPlane => this ở đây là button element
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

// dung bind
document
    .querySelector('.buy')
    .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial applicaiton
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// const addVAT = (value) => value + value * .23;  tuong duong cai tren
console.log(addVAT(100));
