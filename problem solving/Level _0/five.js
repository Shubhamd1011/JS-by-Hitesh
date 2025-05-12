/*
Problem 5: Find the Largest of Two Numbers
Description: Write a program that compares two numbers and prints the larger one.
 */

let a = 10;
let b = 110;

if(a>b){
  console.log(`${a} is greater than ${b}`); 
}else if (b > a){
  console.log(`${b} is greater than ${a}`);
}else{
  console.log(`${a} is equal to ${b}`);
}