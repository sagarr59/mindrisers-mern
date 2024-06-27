let dashboard = {
  total: 100,
  expired: 24,
  out_of_stock: 20,
};

/*

TODO: CONVERT THE  VALUES OF ABOVE OBJECT TO NEPALI 

__________________________________________________________________________________________________


let nepali_digits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];


You may need these concepts
    number.toString()
    string.trim()
    string.split()
    loop
    function


__________________________________________________________________________________________________

OUTPUT SHOULD BE AS BELOW

    dashboard = {
        total: "१००"
        expired: "२४",
        out_of_stock: "२०"
    }

    
*/
let nepali_digits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

function convertEngDigitToNepaliDigit(input) {
  //444
  let output = "";
  input = input.toString(); //"444"
  let inputArray = input.split(""); //["4","4","4"]

  for (let index = 0; index < inputArray.length; index++) {
    let number = inputArray[index];
    output += nepali_digits[number];
  }

  return output;
}

console.log(convertEngDigitToNepaliDigit(333));

dashboard = {
  total: convertEngDigitToNepaliDigit(100),
  expired: convertEngDigitToNepaliDigit(55),
  out_of_stock: convertEngDigitToNepaliDigit(29),
};

console.log("dashboard = ", dashboard);
