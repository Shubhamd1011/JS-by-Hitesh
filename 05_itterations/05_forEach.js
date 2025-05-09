// In the foreach we can pass a function in that and when we pass a parameter in the function on that time goes on each item of the array
const coding = ["js","py","cpp","java"]
coding.forEach((item)=>{
  console.log(item);
}) // And shows the values of each 

// and we pass a function as a referce in that to 

function printMe(val) {
  console.log(val);
}

const number = [1,2,3,4,5,6]
number.forEach(printMe) //we pass as a referance not execute that function.

// By using forEach we not just only acces the values but we access the index and whole array too.
number.forEach((val,index,arr)=>{
  console.log(val,index,arr);
}) // 1st position is for the value 2nd is for the index and 3rd is for the whole items of the array.

// When we have object inside array on that time for accesing the values we also use forEach

const myCoding = [
  {
    langName : "Javascript",
    fileName : ".js"
  },
  {
    langName : "css",
    fileName : ".css"
  },
  {
    langName : "html",
    fileName : ".html"
  },
]

myCoding.forEach((item)=>{
  console.log(item.langName, item.fileName);
}) // Like that we acces the values of that object.