/* 
IIFE stands for Immediatly Invoked Function Expression (IIFE).
- The use of iife is that when we write a function and we want to execute immediatly.
- Suppose we write a database code and when our app is start then immediatly our function excute and our database connections starys for that purpose we use.
- To avoid the polutions happens by global scope.
*/

(function iife(){
  console.log(`DB connected`); 
}) () // This is syntax iife