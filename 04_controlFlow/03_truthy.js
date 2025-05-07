/*
- When we assume by default it is true value or false value thats know as truthy and falsy values.
1. Falsy values :- false, 0, -0, Bigint 0n, "", null, undefined,NaN.
2. Truthy valuees :- true, "0", "false", " ", [], {}, function(){}.

 */

const userEmail = "shubhamdevkable707@gmail.com";

if(userEmail){
  console.log("I got user Email"); 
}else{
  console.log("i dont get user Email");
}

// When we have to check the array is empty or not 

const myArr = []

if(myArr.length===0){
  console.log("Array is empty");
}else {
  console.log("Array is not empty");
}

// When we have to check the object is empty or not on that time 

const myObj = {
  name : "Shubham",
  email : "shubhamdevkable707",
  mobile : 9028143707

}

if (Object.keys(myObj).length === 0){
  console.log("This is an empty object");
}else{
  console.log(`This is not an empty object this consists ${Object.values(myObj)} is a value and ${Object.keys(myObj)} it is a key`); 
}