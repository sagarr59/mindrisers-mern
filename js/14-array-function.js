console.log("Array");

/* array functions */
/* let users = ["ram", "hari", "shyam"];
for (let i = 0; i < users.length; i++) {
  console.log(`Index: ${i}, Value: ${users[i]}`);
}

 */

/* let users = [
  { name: "ram", age: 10 },
  { name: "hari", age: 15 },
  { name: "shyam", age: 23 },
  { name: "sita", age: 24 },
  { name: "sagar", age: 25 },
];
for (let i = 0; i < users.length; i++) {
  console.log(` ${users[i].name}'s age is ${users[i].age}`);
}

users.forEach((element) => {
  console.log(` ${element.name}'s age : ${element.age}`);
});
 */

let users = [
  { name: "ram", age: 10 },
  { name: "hari", age: 15 },
  { name: "shyam", age: 23 },
  { name: "sita", age: 24 },
  { name: "sagar", age: 25 },
];

let childrens = [];
let adults = [];

// Separate children and adults using forEach
users.forEach((user) => {
  if (user.age < 18) {
    childrens.push(user);
  } else {
    adults.push(user);
  }
});

// Print children
console.log("Children:");
childrens.forEach((child) =>
  console.log(`Name: ${child.name}, Age: ${child.age}`)
);

// Print adults
console.log("Adults:");
adults.forEach((adult) =>
  console.log(`Name: ${adult.name}, Age: ${adult.age}`)
);

let childs = users.filter((element) => {
  if (element.age <= 18) {
    return true;
  }
});

let olds = users.filter((element) => {
  if (element.age <= 18) {
    return true;
  }
});

console.log(childs);
console.log(olds);
