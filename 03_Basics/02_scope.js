/*
- The scopes are 3 types 
1. Global scope
2. Function scope
3. Block scope

1.Global scope :-
- The variables are declared out side the block or function is a global scope.
- It is accesible anywhere in the program.

2.function scope :-
- The varibles are declared inside the functions are only accesibles.

3.Block scope :-
- We declare the variable by using let const and var.
- It is only works when we declare the variables by using let or var.
  1. let = 
  -it is block scope varible and used inside the block 
  - We can not reasign the value but we update it.

  2. const =
  - It is block scope
  - We can not reassign or update the value.

  3. var = 
  - It is a globla scope value, we used it any where in program suppose outside the function inside tje function or anywhere in the program.
  - we can reassign and also update the value.

* Lexical scope :- 
- It is a varables scope is determined where it is located in the source code.
- Nested function have acces to variables declared in their outer function.  

     


 */

let globalVar = "Hello im Shubham"

function global (){
  console.log(globalVar);
}
global()
// It is accesible everywhere


function functionScope(){
  let inside = "Im only declared inside the functions"
  console.log(inside); 
}
functionScope()
// console.log(inside) -----> it is not accesible.

if(true){
  let block = "Im block scope element"
  console.log(block);
}
// console.log(block); -----> it not working outside the block scope.

if (true){
  var notBlock = "Im global scope bcz var is used"
  console.log(notBlock);
}
// console.log(notBlock);   -----> it also works.

xyx();
function xyx (){
console.log("im global");
}

// ************************************************************* Lexical scope Hoisting and closers ******************************************

function outer (){
   let count = 2
   return function inner (){
    count ++
    console.log(count); 
   }
}

const counter = outer()
console.log(counter);
counter();
counter();
counter();
counter();
counter();


function one (){
  const username = "Shubham"
  function two (){
    const website = "Instagram"
    console.log(`The ${username} is using ${website}`)  
  }
  two()
}
one()
//  In th case of closer childs acces the variable from parent but parent cant acces from child. (Note :- The ice cream exaple childs ask for ice cream to parents but parent cant ask for ice creame if sometime they ask it looks like very weard)

