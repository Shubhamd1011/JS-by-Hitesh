
// Printing numbers from 0 to 10;
for (let i = 0; i <=10; i++){
  if(i === 5){
    console.log("5 is the best number");   // It print before the number 5.
    
  }
  console.log(`Number is : ${i}`);
};

// For printing the tables from 1 to 10;

for (let i = 0; i <= 10; i++){
  console.log(`The table of ${i}`);
  for(let j = 1; j <= 10; j++){
    console.log(i + " * "+j+ " ="+" "+ i*j); 
  } 
}

// For array printing 
const superHeroes = ["Ironman","Batman","Spiderman","Thor"]
for(let i = 0; i<superHeroes.length;i++){
  const element = superHeroes[i]
  console.log(element);
}

// Sometime we want to stop the loops at perticular point on that time we use break and continue.
// Break means if the condition is satiesfied the loop will stops at at line of code;
// continue means it skips that line suppose we have give the condition of i===5 it skips the five and print thats statement and after that it continue the looping.

for (let i = 0; i <=20; i++) {
  if(i ===5){
    console.log("5 is detected now stop the loop");
    break;
  }
  console.log(i); 
} // here it stops the loop when condition is satisfied.

for(let i =0; i<=20; i++){
  if(i===5){
    console.log("5 is detected but loop will continue expect the value of 5");
    continue; 
  }
  console.log(`This is the value of i : ${i}`);
} // It continues the value even the condition is satiesfied.