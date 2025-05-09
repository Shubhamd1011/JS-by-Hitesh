/* 
When we store that forEach statement in the variable it return us undefined.
- It means foreach does not return a value.

When we give any condition on that time by using .filter we acces those. It means filter return only true values.
*/


let number = [1,2,3,4,5,6]

// const value = number.forEach((num)=>{
//    console.log(num);
//   return num;
// })
// console.log(value);  // op -----> undefined.


const less = number.filter( (num)=>{
  return num > 4  // it returns that true values
})
console.log(less); // op ----> [5,6]

