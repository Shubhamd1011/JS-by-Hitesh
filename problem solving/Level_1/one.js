// Problem 9: Factorial of a Number
// Description: Write a program to find the factorial of a number n.

let n = 5;
let fact = 1;

for(let i = 1; i <=n; i++){
  fact = fact * i;
};
console.log(`Factorial of ${n} is ${fact}`);

