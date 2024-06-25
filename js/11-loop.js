let users = ["Ram", "Shyam", "Hari"];
/* in index 0, Ram 
in index 1 , Shyam*/

for (let index = 0; index < users.length; index++) {
  console.log(`Index ${index}: ${users[index]}`);
}

for (let number = 1; number <= 10; number++) {
  console.log(number);
}

let person = [
  {
    name: "Ram",
    age: 20,
    gender: "male",
  },
  {
    name: "Shyam",
    age: 24,
    gender: "male",
  },
  {
    name: "Sagar",
    age: 21,
    gender: "male",
  },
  {
    name: "Sita",
    age: 25,
    gender: "female",
  },
];

/*Mr.Ram's age is 20
Mrs.Sita's age is 25 */
// --ifelse--
for (let index = 0; index < person.length; index++) {
  let prefix;
  if (person[index].gender == "male") {
    prefix = "Mr.";
  } else {
    prefix = "Mrs.";
  }
  console.log(`${prefix} ${person[index].name}'s age is ${person[index].age}`);
}
console.log("Now with ternary operator");
//   ternary
for (let index = 0; index < person.length; index++) {
  let prefix = person[index].gender == "male" ? "Mr." : "Mrs.";
  console.log(`${prefix}${person[index].name}'s age is ${person[index].age}`);
}

/* 
findMultiplication(){
    number:5;
    startFrom:10;
    endAt:5;
}

 output
5*1=5
5*2=10  */
/* 
function multiply(number, start, end) {
  for (let i = start; i <= end; i++) {
    let result = number * i;
    console.log(`${number} * ${i} = ${result}`);
  }
}

multiply(5, 1, 10); */

let findMultiplication = {
  number: 5,
  startFrom: 1,
  endAt: 10,
};
let { number, startFrom, endAt } = findMultiplication; //obj destructuring

for (let i = startFrom; i <= endAt; i++) {
  let result = number * i;
  console.log(`${number} x ${i} = ${result}`);
}


