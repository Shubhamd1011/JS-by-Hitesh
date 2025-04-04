console.log(1+2+3);
// op ------->6

console.log("1"+2+2);
/* op ------>122
If any operand is a string, it turns the others into strings too — and concatenates.
means
"1" + 2
→ "1" is a string
→ 2 becomes "2"
→ Result: "12"

"12" + 2
→ Again, string + number → convert number to string
→ "12" + "2" = "122"
*/


console.log(1+2+"3")
/* op ------->33

1 + 2 = 3 (number addition)
3 + "2" → "32" (string concat)
 */


console.log(+true);
// op ----> 1 of - the -1 

console.log(+false);
// op ------> 0 if - then -0

let counter = 10;
let increament = counter++;
let pre = ++counter;

console.log(`x = ${counter} and y = ${increament}`);
// op -----> x = 12 and y = 10 bcz here we give both post and pre increments

console.log(`x = ${counter} and y = ${pre}`);
// op -----> x = 12 and y = 12 ---->bcz it first changes the value
// bcz here we give both post and pre increments






