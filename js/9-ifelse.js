/* let user = {
  name: "Ram",
  paidStatus: true,
  hasScholorship: false,
  gender: "male",
};

if (user.paidStatus && user.hasScholorship) {
  console.log(`${user.name} can give exam`);
} else  {
  console.log(`${user.name} cannot give exam`);
}

if (user.paidStatus) {
  console.log(`${user.name} can give exam`);
} else if (user.hasScholorship) {
  console.log(`${user.name} can give exam`);
} else {
  console.log(`${user.name} cannot give exam`);
} */

/* operator 
arithmetic operator
+ - * /  %  ++ --
modulus operator gives remaining

comparison operator 
< > <= > ==


*/

console.log(10 > 10);
console.log("Sagar " == "Sagar");

/* ++count 
 count++ 
let number=100
double(++100)
let input =100
double(input++)
 */
let user = {
  name: "Ram",
  paidStatus: true,
  hasScholorship: false,
  gender: "male",
};

if (user.gender == "male") {
  console.log(`Mr. ${user.name} can give the exam`);
} else if (user.paidStatus || user.hasScholorship) {
  console.log(`Mr. ${user.name} can give the exam`);
} else {
  console.log(`Mr. ${user.name} cannot give the exam`);
}
