/*
Strings : It is a sequence of character used to reprent the text.

In js we write strings 
1.Single quotes : 'Im a single quote String'
2.double quotes : "Im a double quotes String"
3.Backticks (Template litterls): `Im a template literals string`

let name = "Shubham"
let greeting = 'welcome to world of JavaScript'
let message = `Hey ${name} ${greeting}`
console.log(message)

Theire are some common string methods are as follows :

Method                           Description                                   Example
1.(.length)                Gives us the length of the string                 "Hello".length ------> 5
2.(.toUpperCase())           Converts strings to capital                     "hello".toUpperCase() -----> "HELLO"
3.(.toLowerCare())            Converts strings to small                      "HEllo".toLowerCase() -----> "hello" 
4.(.includes())           Checks if a strings containd something             "Hello".inclides("e") ------> True bcz e is present in str
5.(.indexOf())            finds the position of the character                "Hello".indexOf("e") -------> 1
6.(.slice(start,end))        Extract part of string                           "Shubham".slice(1,4) -------> "hu"
7.(.replace(old,new))      repalce the part of string                         "Hello js".replace("js","shubham")
8.(.trim())                Remove whitespaces                                 "     Hello   ".trim() ------> "Hello"
9.(.charAt(index))        Returns the character at specific index             "Hello".charAt(2)-----> "l"
10.(.__proto__)           For getting the prototype of the variable           name.__proto__
11.(.split())             converts a string into an array                     name.split("")


*/

// ++++++++++++++++++++++++++++++++++++ Examples +++++++++++++++++++++++++++++++++++++++++++++++++

// let name = "Shubham"
// let greeting = 'welcome to world of JavaScript'
// let message = `Hey ${name} ${greeting}`
// console.log(message)

// ++++++++++++++++++++++++++++++++++++ Methods of strings +++++++++++++++++++++++++++++++++++++++++++++++++

let name = "hello shubham    "

console.log(name.__proto__)
// op ----> {} for getting all the prototypes
console.log(name.length);
// op----------> 17 bcz whitespace counts

console.log(name.toUpperCase());
// op---------->    SHUBHAM  

console.log(name.toLowerCase());
// op---------->    shubham 

console.log(name.includes("h"));
/* op ---------> true and when we pass an emoty string the op will we true

The .includes() method checks if a string contains a given substring. An empty string "" is considered to exist at every position in any string (including the start and end), so "Hello".includes("") returns true.

This behavior is defined by the JavaScript specification — searching for an empty substring always returns true.

Imagine the string:

Positions: 0   1   2   3   4   5
Characters: H   e   l   l   o

There are 6 places (notice: between characters too) where an empty string "" could "fit":

Before H (position 0)

Between H and e (position 1)

Between e and l (position 2)

Between l and l (position 3)

Between l and o (position 4)

After o (position 5)

In JavaScript, .includes("") checks:

Is there any spot in the string where an empty substring matches?

Since there are many such spots, it returns true immediately.

*/


console.log(name.indexOf("h"));
// op ------> 4

console.log(name.slice(1,3));
// op -------> hu

console.log(name.replace("Shubham","world"))
// op -----> Hello World

console.log(name.trim())
// op -------> Hello Shubham

console.log(name.charAt(7))
// op --------> h

console.log(name.charAt(9).toUpperCase())
// op ------>B

console.log(name.split(""))
/* op -------> 
[
  'h', 'e', 'l', 'l', 'o',
  ' ', 's', 'h', 'u', 'b',
  'h', 'a', 'm', ' ', ' ',
  ' ', ' '
]
  it gives us 1 letter by letter array
*/

console.log(name.split(" "))
// op ------->  [ 'hello', 'shubham', '', '', '', '' ] with space we get word by word array

console.log(name.split())
// op [ 'hello shubham    ' ] by using thatb we convert to whole string to array















