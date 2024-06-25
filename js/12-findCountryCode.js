let countries = [
  {
    code: "mm",
    name: "Myanmar",
    path: "burma",
  },
  {
    code: "na",
    name: "Namibia",
    path: "namibia",
  },
  {
    code: "nr",
    name: "Nauru",
    path: "nauru",
  },
  {
    code: "np",
    name: "Nepal",
    path: "nepal",
  },
  {
    code: "nl",
    name: "Netherlands",
    path: "netherlands",
  },
  {
    code: "an",
    name: "Netherlands Antilles",
    path: "netherlandsantilles",
  },
];
/* 
    find the cods of a specific country 
    TODO: 
    create a function findCountryCode 
    - if i pass arguement "Nepal" to the function it should return me np
    - if i pass arguement "zimbabwe" to the function it should return me zw
*/

function findCountryCode(countryName) {
  /* 
  check for first country 
     if name matched 
         return success 
    else check for another
    */
  for (let index = 0; index < countries.length; index++) {
    console.log({ index });
    let countryObj = countries[index];

    if (countryObj.name == countryName) {
      return countryObj.code;
    }
  }
  return "Code not found";
}

// let nepalCode = findCountryCode("Nepal");
// let nepalCode = findCountryCode("nepal");
// let nepalCode = findCountryCode("  nepal  ");
// let nepalCode = findCountryCode("NEPAL");

/* string functions
   .toLowerCase()
   .toTwin()     
*/