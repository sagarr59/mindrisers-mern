const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"];

/* 
sum(1,2)
sum(1,2,3)
sum(10,20,30,40,50)
rest operator */

let users = [];
//users[0] = { name: aarav };

for (let index = 0; index < nepaliNames.length; index++) {
  let name = nepaliNames[index];
  users[index] = {
    name: name,
    email: `${name}@gmail.com`,
    password: `${name.toLowerCase()}${index}}`,
  };
}

console.log(users);
