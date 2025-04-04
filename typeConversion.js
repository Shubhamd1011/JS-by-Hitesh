let num = 20;
// op ---->20

num = "20"
// -------> 20 and Type is Number

num = "20aa"
// op -----> NaN

num = "aa"
// op ------> NaN

num = true
// op ---> 1 and for false 0
let convoNum = Number(num)
// console.log(convoNum);




// Now we check in case of boolean 

let isLoggedIn = true;
// op -------> true

isLoggedIn =""
// op ------> false

isLoggedIn = "esds"
// op ------> true
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);
