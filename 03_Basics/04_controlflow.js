/*
- When the code is runs on conditional basis means if we give some if else condition after that the code runs that is called controlflow.
ex. when we login the other code will run when we log out the other will run this is called control flow.

1. If statement.
 */

// The syntax of if
// if (condition){
//   // The code..
// }
if(true){
  // code will execute..
}

if(false){
  // code will not execute..
}

const temp = 49;
 if (temp <= 50){
  console.log(`The is ${temp} means less than less 50`) ;
 }else {
  console.log(`The temp is ${temp} means greater 50`);
 }


//  We have to see the scope error how it comes.
 const score = 200;
 if (score> 100){
  const power = "Fly"
  console.log(`THE POWER OF USER IS : ${power}`); // This code runs bcz it present inside the {} scope.
 }

// console.log(`THE POWER OF USER IS : ${power}`); //But this not runs it gets an error of power is not defined bcz const is a block scope veriable.

