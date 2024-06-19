/*data types in JS
PRIMITIVE DATATYPES
        string 
        number 
        boolean 
        undefined ---console.log(screenSize); ---JS only
        null
NON-PRIMITIVE DATATYPES --COLLECTIONS
        Array
          
*/

// let screenSize; == undefined
// console.log(screenSize);

//array
//let even=[1,2,3,"four"] ..dont mix datatypes in array
let oddNo = [1, 3, 5, 7, 9];
console.log(oddNo);

let fruits = ["apple", "ornge", "kiwi", "mango"];
console.log(fruits);
console.log(fruits[1]);
fruits[1] = "orange";
console.log(fruits);

let evenNumbers = [2, 3, "six", 8];
console.log(evenNumbers);
evenNumbers[2] = 6;
console.log(evenNumbers);

// let user1="Sagar"
// let user2="Ram"
// let user3="Hari"
// let users=[user1,user2,user3,"gita"]
// console.log(users);

let courses = ["Python", "DSAA", "Mobile programming"];
console.log(courses);
courses[1] = "DSA";
console.log(courses);
courses[3] = " Advance Java";
console.log(courses);



// Array of user objects
let users = [
    { name: "Sagar Raut", address: "Tinthana, KTM" },
    { name: "Ram Thapa", address: "Satungal, KTM" },
    { name: "Hari Karki", address: "Kalimati, KTM" }
];

console.log(users);

// // Use forEach method to print each user's name and address
// users.forEach(function(user) {
//     console.log("User Name: " + user.name + ", Address: " + user.address);
// });