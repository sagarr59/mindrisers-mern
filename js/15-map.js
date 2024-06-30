let users = [
  { name: "ram", age: 10 },
  { name: "hari", age: 15 },
  { name: "shyam", age: 23 },
  { name: "sita", age: 24 },
  { name: "sagar", age: 25 },
];

let adultsOld = users.filter((element) => {
  if (element.age > 18) {
    return true;
  }
});

/* let adults = users.filter((element) => {
  return element.age > 18 ? true : false;
});
 */

// It can be written in 1 line when only 1 parameter
let adults = users.filter((element) => (element.age > 18 ? true : false));

console.log(adults);

//1 line arrow function

function doubleOld(input) {
  return input * 2;
}

/* 

const double = (input) => {
  return input * 2;
};
 */
//if only 1 parameter ...()is not needed //single line no bracket
const double = (input) => input * 2;

console.log(double(33));

const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"];
const fakeUsers = nepaliNames.map((e1, index) => {
  return {
    name: e1,
    email: `${e1.toLowerCase()}@gmail.com`,
    password: e1 + index,
  };
});
console.log(fakeUsers);

const uppercasedNames = nepaliNames.map((name) => name.toUpperCase());

console.log(uppercasedNames);
