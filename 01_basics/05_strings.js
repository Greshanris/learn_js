const name = "rishav";
const repoCount = 3

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // string interpolation

// string declaration

const gameName = new String("hitesh-hc-com") // when new is used, we use object string or other object

console.log(gameName[0]); // h
console.log(gameName.__proto__) // object {} but not empty

console.log(gameName.length);
console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(2)); // t  //
console.log(gameName.indexOf("t")); // 2

const newString = gameName.substring(0, 4) // substring from start number to end-number + 1
console.log(newString);

const anotherString = gameName.slice(-8, 4) // we could use negative number to count the number but if there is 9 length of the string, to start from second element, we can use -8 to 3rd character
console.log(anotherString);

const newStringOne = "   rishav    "
console.log(newStringOne.trim()); // rishav
const url = "https://hitesh.com/hitesh%20chaudhary"

console.log(url.replace("%20", "-")) // https://hitesh.com/hitesh-chaudhary

console.log(url.includes("hitesh")) // true

console.log(gameName.split("-"));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// comparison
// a > b ; compares alphabetically, case-sensitively // false
// to compare insensitively, we make function
// function areEqualCaseInsensitive(str1, str2) {
//     return str1.toUpperCase() === str2.toUpperCase();
//   } but, some sign like turkish sign is same when uppercased, and a latin sign is different in lowercase

// use localeCompare()
// const areEqual = (str1, str2, locale = "en-US") =>
//     str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;
  
//   areEqual("ß", "ss", "de"); // false
//   areEqual("ı", "I", "tr"); // true
  

  

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const strPrim = "foo"; // A literal is a string primitive
// const strPrim2 = String(1); // Coerced into the string primitive "1"
// const strPrim3 = String(true); // Coerced into the string primitive "true"
// const strObj = new String(strPrim); // String with new returns a string wrapper object.

// console.log(typeof strPrim); // "string"
// console.log(typeof strPrim2); // "string"
// console.log(typeof strPrim3); // "string"
// console.log(typeof strObj); // "object"
 
// eval
// const s1 = "2 + 2"; // creates a string primitive
// const s2 = new String("2 + 2"); // creates a String object
// console.log(eval(s1)); // returns the number 4
// console.log(eval(s2)); // returns the string "2 + 2"
// never use direct eval
// use strict method in a function.

console.log(toString(10))

