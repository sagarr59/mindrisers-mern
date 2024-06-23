/* console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4); 
Use loop */

/* 
  loop
    -for
    -while
    -do while

 */

/*     ---INFINITE LOOP---
for (let startFrom = 0; startFrom < 10; ) {
  console.log("Start From", startFrom);
}
 */

for (let startFrom = 0; startFrom < 10; startFrom++) {
  console.log("Start From", startFrom);
}
console.log("End of loop");

let users = ["Ram", "Shyam", "Hari"];
/* in index 0, Ram 
in index 1 , Shyam*/

for (let i = 0; i < users.length; i++) {
  console.log(`Index ${i}: ${users[i]}`);
}
