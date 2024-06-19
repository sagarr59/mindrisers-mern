let courses = ["mern", "qa"];
courses[2] = "Python";
console.log(courses);
courses.push("abc");
console.log(courses);
courses.push("abc");

/*OBJECT
let projectorBrand = "viewsonic";
let projectorColor = "white";
let projectorPrice = 40000;

--SYNTAX--
let <object>={
   <key>:<value>,
*/

let projector = {
  brand: " viewsonic",
  color: "white",
  price: 40000,
  height: "15",
  weight: "15",
  units: "cm",
};
console.log(projector);

// let colour=["red","green","blue"]
let colour = [
  { name: "red", hexValue: "#FF000" },
  { name: "green", hexValue: "#RR000" },
  { name: "blue", hexValue: "#TTO88" },
];
console.log(colour);

let course = [
  { name: "Mern", duration: "3 months" },
  { name: "Python", duration: "4 months" },
  { name: "Java", duration: "6 months" },
  { name: "DSA", duration: "2 months" },
];

console.log(course);

let color = {
  name: "Reddd",
  hexValue: "#FF000",
  rgbValue: "rgb(255,0,0)",
};
console.log(color);

color.name = "Red";

console.log(color);

