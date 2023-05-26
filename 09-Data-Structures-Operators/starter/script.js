'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function (obj) {
    console.log(obj);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1} ${ing2} ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...othersIngredient) {
    console.log(mainIngredient);
    console.log(othersIngredient);
  },
};

// //  not use destructring array
// const arr = [2, 3, 4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// console.log(a, b, c);
// // use destrucstring array
// const [x, y, z] = arr;
// console.log(x, y, z);
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // not use temp variable
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // nested destructuring, destructuring inside destructuring
// const nested = [2, 4, [5, 6]];

// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // default value
// // const [p, q, r] = [8, 9];
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// // destructuring object
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// default value
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);
// // same
// let a1 = 111;
// let b1 = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a: a1, b: b1 } = obj);
// console.log(a1, b1);

// nested object
// const {
//   fri: { open: o, close: c1 },
// } = openingHours;
// // console.log(thu, fri, sat);
// console.log(o, c1);

// // pass parameter as object
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Hanoi',
//   starterIndex: 2,
// });
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
// spead operator
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// // use spread operator
// const newArr = [1, 2, ...arr];
// // differences
// // const newArr = [1, 2, arr];

// console.log(newArr);
// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // copy array
// // shallow copy
// const mainMenyCopy = [...restaurant.mainMenu];
// // join 2 arrays
// const menu = [...restaurant.mainMenu, ...mainMenyCopy];
// console.log(menu);

// // iterable: arrays, strings, maps, sets. not objects
// const str = 'Jonas';
// const letters = [...str, ' ', '5.'];
// console.log(letters);
// console.log(...str);
// console.log('j', 'o');
// // we cant do with spread operator
// // console.log(`${...str} Schedtmann`);
// // const ingredients = [
// //   prompt("Let's make pasta! Ingredient 1?"),
// //   prompt("Let's make pasta! Ingredient 2?"),
// //   prompt("Let's make pasta! Ingredient 3?"),
// // ];

// // console.log(ingredients);
// // restaurant.orderPasta(...ingredients);

// // object
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Michael' };
// console.log(newRestaurant);
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Michael';
// console.log(restaurantCopy);
// console.log(restaurant);

//////////////////////////////////
//////////////////////////////////

//1 destructuring
// SPEAD, because on right side of =
// const arr = [1, 2, ...[3, 4]];

// // REST, because on left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];

// console.log(a, b, others);

// const [pizza, , risotto, ...othersFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, othersFood);
// // REST with object
// const { sat, ...weekend } = restaurant.openingHours;
// console.log(sat, weekend);
// //2 functions
// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(5, 3, 7, 2, 1, 5);

// const x = [23, 5, 7];
// add(...x);
// add(x);

// restaurant.orderPizza('mushrooms', 'onion', 'olivers');
// restaurant.orderPizza('mushrooms');

// // short circuiting
// //////////OR////////////
// console.log(3 || 'jonas');
// console.log('' || 'jonas');
// console.log(true || 0);
// console.log(undefined || null);
// 3 jonas true null

// // restaurant.numGuest = 23;
// const guests1 = restaurant.numGuest ? restaurant.numGuest : 0;
// // same
// const guests2 = restaurant.numGuest || 10;
// console.log(guests1);
// console.log(guests2);
// ////////////AND//////////////
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// // same
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// // restaurant.numGuest = 0;
// // nullish: null and undefined (not 0 or '')
// // 0 and '' not falsy value, is truthy value
// // if the first operator is null or undefined, then second operator returned
// const guestsCorrect = restaurant.numGuest ?? 10;
// // restaurant.numGuest = 0 => truthly value, guestsCorrect = 0
// // restaurant.numGuest = null => nullish, second operaton 10 were returned,so guestsCorrect = 10
// console.log(guestsCorrect);

// // logical assignment
// const rest1 = {
//   name: 'Capr',
//   // numGuest: 20,
//   numGuest: 0,
// };
// const rest2 = {
//   name: 'La Pizza',
//   Owner: 'Giovanni Rossi',
// };
// // rest1.numGuest = rest1.numGuest || 0;
// // rest2.numGuest = rest2.numGuest || 10;

// // rest1.numGuest ||= 10;
// // rest2.numGuest ||= 10;
// // because rest1.numGuests = 0, so numGuests assignment 10, điều này
// // không hợp lý, vì mục đich ban đầu là để nó bằng 0
// // giải quyết thế nào

// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;
// console.log(rest1.numGuest, rest2.numGuest);
// // 0
// // 10
// // AND assignment operator
// // rest1.Owner = rest1.Owner && '<Anonymous>';
// // rest2.Owner = rest2.Owner && '<Anonymous>';
// // and logical, assignment value, if it is truthy
// // do vậy 2 lệnh dưới khác kết quả 2 lệnh trên
// rest1.Owner &&= '<Anonymous>';
// rest2.Owner &&= '<Anonymous>';
// console.log(rest1);
// console.log(rest2);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// // for of
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // value
// for (const item of menu) console.log(item);
// // index
// for (const item in menu) console.log(item);

// // key: value
// // 1
// for (const item of menu.entries()) console.log(item);
// // 2
// for (const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`);
// // 3
// for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);
// // menu.entries() // iterator
// console.log(menu.entries());
// // iterate a iterator
// // spread oprerator with iterator
// console.log([...menu.entries()]);

/////////////////////////////////
/////////////////////////////////
//enhanced object literal
// const restaurant2 = {
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   }
// };

// enhanced with property
// normal
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant2 = {
//   openingHours: openingHours,
// };

// enhanced object literal
// const restaurant2 = {
//   openingHours,
// };

// enhanced with method
// const restaurant2 = {
//   orderDelivery(obj) {
//     console.log(obj);
//   },
// };

// third enhancement
// const weekdays = ['mon', 'tue', 'wed'];
// const openingHours = {
//   [weekdays[0]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[1]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[2]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
//   [`day-${2 + 4}`]: {
//     open: 0, // Open 24 hours
//     close: 12 + 12,
//   },
// };
// console.log(openingHours);
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
// // optional chaining
// console.log(restaurant);
// console.log(restaurant.openingHours.thu);
// // value
// // console.log(restaurant.openingHours.mon);
// // undefined
// // console.log(restaurant.openingHours.mon.open);
// // error: TypeError
// // fix
// // để đảm bảo log không bị lỗi, vì có thể thực tế, openHourse.mon không có, khi đó nó không log ra, vì điều kiện không đảm bảo
// restaurant.openingHours &&
//   restaurant.openingHours.mon &&
//   console.log(restaurant.openingHours.mon.open);
// // with optional chaining
// // not null, not undefined
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);
// // return undefined, not raise a error
// // prevent a bug

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// // for (const day of weekdays) {
// //   console.log(day);
// //   const open = restaurant.openingHours[day]?.open;
// //   console.log(`On ${day}, we open at ${open}`);
// // }
// // [] pass variable to iterate property of object
// for (const day of weekdays) {
//   // conso??.log(day);
//   console.log(day);
//   // const open = restaurant.openingHours[day]?.open ?? 'closed';
//   // same effect
//   const open = restaurant.openingHours[day]?.open || 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // with methods
// console.log(restaurant.order?.(0, 1) ?? "Method doesn't exist");
// // order1 doesn't exist
// console.log(restaurant.order1?.(0, 1) ?? "Method doesn't exist");

// // with arrays
// const user = [{ name: 'jonas', email: 'dotruongmanh@gmail' }];
// // const user = []
// console.log(user[0]?.name ?? 'User array empty');

// // iterator object.key - propertise name
// const openingHours = restaurant?.openingHours;
// const propertise = Object.keys(openingHours);
// console.log(propertise);
// console.log(`We are open on ${propertise.length} days`);

// let openStr = `We are open on ${propertise.length} days:`
// for(const day of propertise) {
//   console.log(day);
//   openStr += ` ${day}`;
// }
// console.log(openStr);

// // propertise value
// const values = Object.values(openingHours);
// console.log(values);
// // for same

// // entire object
// const entries = Object.entries(openingHours)
// console.log(entries);

// // destructuring
// for(const [key, {open, close}] of entries) {
//   console.log(`On ${key}, we open at ${open} and close at ${close}`);
// }
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
// // set
// // first all element are unique
// // second: is not irrelevant
// //          no indexes
// // the most use cases is remove duplicate in array
// const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto']);
// console.log(orderSet);

// console.log(new Set('Jonas'));

// // size
// console.log(orderSet.size);

// // check exists
// console.log(orderSet.has('Pizza')); // true
// console.log(orderSet.has('Bread')); // false

// // add new element
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');

// console.log(orderSet);

// // delete element
// orderSet.delete('Risotto');
// console.log(orderSet);

// // there is no way of getting values out of set
// // clear
// // orderSet.clear();
// console.log(orderSet);

// // loop with set
// for (const order of orderSet) console.log(order);

// // example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = new Set(staff);
// console.log(staffUnique);
// // with spread operator
// console.log(...staffUnique);
// console.log([...staffUnique]);
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
// // map
// // map vs object
// // map can have any type: object key always is string
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// console.log(rest);

// // chain next set
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, "we're open :D")
//   .set(false, "we're closed :(");

// console.log(rest.get('name'));
// console.log(rest.get(true));

// const time = 5;
// console.log(rest.get(rest.get('close') > time && time > rest.get('open')));
// // check key exists?
// console.log(rest.has('categories'));
// console.log(rest.has('a'));
// // delete
// // clear
// rest.set([1, 2, 3], 'Test');
// console.log(rest);
// // 2 object [1, 2, 3] not same in heap
// console.log(rest.get([1, 2, 3])); // underfined

// // to fix
// const arr = [1, 2];
// rest.set(arr, 'Test 2');
// console.log(rest.get(arr));

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

// //// map 2: maps iteration
// const question = new Map([
//   ['question', 'what is the best languagaes programing in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again'],
// ]);
// console.log(question);
// // convert object to map

// console.log(Object.entries(restaurant.openingHours));
// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);

// // quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

// // convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
// works with string
// part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);

// index of
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.indexOf('portugal'));

// slice
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

//
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seat
  const s = seat.slice(-1);
  if (s === 'B' || s === 'C') {
    console.log('You got the middle seat');
  } else {
    console.log('You got lucky');
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('23B');
checkMiddleSeat('3E');
// boxing: automatic convert string primitive to string object
// khi goi method voi string primitive, no se tu dong chuyen thanh object
// va sau do lai tra ve primitive tu phuong thuc
console.log(new String('Jonas'));
console.log(typeof new String('Jonas')); // object
console.log(typeof new String('Jonas').slice(1)); // string
// part 2
// lowerCase()
// upperCase();
// trim()
// replace().replace()
// .replaceAll();
// replace with regular expression
// Boolean: include()
//          startWith()
// part 3
// split
// join
// padStart, padEnd
// repeat
