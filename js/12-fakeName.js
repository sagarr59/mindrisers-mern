const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"];
/* 
TODO: 
    From the above array create an new array of users with email and password 
    OUTPUT should be like following
    [
        { name: 'Aarav', email: 'aarav@gmail.com', password: 'aarav0' },
        { name: 'Aarya', email: 'aarya@gmail.com', password: 'aarya1' },
        { name: 'Aasha', email: 'aasha@gmail.com', password: 'aasha2' },
        { name: 'Anisha', email: 'anisha@gmail.com', password: 'anisha3' },
    ] 
*/

/* 
sum(1,2)
sum(1,2,3)
sum(10,20,30,40,50)
rest operator */

function createUsers(names) {
  let users = [];
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    let email = name.toLowerCase() + "@gmail.com";
    let password = name.toLowerCase() + i;
    let user = {
      name: name,
      email: email,
      password: password,
    };
    users.push(user);
  }
  return users;
}
let usersArray = createUsers(nepaliNames);
console.log(usersArray);
