const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const displayShowing = numbers.map(function (mutiply) {
  return mutiply * 2;
});

// console.log(`This mutiply number: ${displayShowing} and this is only number here: ${numbers}`)

const products = [
  {
    name: "Monitor",
    price: 6500,
    quantity: 2,
  },

  {
    name: "PC",
    price: 6568,
    quantity: 53,
  },

  {
    name: "laptop",
    print: 16800,
    quantity: 88,
  },
];

const totalProductsPrice = products.map(function (item) {
  return item.price * item.quantity;
});

console.log(totalProductsPrice);
