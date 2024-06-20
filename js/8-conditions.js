console.log("CONDITIONAL STATEMENTS");

let willRain = false;
let hasProb = true;

if (willRain) {
  console.log("Take umbrella");
} else if (hasProb) {
  console.log("Might rain");
} else {
  console.log("No need to take");
}

//ternary 
console.log(
  willRain ? "Take umbrella" : hasProb ? "Might rain" : "No need to take"
);
 