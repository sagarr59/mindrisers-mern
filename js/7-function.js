/* genders.length; //3
Math.random(); // 0 to 1
Math.floor(); // 1.2 => 1 */

let genders = ["male", "female", "others"];

let randomGenderIndex = Math.floor(Math.random() * genders.length);
console.log(genders[randomGenderIndex]);

let religions = ["hindu", "buddhist", "christian", "muslim"];
let randomReligionIndex = Math.floor(Math.random() * religions.length);

console.log(religions[randomReligionIndex]);

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

users[0].religions = religions[Math.floor(Math.random() * religions.length)];
console.log(users);

function assignRandomReligion(index) {
  users[index].religion =
    religions[Math.floor(Math.random() * religions.length)];
}
assignRandomReligion(0);
assignRandomReligion(1);
assignRandomReligion(2);

function assignRandomAge(index) {
  users[index].age = [Math.floor(Math.random() * religions.length)];
}
assignRandomAge(0);
assignRandomAge(1);
assignRandomAge(2);

let ages = [10, 20, 30, 40, 50];
function assignAgeAndReligion(index) {
  users[index].religion =
    religions[Math.floor(Math.random() * religions.length)];
  users[index].age = ages[Math.floor(Math.random() * 100)];
  //getrandomvalue functoin
}

assignAgeAndReligion(0);

console.log(assignAgeAndReligion(0));


