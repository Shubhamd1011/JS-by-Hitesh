// For getting each char or each item of array we use ittarators like for of for in for each etc.

const number = [1,2,3,4,5,6]
for(const num of number){
  // console.log(`The number in arrays are ${num}`); 
}  // Like that we ittarate the number in array

// For itarate the characters in an array 
const greeting = "Hello world";
for(const greet of greeting){
  if(greet === " ")continue;{
    console.log(greet);  
  } 
}

