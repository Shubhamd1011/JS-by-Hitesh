// This loops is use for the purpose of ittrate the objects.

const lang = {
  js : "Javascript",
  css : "Casacafing style sheets",
  html : "Hyper text markup language"
}

// For getting all the keys 

for (const keys in lang){
  console.log(keys);  
} // Op we will get here all the keys.

// Now for getting all the values we use 
for(const keys in lang){
  console.log(`${keys} is the shortcut of ${lang[keys]}`);
}  // by using the the obj name here is lang[keys] we acces the values.


// When we use for in loop in on arrays it returns the index of that array
const superHeroes = ["Ironman","Spiderman","Batman"]
for(const heroes in superHeroes){
  console.log(heroes);
} // It retuns only the index of that array

// And same as like object we also get values from the array.
for(const heroes in superHeroes){
  console.log(superHeroes[heroes]);
} // It retuns only the index of that array we pass the heroes key here for acces the all the values from an array.


