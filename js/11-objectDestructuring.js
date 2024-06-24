let persons = [
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

for (let index = 0; index < persons.length; index++) {
  let { name, age, gender } = persons[index]; // object destructuring
  console.log(`${gender === "male" ? "Mr." : "Mrs."} ${name}'s age is ${age}`);
}
