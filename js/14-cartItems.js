let users = [
  { id: 1, name: "Ram" },
  { id: 2, name: "sita" },
  { id: 3, name: "hari" },
];

let products = [
  { id: 1, name: "keyboard", rate: 100 },
  { id: 2, name: "mouse", rate: 200 },
  { id: 3, name: "watch", rate: 300 },
];

let cartItems = [
  {
    user_id: 1,
    product_id: 1,
    quantity: 2,
  },
  {
    user_id: 2,
    product_id: 1,
    quantity: 2,
  },
  {
    user_id: 2,
    product_id: 2,
    quantity: 2,
  },
  {
    user_id: 3,
    product_id: 1,
    quantity: 2,
  },
  {
    user_id: 3,
    product_id: 2,
    quantity: 2,
  },
  {
    user_id: 3,
    product_id: 3,
    quantity: 2,
  },
];

/* code here to find the total amount spent by each user */

/*
    ram has bought itesm worth Rs.200
    sita has bought itesm worth Rs.600
    hari has bought itesm worth Rs.1200
*/
let totalSpent = {};

cartItems.forEach((cartItem) => {
  const product = products.find((p) => p.id === cartItem.product_id);
  if (!product) return;

  const cost = product.rate * cartItem.quantity;
  totalSpent[cartItem.user_id] = (totalSpent[cartItem.user_id] || 0) + cost;
});

users.forEach((user) => {
  console.log(
    `${user.name} has bought items worth Rs.${totalSpent[user.id] || 0}`
  );
});
