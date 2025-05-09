// This loops like if else condition.

let i = 0;
while(i<=10){
  console.log(`The value of i is : ${i}`);
  i++ ;
}

// For array printing 
let arr = ["MS Dhoni", "Virat Kohli", "Rohit Sharma", "KL Rahul"];
let j = 0;
while (j<arr.length) {
  console.log(`My fav player is : ${arr[j]}`);
  j++  
}


// Now we see do while in that first we do our work after that the condition comes.
let score = 1;
do{
  console.log(`The score is : ${score}`);
  
  score++
}
  while(score <= 10);
  