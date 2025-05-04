/*
- Functions is nothing but the code of bunch that we created.
- By using function prevent repeation of the code.

- The value is present inside function defination is called parameter like 
function sumTwoNum(num1,num2){
log(num1+num2)
}
sunTwoNum(1,3)
Here num1 and num2 are the parameters and The value is present in the refernce or callback is called argument.

-If we want to store the result of the value in variable on that time we need return for storing other wise op will be undefined.

- Look the result function in that we return the value inside result veriable and after that we print the value of that number.

Keynote : After return function does not execute any code.

- If we cant pass any value on that time op will be undefined.
*/

function sayMyName (){
  console.log("S");
  console.log("h");
  console.log("u");
  console.log("b");
  console.log("h");
  console.log("a");
  console.log("m"); 
}

// sayMyName();

function sumTwoNum (num1,num2){
  console.log(num1+num2)
}
// sumTwoNum(1,3)

// op of 1, 3 is 4
// of 1 + "a" ---> 1a
// op 1 + "1" ----> 11
// op 1 + null ----> 1
// op 1 + undefined ---> NaN

function resultReturn(num1,num2){
  // let result = num1 + num2;
  return num1 + num2;
}
const resultOf = resultReturn(10,1)
console.log("Result:",resultOf);

// Now we create a is loged in function in that we check the user is logged in or not and if someone is not any value inside that on that time 1 value we take and it always present in that.

function isLoggedIn(username = "Shubham"){
  if (!username){
    console.log("Please Enter a Username...");
    return; 
  }
  return `${username} is just logged in`
}
// IMP : Here we have to print that function not just called it.
console.log(isLoggedIn("sam"));

// username === undefined instead using that we use !username 

// Some time we have only 1 para and the values come more on that time we use rest operator (...num), Is same like a spread operator but we identify it by their use in the case. for example

function cardPrice(...card1){
  return card1
}
console.log(cardPrice(200,400,600,800));
// Op will comes [200, 400, 600, 800] it comes in the array.

// some time val1 and val2 is present and we use rest operator on that time
function cardPrice(val1,val2,...card1){
  return card1
}
console.log(cardPrice(200,400,600,800));
// op will comes 600 and 800 bcz val1 and val2 is present and it returns only card1 prize.


// When we have to add object in function on that time 
const user ={
  id : 1,
  username : "Shubham",
  eMail : "shubhamdevkamble707@gmail.com"
}

function getUser (anyObj){
  return `The id of user is ${anyObj.id}, the name of the user is ${anyObj.username} and eMail is ${anyObj.eMail}`
}
console.log(getUser(user));
// Like that we add values from objet to functions

// Now how we get values from array 
const arr = [10,29,49,384,384]

function getArr(anyArr){
  return `${anyArr[2]},${anyArr[3]}`
}
console.log(getArr(arr))
// Like that we also get the values from it.



