// Exporting module
console.log('Exporting module');

const shippingCost = 10;
export const cart = [];

// export by name
export const addToCart = function (product, quantity) {
  cart.push(product);
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push(product);
  console.log(`${quantity} ${product} added to cart`);
}
