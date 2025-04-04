/* Their are two types of data
1.Primitive
2.Non-primitive

1.Primitve data types :

Type             Ex              Description
-string        "Hello"           Texual Data
-Number         12345            Numeric Data
-Boolean      True/false         Logical Values
-BigInt       1234567890n        Very Big Number
-Null           null         Intensional absence value
-Undifined    undefined      Varible declared,Not Asign
-Symbol       synbol("id")   Unique and immutable identifiers

2.Non primitive data types :

Type                   Ex                                Description            
-Objects      {name : "Shubham",age: 23}               Key-value Pairs
-Array              [1,2,3,4,5]                      Indexed List of values
-Function      function xyz(){}                        Callable objects
*/



console.log(typeof"Hello")
// op ------> string

console.log(typeof 2)
// op ------> number

console.log(typeof null)
// op -------> object

console.log(typeof undefined)
// op --------> undefined

console.log(typeof true)
// op -------> boolean

console.log(typeof {})
// op -------> object

console.log(typeof [])
// op -------> object

console.log(function xyz (){})
// op -------> Function: xyz