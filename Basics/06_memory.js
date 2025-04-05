/* Theire are two type of memory allocation
1.Stack memory (Primitive data types)
2.Heap memoru (Non premitive)

1.Stack memory :
- When we use primitive data types it undergoes stack memory and it always gives us the copy of that original veriable.

let name = "Shubham"
let fullTwo = name
fullTwo = "ShubhamD"
console.log(fullTwo);
console.log(name);

This is the example of stack memory here we asign name into fullTwo and it creates the copy of orginal one and put original one as it is
thats why when we update the value of fullTwo it gives us another value and the value of name as it is.

2.Heap memory :
- When we use non primitve data types it undergoes heap memory and it always provide us reference of the original one.

imp:- 
JavaScript engines (like V8) have automatic garbage collectors.

When something is no longer "reachable" (no variable is pointing to it), the memory gets freed automatically.


*/


let name = "Shubham"
let fullTwo = name
fullTwo = "ShubhamD"
console.log(fullTwo);
console.log(name);

let objOne = {
  fName : "Shubham",
  lName : "Devkamble",
  email :"shubhamdevkamble7@gmail.com"
}
let objTwo = objOne
objTwo.email = "shubhamdevkamble707@gmail.com"
console.log(objOne)



let user = { name: "Alice" };
user = null; // Now, { name: "Alice" } is garbage collected


