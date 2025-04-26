/*
- It is a collection of Itoms.
- The arrays in Js are Resizeable.
-Js Arrays copy-operations create Shallow copy not a deep copy.
--Shallow copy :- When we do change in array it also changes in original array to like heap memory it means shallow copy of an object is the copy whose shares the referance.

-- deep copy :- Who do not share the same reference property when we copy.

Prototype                           example                               description
Push                             myArr.push(6)                   It Add the value in the Array from last
pop                              myArr.pop()                     It deletes the value in the Array from last
ubshift                          myArr,unshift(9)                It Add the value in the Array from start.
shift                            myArr.shit()                    It deletes the value in the Array from start.
includes                         myArr,includes(8)               It checks this number is present or not and give the value in boolean.
indexOf                          myArr.indexOf(2)                It gives us the index value of the given number.
join                             myArr.join                      It coverts array into string.
concat                           newArr.concat(myarr)            It concat the array.
spread operator                  [...arr1, ...arr2]              It merge array into array.
flat                            anotherArr.flat(infinite)        If we have array inside array it flat the array.
isArray                        log(Array.isArray(strArr))       It checks the given value is array or not and return boolean value.
from                           log(Array.from("Shubham"))       It convert any type or string into a array.
of                             log(Array.of(score1, score2))    It takes multiple veriables and make 1 array.

*/


let arr = [1, 2, 3, 4, 5]

let strArr = ["Ironman","Thor","Hulk"]

let newArr = new Array(1,2,3,4,5)

let myArr = [1,2,3,4,5]
myArr.push(6)    
myArr.push(7,8)
// add the value from last

myArr.pop()
// Delete the value from last

myArr.unshift(100)
// add the value from start

myArr.shift()
// Delete the value from start

myArr.includes(10)
// checks this no is present or not and gives the boolean value

myArr.indexOf(2);
// Checks the index value of the given number.

myArr.join()
// It converts a array into string.

let sliced = myArr.slice(1,3)
// slice does not change the original array but they return a new array with starting index and last value does not contain
// op ----> [2, 3 ]

let spliced = myArr.splice(1,3)
// splice changes the original array and return an array of removed elements. They also contain last index element.
// op ----> myArr becomes [1,5,6,7] and spliced becomes [2, 3, 4]

const marvelHeroes = ["Ironman", "Thor", "Captain America"]
const dcHeroes = ["Batman", "Superman", "Wonder", "Aquaman"]
const allHeroes = [...marvelHeroes,...dcHeroes]
// // Spread operator is used to merge two arrays and it does not change the original array.

const anotherArr = [1, 2, 3, [4, 5, [6, 7, 8, [9, 10]]]]
const anotherRealArr = anotherArr.flat(Infinity)
// By using flat all array becomes a single array and return a single array.

const stringArr = "Shubham";
console.log(Array.from(stringArr))
// It checks the given value is array or not and return boolean value.

// from is working like arr.split("") it make a string or ther data type into a array.

let score1 = 100;
let score2 = 200;
let score3 = 300;
// It takes set of veriable or anthing else and make it into a array.


console.log(Array.of(score1,score2,score3))
console.log(anotherRealArr)
console.log(allHeroes)
console.log(myArr);
console.log(spliced);
console.log(sliced)

