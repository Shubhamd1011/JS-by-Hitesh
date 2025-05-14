/*
Problem 10: Reverse a Number
Description: Write a program to reverse a given number.
 Input: n = 1234
 Output: 432
*/
let n = 1234;
let reverse = Number(n.toString().split("").reverse().join(""))
console.log( reverse);
