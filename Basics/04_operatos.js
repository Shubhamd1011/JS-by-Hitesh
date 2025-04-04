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