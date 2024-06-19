//OBJECT --for detail information

let color = {
  name: "Red",
  hexValue: "FF000",
  //rgbValue: "rgb(255,0,0)", --this can be improved as
  rgbValue: {
    red: 255,
    green: 0,
    blue: 100,
  },
};
console.log(color);

console.log("Before", color.rgbValue.blue);

color.rgbValue.blue = 0;
console.log("After", color.rgbValue.blue);

console.log("Updated", color);

let users = [
  {
    name: "Sagar Raut",
    address: {
      permanent: {
        district: "Arghakkhanchi",
        municipality: "Malarani",
        tole: "Hansapur",
      },
      temporary: {
        district: "Kathmanduuu33",
        municipality: "Chandragiri",
        tole: "Tinthana",
      },
    },
  },
  {
    name: "Ram Thapa",
    address: {
      permanent: {
        district: "Gulmi",
        municipality: "Tamgas",
        tole: "ffff",
      },
      temporary: {
        district: "Kathmandu",
        municipality: "Chandragiri",
        tole: "Tinthana",
      },
    },
  },
];

console.log(users);

console.log("Before", users[0].address.temporary.district);

users[0].address.temporary.district = "Kathmandu";

console.log("After", users[0].address.temporary.district);

users[0].address.temporary.streetname = "Tinthana Gabisa";
console.log(users); //alt+shift+key to copy all text

users[1].address.temporary.streetname = "Tinthana Gabisa";
console.log(users);

