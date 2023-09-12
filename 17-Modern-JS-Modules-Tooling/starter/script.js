// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// // console.log(shippingCost); // error
// addToCart('bread', 5);
// // console.log(totalPrice);
// console.log(price);
// // console.log(totalQuantity);
// console.log(tq);

// // import everything
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);
// console.log(ShoppingCart.tq);

// gan tren cho default export
import add, { cart } from './shoppingCart.js';
console.log('Importing module');

add('pizza', 2);
add('pizza', 5);
add('pizza', 4);

console.log(cart);

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
// console.log('Start fetching');
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data[0]);
// console.log('Something');

// import './shoppingCart.js';
// const getLastPost = async function () {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await res.json();
//   console.log(data);
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);
// // not very clean
// // lastPost.then(last => console.log(last));

// // user top level await
// const lastPost2 = await getLastPost();
// console.log(lastPost2);
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
// dung iife de no chi thuc thi mot lan, neu no thuc thi nhieu lan, cac gia tri se bi reset
// duoi day dang ap dung closure
// cac function trong van truy cap dc gia tri cua ham ben ngoai, mac du no da thuc thi xong
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;
//   const addToCart = function (product, quantity) {
//     cart.push(product);
//     console.log(
//       `${quantity} ${product} added to cart (shhipping cost is ${shippingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     cart.push(product);
//     console.log(`${quantity} ${product} ordered from cart`);
//   };

//   return { addToCart, cart, totalPrice, totalQuantity };
// })();

// // closure, giup addtocart van truy cap dc gia tri cua card
// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost); // underfine
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
// doan nay khong work on brower nhung work on nodejs
// // export
// export.addToCart = function (product, quantity) {
//     cart.push(product);
//     console.log(
//       `${quantity} ${product} added to cart (shhipping cost is ${shippingCost})`
//     );
//   };
// // import
// const { addToCart } = require('./shoppingCart.js')
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es';
// import cloneDeep from 'lodash';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'bread', quantity: 5 },
    { product: 'bread', quantity: 5 },
  ],
  user: { loggedIn: true },
};

// cope object
const stateClone = Object.assign({}, state);
const stateDeeoClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);

// lodash copy
console.log(stateDeeoClone);

// // ngan can reload page moi khi thay doi
