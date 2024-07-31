// Day 2

// Exercise: Level 1

// 1: Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days Of JavaScript"

// 2. Print the string on the browser console using console.log()
console.log(challenge); // Output: 30 Days Of JavaScript

// 3. Print the length of the string on the browser console using console.log()
console.log(challenge.length); // output: 21 mistake: using bracket

// 4. Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase()); // output: 30 DAYS OF JAVASCRIPT

// 5. Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase()); // output: 30 days of javascript

// 6. Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(0, 2)); // Takes two argument: starting index and no.of characters to slice
// output: 30, thinking the first string word as 30
console.log(challenge.substring(3, 7)); // Difference: takes both starting and stopping index(not included)
// output: Days, thinking the "Days" as fist word

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let challengeLength = challenge.length
console.log(challenge.substr(3, challengeLength - 1)); // output: Days Of JavaScript
console.log(challenge.substring(3, challengeLength)); // output: Days Of JavaScript

// 8. Check if the string contains a word Script using includes() method
console.log(challenge.includes("Script")); // Output: True

// 9. Split the string into an array using split() method
console.log(challenge.split()); // changes to an array -> [ '30 Days Of JavaScript' ] // needs string for splitting at

// 10. Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(" ")); // [ '30', 'Days', 'Of', 'JavaScript' ]

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let itCompany = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(itCompany.split(",")); // ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
// replace method uses two parameters: string to change, string to replace with
console.log(challenge.replace("JavaScript", "Python")); // 30 Days Of Python

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15)); // S (needs numerical index parameter)

// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
// charCodeAt() method takes index and returns char code (ASCII number) of the value at that index
// console.log(challenge.charCodeAt("J")); // 51 // Mistake: needs index not string
console.log(challenge.charCodeAt(11)); // 74 : a different value 

// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf("a")); // 4 // gives the firstindex of substring "Java" gives index of J
console.log(challenge.indexOf("A")); // -1

// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf("a")); // 14 // gave the last value of java string

// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let beConjunction = "You cannot end a sentence with because because because is a conjunction"
console.log(beConjunction.indexOf("because")); // 31

// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(beConjunction.lastIndexOf("because")); // 47

// 19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(beConjunction.search("because")); // An object which supports searching within a string. Finds the first substring match in a regular expression search.
// output: 31 // The search value can be a string or a regular expression pattern.(/because/gi) g-means to search in the whole text, i - case insensitive

// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let challenge1 = " 30 Days Of JavaScript "
console.log(challenge1.trim()); // Removes the leading and trailing white space and line terminator characters from a string.

// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith("30")); // true

// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith("Days Of JavaScript")); // true

// 23. Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match("a")); // [ 'a', index: 4, input: '30 Days Of JavaScript', groups: undefined ]
console.log(challenge.match(/a/gi)); // [ 'a', 'a', 'a' ]
let regex = /\d+/
// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.
console.log(challenge.match(regex)); // [ '30', index: 0, input: '30 Days Of JavaScript', groups: undefined ]
console.log(challenge.match(/\d+/g)); // [ '30' ]

// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let challenge3 = "30 Days Of"
let challenge4 = "JavaScript"
console.log(challenge3.concat(" ", challenge4)); // concat(substring1, substring2, substring3)
// 30 Days Of JavaScript

// 25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2)); // 30 Days Of JavaScript30 Days Of JavaScript