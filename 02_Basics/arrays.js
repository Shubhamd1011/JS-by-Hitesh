/*
- It is a collection of Itoms.
- The arrays in Js are Resizeable.
-Js Arrays copy-operations create Shallow copy not a deep copy.
--Shallow copy :- When we do change in array it also changes in original array to like heap memory it means shallow copy of an object is the copy whose shares the referance.

-- deep copy :- Who do not share the same reference property when we copy.

Prototype                           example                           description
Push                             myArr.push(6)          It Add the value in the Array from last
pop                              myArr.pop()            It deletes the value in the Array from last
ubshift                          myArr,unshift(9)       It Add the value in the Array from start.
shift                            myArr.shit()           It deletes the value in the Array from start.
includes                         myArr,includes(8)      It checks this number is present or not and give the value in boolean.
indexOf                          myArr.indexOf(2)       It gives us the index value of the given number.
join                             myArr.join             It coverts array into string.
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




console.log(myArr);
