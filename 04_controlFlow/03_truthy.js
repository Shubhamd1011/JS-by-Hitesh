/*
- When we assume by default it is true value or false value thats know as truthy and falsy values.
1. Falsy values :- false, 0, -0, Bigint 0n, "", null, undefined,NaN.
2. Truthy valuees :- true, "0", "false", " ", [], {}, function(){}.

 */

const userEmail = "shubhamdevkable707@gmail.com";

if(userEmail){
  console.log("I got user Email"); 
}else{
  console.log("i dont get user Email");
}