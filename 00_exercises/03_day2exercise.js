// Day 3

// Exercise: Level 3

// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let string1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let arrayLove = string1.match(/Love/gi);
let countLove = arrayLove.length
console.log(`The number of Love appeared is ${countLove} times.`);

// 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let string2 = "You cannot end a sentence with because because because is a conjunction"
// contd..(next day)