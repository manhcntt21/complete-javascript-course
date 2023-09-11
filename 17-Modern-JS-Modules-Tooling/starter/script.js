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
