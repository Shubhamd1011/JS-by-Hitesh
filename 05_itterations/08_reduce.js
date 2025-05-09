// In reduce 1 accumlator is present 1 current value and and 1 initial value is present. and accumalot means the initial value that we gives 
// Accumalator only 1 times ask the intial value after that the addition is consider as intial value;

const arr = [1,2,3,4,5]
const newArr = arr.reduce((acc,cur)=>{
  console.log(`The acc is ${acc} and curval is ${cur}`);
  return acc + cur;
},0)
console.log(newArr);

const courses = [
  { name: "Full Stack Web Development", price: 4999 },
  { name: "Data Structures & Algorithms", price: 3499 },
  { name: "React Frontend Mastery", price: 2999 },
  { name: "Python for Beginners", price: 1999 }
];

const total = courses.reduce((acc,items)=> acc + items.price,0)
console.log(`total price of your courses is ${total}`);

