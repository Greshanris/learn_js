// filter function, callbackfunction, foreach loop in the array,

// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     console.log(item); 
// })

// console.log(values); 
/* output: 
js
ruby
java
python
cpp
undefined*/
// The value returned is undefined

// const values1 = coding.forEach( (item) => {
//     // console.log(item); 
//     return item
// })

// console.log(values1); 

// This means that foreach loop return only undefined.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filter option: params is callback function
// here value is returned instead of the logging it into the console.
// const newNums = myNums.filter( (num) => num > 4)

// console.log(newNums);
// This is all the basic of the filter method

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book Two', genre: 'Non-fiction', publish: 1992, edition: 2008},
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
]

let userBooks = books.filter( (bk) => bk.genre === 'History')

// console.log(userBooks);

userBooks = books.filter ( (bk) => {
    return bk.publish >= 1995 && bk.genre == 'History'
})

console.log(userBooks);


