// Day 2

// Exercise: Level 2

// 1. Using console.log() print out the following statement:
console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`);

// 2. Using console.log() print out the following quote by Mother Teresa:
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof("10") === typeof(10)); // false , because of different data types
console.log(typeof("10") == typeof(10)); // false
let num1 = "10"
let num2 = 10
console.log(typeof(parseInt(num1)) === typeof(num2)); // true
// The reason being parseInt changing string number to number
console.log(typeof(Number(num1)) === typeof(num2)); // true
// The reason being Number change data type to number
console.log(typeof(+num1) === typeof(num2)); // true
// the reason +sign changes string number("10") to integer
console.log(typeof num2); // number

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10
console.log(parseFloat('9.8') === 10); // false
let decimal = "9.8"
console.log(typeof decimal); // string
console.log(typeof(parseFloat(decimal))); // number
console.log(typeof(Number(decimal))); // number
console.log(parseFloat(decimal)); // 9.8
// one way to do the change is
let decimalInt = parseInt(decimal);
console.log(decimalInt); // 9: still not equal
console.log(Math.round(decimal)); // 10
console.log(Math.round(decimal) === 10); // true

//5. Check if 'on' is found in both python and jargon
let python = "python"
let jargon = "jargon"
console.log(python.includes("on")); // true
console.log(jargon.includes("on")); // true
// we could also write it in this way
console.log(python.match("on")); // [ 'on', index: 4, input: 'python', groups: undefined ]

// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let string1 = "I hope this course is not full of jargon"
console.log(string1.match(/jargon/gi)); // [ 'jargon' ]
console.log(string1.includes("jargon")); // true
console.log(string1.search("jargon")); // 34 returns the index
console.log(string1.match("jargon")); // ['jargon', index: 34, input: 'I hope this course is not full of jargon', groups: undefined]

// 7. Generate a random number between 0 and 100 inclusively.
const min = 0
const max = 100
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// 8. Generate a random number between 50 and 100 inclusively.
const min1 = 50
const max1 = 100
console.log(Math.floor(Math.random() * (max1 - min1 + 1)) + min1);

// 9. Generate a random number between 0 and 255 inclusively
const min2 = 0
const max2 = 255
console.log(Math.floor(Math.random() * (max2 - min2 + 1)) + min2);

// 10. Access the 'JavaScript' string characters using a random number.
const scriptString = "JavaScript";
let randomStringIndex = Math.floor(Math.random()*scriptString.length)
let randomString = scriptString[randomStringIndex]
console.log(randomString);

// 11. Use console.log() and escape characters to print the following pattern.
console.log(`1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125`);

// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let newString = 'You cannot end a sentence with because because because is a conjunction';
let firstIndex = newString.indexOf("because");
let lastIndex = newString.lastIndexOf("because");
let becauseLen = "because".length;
let lengthOfSubstring = lastIndex - firstIndex + becauseLen;

console.log(newString.substr(firstIndex, lengthOfSubstring));  // Output: "because because because"

