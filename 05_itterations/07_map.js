// By using map we get an new array and it always return the value.

const myArr = [1,2,3,4,5,6,7,8,9,10];
const newArr = myArr.map( (num)=> num * 10)
console.log(newArr);

// We also do the chaining of the map filter
const chaining = 
myArr.map((num)=> num *10)
.map((num)=>num+1)
.filter((num)=> num >=40)

console.log(chaining); 
