const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num + 10); // automatically returns value

// console.log(newNums);
// Difference between map and filter is that:
// map() transforms every element in the array and returns a new array of the same length.
// filter() selects elements based on a condition and returns a new array, possibly of smaller length.

// Chaining method
const newNums = myNumbers
                    .map( (num) => num * 10)
                    .map( (num) => num +1)
                    .filter( (num) => num >= 40)
                    
console.log(newNums);
