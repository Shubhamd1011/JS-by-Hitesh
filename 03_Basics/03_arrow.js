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

// ********************************************************* Arrow Functions ************************************************************

// The basic syntax of arrow function is () => {}, And we also store it into a varible like

const arrow = ()=>{
  console.log("Hello im Arrow function"); 
}
arrow(); // Like that we execute the arrow function
