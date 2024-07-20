// Data types: Primitive and Non-primitive
// Based on call by value and call by reference:
// difference based on how the memory is stored and how it is accessed

// Primitive: call by value  
// when they are copied from one place to another, the original data's reference of memory is not given but a copy. The changes are in copy not in original data.
// 7 types : string, Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript is dynamically typed language because we don't have to mention that the variable contains certain data types
// The reason being the checks of types done after the execution.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123') 
const anotherId = Symbol('123')

console.log(id === anotherId); // symbol makes same value unique as their data types are symbol
// console.log(typeof(id));
// console.log(typeof(anotherId));

// const bigNumber = 34523432424242343n // BigInt, just put n


// Reference (Non primitive)
// reference can be directly allocated to memory

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] // arrays

let myObj = {
    name: "rishav",
    age: 22,
} // objects, everything inside the curly braces

const myFunction = function(){
    console.log("Hello World!")
}

console.log(typeof myObj); 

// heros (array): datatypes: object
// myObj (object): datatypes: object
// myFunction (function): datatypes: function (object function)

