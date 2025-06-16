// const addTwo = (num1,num2) =>{
//   return num1 + num2
// }
// console.log(addTwo(5,3));

//  +++++++++++++++++++++++++++++++++++++++++++++++ Implesite Return ++++++++++++++++++++++++++++++++++++
// Key Note :- When Ever we use {} on that time we need to put return key key word means it is explesite return , and when ever we use () on that time we dont have to need put return key word bcz it is implesite return 

// const addTwo = (num1,num2) => num1 + num2;
// console.log(addTwo(10,2));

// const addTwo = (num1,num2)=> (num1+num2)
// console.log(addTwo(10,11));


// let str = "shubham";
// console.log(str.split(""));

// const myDate = new Date();
// const currTime = myDate.getFullYear()
// console.log(currTime);


// const arr = ["shubham","ankush","devkamble"];
// for(let i = 0; i<arr.length; i++){
//   console.log(`The items in an array are : ${arr[i]}`);
  
// }

// let arr = [1,2,3,4,5,6,7,8]
// for(const val of arr){
//   console.log(val);
// }

// let greeting = "Good Morning"

// for(let greet of greeting){
//   if(greet === " "){
// continue
//   }
//     console.log(greet);
// }


// let num = [1,2,3,4,5,6,7,8]
// const less = num.filter((val)=>{
//   return val % 2 === 0 })
// console.log(less);

  let arr =[1,2,3,4,5]
  const totalNum = arr.reduce((acc,curr)=>{
    console.log(`The Acc : ${acc} and The Curr : ${curr}`);
    return acc + curr
  },0)
console.log(totalNum);

