// function mul(objects can also be passed)

// let numbers=[1,2,3,4,5,6]
// let doublesNumbers=[]

/* output
    let doubleNumbers=[2,4,6,7,10,12]    
*/

/* let numbers = [1, 2, 3, 4, 5, 6];
let doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

console.log(`doubledNumbers:${doubledNumbers}`);
 */
let numbers = [1, 2, 3, 4, 5, 6];
let doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  doubledNumbers[i] = numbers[i] * 2;
}

console.log(`doubledNumbers = [${doubledNumbers}]`);
