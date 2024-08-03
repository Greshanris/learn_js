// we can define object in two ways:
// Literal, and another is contructor

// Term: singleton => if we make object using contructor, it becomes object singleton. This is the only kind of object like itself.

// object literals
// Object.create (it is used as contructor method)

//symbol declaration

const mySym = Symbol("key1")

// symbol addition, and use it in key and print it in console.
const jsUser = {  // object literals
    name: "Rishav",
    "full name": "Rishav Chaudhary",
    [mySym]: "mykey1", // we are reffering the symbol to const mysym = Symbol("key1")
    age: 23,
    location: "Kathmandu",
    email: "rishavc957@gmail.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email); // is not the right way,
// // there is another way to access the key's value
// console.log(jsUser["email"]); // behind the scene, email is seen as string, so while accessing also, we need to specify the string using ""
// // console.log(jsUser.full name) // we can't use it
// // the reason is the object's full name is provided as string using "", we have no chance of accessing using . method
// console.log(jsUser["full name"]); // Rishav Chaudhary

// // mdn
// /* Data Types:
// There is unique primitive data types called symbol. */
// // console.log(jsUser.mySym); // mykey1: it is not used as symbol mysym: "mykey1" in object
// // console.log(typeof jsUser.mySym); // string

// // if we write the key in square bracket after declaring symbol outside, we can use it as symbol
// console.log(jsUser[mySym]); // mykey1

// basics in objects

jsUser.email ="rishav@chatgpt.com"
// Object.freeze(jsUser) // This is to make sure there is no further change in objects
jsUser.email = "rishav.chaudhary@microsoft.com"
// console.log(jsUser);

// defining functions

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // if we have to reference same object, we could write this.
}

console.log(jsUser.greeting()); // Function (anonymous)] // function did not execute but it reference came
console.log(jsUser.greetingTwo()); // the undefined comes even in browser, because one execution happens automatically



