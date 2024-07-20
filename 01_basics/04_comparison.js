// Easy Comparisons

// console.log(2 > 3);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 !== 1); 

// comparing different data types

// console.log("2" > 1); // automatically converted the "2" to number // true
// console.log("02" > 1); // same

console.log(null > 0); // false
console.log(null == 0); // false // but the null is not converted to zero here: equality check
console.log(null >= 0); // true (no predictable result) // null was converted to 0 in comparison

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// comparison operator and equality check is different syntax and different working

// === (strict check)
console.log("2" == 2); // true
console.log("2" === 2); // false (Checks data types as well)