const score = 400
// console.log(score); // 400

const balance = new Number(100)
// console.log(balance); // [Number: 100]

// console.log(balance.toString().length); // 3 due to change in string and string have length method
// console.log(balance.toFixed(2)); // 100.00 : 2 decimal places

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4)); // 123.9 param: denotes before decimal places, round of it to precise value
// // note if we use more value and less param: exponential will be gotten 1123 (param: 3) answer: 1.12e+3

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // 1,000,000 : based on us-standard by default

// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

// Number.MAX_VALUE
// Number.MIN_VALUE
// Number.MAX_SAFE_INTEGER
// Number.EPSILON
// Number.MAX_VALUE

// +++++++++++++++++++++++++ Maths +++++++++++++++++++++

// console.log(Math); //Object [Math] {}

// console.log(Math.abs(-4)); // negative to positive, positive to positive
// console.log(Math.round(4.3)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // ceiling: upper value // 5
// console.log(Math.floor(4.9)); // floor: lower value // 4
// console.log(Math.min(4, 3, 6, 8)); // 3
// console.log(Math.max(3, 8, 0, 4)); // 8

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
/* explanation: since random gives value between 0 and 1: could be 0.01, so it is multiplied by 10: to shift it to value of 0 and 9.
but we need value above 1 or equal to 1, and 10, we use + 1
now, if we know max and min, we could do same multiplied by (max-min) + 1, which will be between 1 and 10, but still we need that the value should be from 10 to 20, and we use + min. */