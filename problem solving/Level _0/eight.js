/*
Problem 8: Print the Multiplication Table of a Number
Description: Write a program to print the multiplication table of a given number n.
 */
let n = 5;
let table;
for (let i = 1; i <=10; i++){
  let table = n * i;
  console.log(`The of ${n} is ${n} x ${i} is = ${table}`);
}