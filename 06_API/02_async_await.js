// It also use for consume the promises.
// It wait for finishing the task if task does not completed it gives error at same time.
// And it writen in try and catch block.
// In that we await for the promise and this promise takes some time thats we always await and it consider as a response.
// Promise is object thats why we can not consume it like that await promiOne();
// The problem in async await is it cant handle the errors directly.
// On that time we wrap all the code in try catch block.
// And when we get data from fetcch response.json() also takes time on that time we use awaitt
let promiseOne = new Promise((res,rej)=>{
  console.log("This is the promise data for async await");

  setTimeout(()=>{
    let err = false;
    if (!err){
      res({
        useName : "ShubhamD707",
        eMail : "shubhamdevkamble707@gmail.com"
      })
    }else {
      rej ("ERROR : something went wrong")
    }
  },2000) 
})

async function consumePromiseOne() {
  try{
     let response = await promiseOne;   // All the resolve code undergoes in the try block
  console.log(response); 
  }catch(err){
    console.log(err);
  }
}

consumePromiseOne()

// async function fetData(){
//   try{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json()
//   console.log(data);
//   }catch(err){
//     console.log(err); 
//   }
// }
// fetData()

// Same thing by using .then

fetch ("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log(data);
}).catch((err)=>{
  console.log(err);
})