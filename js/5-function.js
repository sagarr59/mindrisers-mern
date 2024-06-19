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

console.log(users[0].name + "'s phone is ", users[0].phone);
console.log(users[1].name + "'s phone is ", users[1].phone);
console.log(users[2].name + "'s phone is ", users[2].phone);

/* 
 template literal--- string literal
1, 2;
4, 5;
10, 20;
10, 50; // multi line comment-- ALT + SHIFT +A

let numbers = [1, 2, 4, 5, 10, 20, 40, 50];
console.log("1 + 2 = " + (numbers[0] + numbers[1]));

console.log(" 1 + 2 = 3");
console.log(" 4 + 5 = 9");
console.log(" 10 + 20 = 30");
console.log(" 10 + 50 = 60");
 */

// string concatenation
let fullName = "SAGAR" + " " + "RAUT";
console.log("FULLNAME = " + fullName);

let firstNumber = 3;
let secondNumber = 5;
let result = firstNumber + secondNumber;
console.log(firstNumber + " + " + secondNumber + " = " + result);
console.log(
  "The sum of " + firstNumber + " and " + secondNumber + " is " + result
);

let thirdNumber = 5;
let fourthNumber = 14;
let sum = thirdNumber + fourthNumber;
console.log(thirdNumber + " + " + fourthNumber + " = " + sum);
console.log(
  "The sum of " + thirdNumber + " and " + fourthNumber + " is " + sum
);

//multiple KAAM --same pattern MA repeat---use function

/* console.log("The double of 2 is 4");
console.log("The double of 3 is 6");
console.log("The double of 9 is 18");
console.log("The double of 6 is 12);
 */
function calculateDouble(input) {
  console.log("Input", input);
  console.log(input, "x 2 =", input * 2);
}
calculateDouble(2);
calculateDouble(3);
calculateDouble(9);
calculateDouble(6);

//Sum function
function calculateSum(firstInput, secondInput) {
  let result = firstInput + secondInput;
  console.log(
    "The sum of " + firstInput + " and " + secondInput + " is " + result
  );
}
calculateSum(1, 2);
calculateSum(4, 5);
calculateSum(20, 30);

//research - template literal ... return in function

function calculateSum(firstInput, secondInput) {
  let result = firstInput + secondInput;
  console.log(`The sum of   ${firstInput} and  ${secondInput}  is ${result}  `);
}
calculateSum(10, 20);
calculateSum(40, 50);
