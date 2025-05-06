/*
- This keyword =
 - This keyword tells us the current context.
  It means when we create an object and pass a function and the username always changes on that we use this keyword which tells us the context of the current object.
*/

// const user = {
//   userName : "Shubham",
//   eMai : "shubhamdevkamble707@gmail.com",
//   welcomeMesaage : function (){
//     console.log(`Welcome the This keyword Mr ${this.userName}`)
//   }
//   // Here the current context is {} the keys and values inside that cyrly brases.
// }


const user = {
  name : "Shubham",
  price : 999,
  eMail : "shubhamdevkable707@gmail.com",
  welcomeMessage : function () {
    console.log(`${this.name} how are you welcomeback!!`)
  }
}
console.log(user.welcomeMessage());
user.name = "Sam"
user.welcomeMessage();

// We cant use the this keyword into a functions.
function notThis (){
  let userName = "Shubham"
  console.log(this.userName)
}
notThis()
// OP : Will comes undefined.

// ********************************************************* Arrow Functions ************************************************************

// The basic syntax of arrow function is () => {}, And we also store it into a varible like

const arrow = ()=>{
  console.log("Hello im Arrow function"); 
}
arrow(); // Like that we execute the arrow function

// const addTwo = (num1, num2) =>{
//   return num1 + num2
// }
// console.log(addTwo(1,3));

// When we have only 1 line function on that time we use implesite return which means we dont have to need write return keyword it automatically assume that it was the return ketword and we dont have to need use this {} for example,

const addTwo = (num1, num2) =>  num1 + num2; // This is the example of implesite return.
console.log(addTwo(2,3)); 
// Key Note : when we wrap the function {} on that time we need to add return keyword but when we use () on that time we dont have to need the return it means it is a implesite return.

const addThree = (num1, num2, num3) => (num1 + num2 + num3)
console.log(addThree(10,11,12)); 

// When we have to add objects in the arrow function on that time.
// In ({in that we write the objects})
const getUser = () => ({userName : "Shubham"})
console.log(getUser());


// Explesite return means our regular return function.

