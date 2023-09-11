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
// import add, { cart } from './shoppingCart.js';
// console.log('Importing module');

// add('pizza', 2);
// add('pizza', 5);
// add('pizza', 4);

// console.log(cart);

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
