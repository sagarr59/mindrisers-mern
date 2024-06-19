function calculateSum(firstInput, secondInput) {
  let result = firstInput + secondInput;
  console.log(`The sum of   ${firstInput} and  ${secondInput}  is ${result}  `);
  console.log(`${firstInput} + ${secondInput} = ${result}`); // string  literal
}
calculateSum(10, 20);
calculateSum(40, 50);

let users = [
  {
    name: "Sagar Raut",
    phone: 9818197279,
  },
  {
    name: "John Thapa",
    phone: 9818111279,
  },
  {
    name: "Sita Karki",
    phone: 9834567897,
  },
];

function usersDetail(index) {
  console.log(`${users[index].name}'s phone is ${users[index].phone}`);
}
usersDetail(0);
usersDetail(1);
usersDetail(2);

function displayUserInfo(user) {
  console.log(`${user.name}'s phone is ${user.phone} `);
}
displayUserInfo(users[0]); // objects,, index
displayUserInfo(users[1]);
displayUserInfo(users[2]);
displayUserInfo({ name: "Ram", phone: "9818197270" });

let genders = ["male", "female", "others"];
/* genders.length; //3
Math.random(); // 0 to 1
Math.floor(); // 1.2 => 1 */
console.log(
  "Random Gender: " + genders[Math.floor(Math.random() * genders.length)]
);

let religions = ["hindu", "buddhist", "christian", "muslim"];
console.log(
  "Random Religion: " + religions[Math.floor(Math.random() * genders.length)]
);
