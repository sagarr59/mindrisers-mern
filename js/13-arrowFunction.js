/* Arrow Function */
function doubleOld(input) {
  return input * 2;
}

console.log(doubleOld(300));

//function lai as a variable treat
const double = (input) => {
  return input * 2;
};
console.log(double(500));

// Arrow function for subtraction
const subtract = (a, b) => {
  return a - b;
};

console.log(subtract(10, 5));
console.log(subtract(20, 7));

// website ma popUp-- timer
//asynchronous,timer,callback
//setTimeout()

//callBack function-- a fn passed as an argument to another function
const showPopup = () => {
  console.log("show PopUp");
};
// setTimeout(showPopup(), 3000); //wrong
setTimeout(showPopup, 3000);

//using arrow function
setTimeout(() => {
  console.log("Do Something");
}, 2000);

console.log("After Popup");
