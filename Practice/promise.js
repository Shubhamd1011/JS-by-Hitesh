const promiseOne = new Promise((res,rej)=>{
  setTimeout(()=>{
    console.log("Your data is loading");
    res("succes")
  },2000)
})

promiseOne.then((ab)=>{
  console.log(ab);
  
})