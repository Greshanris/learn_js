// array: part1

// behind the scenes
const myArr = [0, 1, 2, 3, 4, 5]
// array: object where collection of multiple items under a single variable

// important: 1. javascript array are resizable: we can add more elements
// 2. They are not associative arrays: 
// console.log(myArr[1]); // we can access elements using this 3. Zero based indexing
// console.log(myArr["one"]); // we can't access elements using this

// 3. Important(interviews and understanding): when we copy operations, it make shallow copies
// shallow copies: A copy whose properties share the same references point (whatever changed it also change in original array(heap))
// deep copies: Properties do share the same references(point to same underlying values)

// To declare array
const myHeroes = ["spiderman", "ironman"]
const myArr2 = new Array(1, 2, 3, 4)

// Array methods

// myArr.push(6) // adds value to the last
// myArr.push(7)
// myArr.pop() // removing last value 

// myArr.unshift(9) // inserts given value to first (0- index)
// problem using unshift method is that we had to shift the value of all the array: time-consuming and load to computer

// myArr.shift() // shift removes the first element, here just like 9 was removed
// basically, the values are shifting to the left
// console.log(myArr.includes(9)); // ask whether there is 9 in the array: this result in boolean false
// console.log(myArr.indexOf(9)) // results in -1, because the value doesnot exists

// const newArr = myArr.join() // adds all the elements of an array into a string 0,1,2,3,4,5
// // changed in datatype: string (binded as well as changed to string)
// console.log(myArr);
// console.log(newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // returns a copy of a section of an array

console.log(myn1);
console.log("B ", myArr); // here original value is not changed

const myn2 = myArr.splice(1, 3) // entirely takes out the particular set of values from the original array, also including the 3rd element as well
console.log("c ", myArr); // [0, 4, 5] That's why we can see the original value has been changed
console.log(myn2);
