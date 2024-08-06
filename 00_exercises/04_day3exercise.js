// day 3

// Exercise: Level 1

/* 1. Declare firstName, lastName, country, city, age, isMarried, year variable 
and assign value to it and use the typeof operator to check different data types.*/
let firstName = "Rishav"
let lastName = "Chaudhary"
let country = "Nepal"
let age = 23
let isMarried = false
const myDate = new Date()

console.log(firstName, lastName, country, age, isMarried, myDate);
console.log(typeof(firstName), typeof(lastName), typeof(country), typeof(age), typeof(isMarried), typeof(myDate));

// 2. Check if type of '10' is equal to 10
console.log(typeof('10') === typeof(10)); // false

// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10); // false

/* 4. Boolean value is either true or false.

Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value.*/ 

let truthy1 = 1 // numbers provide truthy values
let truthy2 = "rishav" // strings provide truthy values
let truthy3 = true // boolean value provides truthy values

let falsy1 = 0 // 0 provide falsy values
let falsy2 = 0n // 0n provide falsy values
let falsy3 = null // null provide falsy values
let falsy4 = undefined // undefined provides falsy values
let falsy5 = NaN // NaN provide falsy values
let falsy6 = false // boolean false provide falsy values
let falsy7 = `` // empty string provide falsy values

// so how do we find that something is falsy or true except booleans, by compaison operators
console.log(truthy2  && truthy3); // true (because both are truthy values)
// we can use it in similar manner
// but there is another way that is in loops, while needs some condition to satisfy
while (truthy1) {
    console.log("1 is the truthy value")
    break
}
// see it would have printed the true repeatedly if there was no break statement, the condition satisfied.
// we need to know this before making any program

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// there are some comparisons of guessing and answering, first guess and answer using the console.log
console.log(4>3); //true
console.log(4>=3); //true
console.log(4<3); //false
console.log(4<=3); //false
console.log(4==4); //true
console.log(4===4); //true
console.log(4!=4); //false
console.log(4!==4); //false
console.log(4!='4'); //false
console.log(4!=='4'); //true
console.log(4=='4'); //true
console.log(4==='4');