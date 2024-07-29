const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes); // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// // there will be tons of mistake because, there will be arrays inside the arrays, arrays will be as a element
// console.log(marvel_heroes[3][1]); // flash

// const allHeroes = marvel_heroes.concat(dc_heroes) // concats two arrays to single arrays
// console.log(allHeroes); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// Although, concat could combine two arrays to single one but many people don't use it
// There is a easy method: spread

const all_new_heroes = [...marvel_heroes, ...dc_heroes] // spread out values: just like two glass glass broke down the floor, and is spreaded
// we can add more arrays to one
// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// this situation can be handled using
const real_another_array = another_array.flat(Infinity) // Return a new array with all sub-array elements concatenated into it recursively up to the specified depth (parameters: numbers(how much depth))
// regarding the parameter there is a hack: infinitiy, no mater how many arrays are inside an array inside an array, it concatenates all
console.log(real_another_array);

// While Data Scraping we use this particular method
// when selecting data from webpages, sometimes those data comes from different format like: node list, objects, strings, but we need an array

// asking whether something is array
console.log(Array.isArray("rishav")); // false: boolean
// to convert to array
console.log(Array.from("Rishav")); // [ 'R', 'i', 's', 'h', 'a', 'v' ] 
console.log(Array.from({name: "rishav"})); // gives empty array [], we have to specify whether to create keys to array or value to array : interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Returns a new array from a set of elements(variables, arrays, etc.) // [ 100, 200, 300 ]