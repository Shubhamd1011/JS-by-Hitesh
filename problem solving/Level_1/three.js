/*
Task: Reverse a String and Capitalize the First Letter
Description:
Write a program that takes a string, reverses it, and then capitalizes the first letter of the reversed string.
For example:

Input: "hello"

Output: "Olleh"
 */

let str = "hello";
let reverse = str.split("").reverse().join("");
let capitalizes = reverse.charAt(0).toUpperCase() + reverse.slice(1)
console.log(capitalizes);

