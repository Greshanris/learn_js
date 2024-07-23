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