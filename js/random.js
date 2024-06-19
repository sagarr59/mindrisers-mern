let users = [
  { name: "Sagar Raut", phone: 9818197279 },
  { name: "John Thapa", phone: 9818111279 },
  { name: "Sita Karki", phone: 9834567897 },
];

let religions = ["hindu", "buddhist", "christian", "muslim"];
let ages = [10, 20, 30, 40, 50];

function getRandomValue(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

getRandomValue(genders);
getRandomValue(religions);
getRandomValue(ages);

function assignRandomValue(index) {
  users[index].religion = getRandomValue(religions);
  users[index].age = getRandomValue(ages);
  users[index].gender = getRandomValue(genders);
}

assignRandomValue(0);
assignRandomValue(1);
assignRandomValue(2);
