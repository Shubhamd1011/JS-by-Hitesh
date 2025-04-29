/* 
- We declare the object by to types :
1. Littrels

const person = {
  name: "Alice",
  age: 25
};

2. Constructor------> When we create object by using constructor is creates singleton object.

const person = new Object();
person.name = "Alice";
person.age = 25;
 

- Object contains Key and Value Pairs.

- When we create a key for examole name js reads that js as a string like "name" but we cant write like that in a string it automatically reads it.
- By the refernce of prev line for accesing objects we gone through 2 types :

1.user.email 
2.user["email"] ----> "" bcz it reads as a string.
ex sometimes we get scenario like   "full name" : "Shubham Devkamble", this on that time for accenign the full name we have only 1 way that is [] brackets.
3. when we have to add symbol data type on time we use [mySym] other wise it return a strinng data type.

- For lock the values we use freeze Object.freeze(jsUser)

- For reference the same object in string interpolation we use this. 
- By using this the properties inside the refernce object we get.

************************************************** Objects Using Constractor **********************************************************************


  */

const mySym = Symbol ("Key1")

const jsUser = {
  name : "Shubham",
  [mySym] : "My Key 1",
  "full name" : "Shubham Devkamble",
  age : 23,
  location : "Pune",
  eMail : "shubhamdevkamble707@gmail.com",
  isLoggedIn : true,
  lastLogninDays : ["Monday","Thursday","Saturday"]
}

jsUser["full name"] = "Shubham Ankush Devkamble"
jsUser.eMail = "shubhamdevkamble7@gmail.com"
// Object.freeze(jsUser)
jsUser.greeting = function(){
  console.log(`Hello ${this.name} from JS`);
  
}

console.log(jsUser)
console.log(jsUser.eMail);
console.log(jsUser["eMail"]);
console.log(jsUser["full name"]);
console.log(jsUser)
console.log(jsUser.greeting());

// ************************************************** Objects Using Constractor *******************************************************************

const instaUser = new Object();
// This is the singletond object;

const instaUser2 = {}
// This is non singleton object.

instaUser.id = "123ABC";
instaUser.name = "Shubham";
instaUser.mail = "shubhamdevkamble707@gfmail.com"
instaUser.num = 9028143707;

console.log(instaUser);

// We can make nesting inside the objects like

const regularUser = {
  eMail : "shubhamdevkamble707@gmail.com",
  fullName : {
    userName : {
      firstName : "Shubham",
      lastName : {
        fatherName : "Ankush",
        surName : "Devkamble"
      }
    }
  }
}

const obj1 = {
  name : "Shubham",
  lastName : "Devkamble"
}

const obj2 = {
mail : "shubhamdevkamble707@gmail.com"
}

// const obj3 = Object.assign({},obj1,obj2) or spread operator {} is used here by using that all values are combined and guarnated 1 value comes.
const obj3 = {...obj1,...obj2} 

console.log(regularUser.fullName.userName.lastName.surName);
// Like That we acces it.

// When we get the values from database on that 

const dbObj = [
  {
    key : 1,
    eMail : "shubhamdevkamble707@gmail.com",
    name : "Shubham Devkamble"
  },
  {
    key : 2,
    eMail : "shubhamdevkamble@gmail.com",
    name : "Shubham Dev"
  },
  {
    key : 3,
    eMail : "shubhamdevkamble7@gmail.com",
    name : "Shubham kamble"
  }
]

console.log (dbObj[0].name)

// If we want to acces the keys or values of the object on that time
console.log(Object.keys(instaUser))
// Like that we access all the keys, like that we also acces the values too,
console.log(Object.values(instaUser))
// This all the keys and values we get that all comes in the array format.

// For checking the value or key is present in the object or not we use hasOwnProperty

console.log(instaUser.hasOwnProperty("name"))
// op will gives us in the boolean format.

// ***************************************************** Destructuring of Objects ******************************************************* 

const course = {
  name : "FullStack Web devlopment",
  price : 999,
  instructorName : "Shubham"
}
// Here for accesing the price we we like the course.price instead of repeation of code of insted of using . we use destructre like that

const{price} = course
const{price:rate} = course
console.log(rate);
// And the op will comes from the object named course. and also we use this for channgig the price key to 
 









