//GLOBAL VARIABLE
let name = "ram";
let age = 12;
let number = 100;

function doSomething() {
  let number = 200; // only available inside doSomething function(scope)
  age = 21; // it will update the value
  console.log("SCOPE variable:", number);
  console.log("Age Inside:", age);
}

doSomething();
console.log("Global variable:", number);
console.log("Age Outside:", age);

function double(input) {
  // //block--scope variable
  let output = input * 2;
  console.log("OUTPUT", output);
}
double(100);

function triple(input) {
  let output = input * 3;
  console.log(`Triple of ${input} is ${output}`);
}
triple(22);

function doSomething() {
  let number = 500; // only available inside doSomething function(scope)
  age = 21; // it will update the value
  console.log("SCOPE variable:", number);
  console.log("Age Inside:", age);
}
