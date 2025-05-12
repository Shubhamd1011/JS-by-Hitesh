/*
- The promise in js is an object represnts the eventual completion or failure of an asynchronous operation and its resulting values.
- A Promise in JavaScript is a way to handle tasks that take time, like loading data, without blocking the rest of the code.
- Promises undergoes 3 states 
1. Pending - Means initial state;
2. resolve (fulfilled) - succes operation.
3. reject - operations.

There are 2 parts of the promises 
1.To mske promises.
2.To consume promises.

- Promises reduce the callback hell concept means callback inside callback.
- In promise we give function inside that and they have 2 para resolve and reject.
- After that we do async task in that function.
- For doing async task we use setTimeout in that they take 1 function and 1 time in meliseconds.
- For connecting .then and promise we need to resolve that promise so we use res.

- Sometimes we pass data in resolve for getting that data we pass 1 parameter in and that parameter gets the data
*/


// Part-1 To make the promises.

// const promiseOne = new Promise(function(res,rej){
//   setTimeout(function(){
//     console.log("I am async task that takes 5 sec for consume..");
//     setTimeout(function(){
//           console.log("I am async task that takes 4 sec for consume..");
//           setTimeout(function(){
//                 console.log("I am async task that takes 3 sec for consume..");
//                 setTimeout(function(){
//                       console.log("I am async task that takes 2 sec for consume..");
//                       setTimeout(function(){
//                             console.log("I am async task that takes 1 sec for consume..");
//                                 res();
//                       },1000)
//                 },2000)
//           },3000)
//     },4000)
//   },
//   5000)
// })

// promiseOne.then(function(){
//   console.log("The promise is consumed.....");
// })


// const promiseTwo = new Promise((res,rej)=>{
//   setTimeout(() => {
//     console.log("Hello Im promise who takes 1 min for code completion");
//     res(); 
//   }, 1000);
// })

// promiseTwo.then(()=>{
//   setTimeout(()=>{
//     console.log("Promise consumed"); 
//   },1000)  
// })

// we also create a promise without storing them in a variable.
// new Promise((res,rej)=>{
//   setTimeout(()=>{
//     console.log("The promise takes 1 sec");
//     res();
//   },1000)
// }).then(()=>{
// setTimeout(()=>{
//   console.log("Promise is consumed");
// },1000)
// })

// Sometimes we pass data in resolve for getting that data we pass 1 parameter in and that parameter gets the data.

// const promiseFive = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("This is the promise takes 2 sec");
//     res({userName : "Shubham", eMail : "shubhamdevkamble707@gmail.com"});
//   }, 2000);
// });
// promiseFive.then((user) => {
//   console.log(user);
// })

// When promise return something that valueb we acces by doing chaining on that means it passes that value to anothor one.
const promiseSix = new Promise((res,rej)=>{
  setTimeout(()=>{
    console.log("This is resolve data");
    let err = true
    if (!err){
        res({
      userName : "Shubham",
      eMail : "shubhamdevkamble707"
    })
    }else{
      rej( "ERROR : something went wrong"); 
    }
  
  },2000)
})
promiseSix.then((user)=>{
  console.log(user);
  return user.userName
}).then((userName)=>{
  console.log(userName);
}).catch((err)=>{
  console.log(err);
})


