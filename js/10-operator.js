// Logival OR and AND --- || and &&

let user = {
  name: "Sita",
  paidStatus: true,
  hasScholorship: false,
  hasMetAttendence: true,
  gender: "female",
  email: "sita@gmail.com",
  password: "password",
};

let genderPrefix = "Mr.";
if (user.gender == "female") {
  genderPrefix = "Mrs.";
} else if (user.gender == "others") {
  genderPrefix = "Mr./Mrs.";
}

function login(email, password) {
  if (email == user.email && password == user.password) {
    console.log(`${user.name} can login.`);
  } else {
    console.log(`${user.name} cannot login.`);
  }
}
login("sita@gmail.com", "password");

if ((user.paidStatus || user.hasScholarship) && user.hasMetAttendence) {
  console.log(`${genderPrefix}${user.name} can give exam.`);
} else {
  console.log(`${genderPrefix}${user.name} can't give exam.`);
}
