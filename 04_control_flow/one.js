// if statement

// const isUserLoggedIn = true
// const temperature = 41

// if (temperature === 41) {
//     console.log("less than 50");
    
// } else {
//     console.log("temperature is greater than 50");
// }

// <, >, <=, >=, ==, !=, ===(Also checks type), !==(Strict checking and antipattern checking)

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`); 
// }
// console.log(`user power: ${power}`); 

// shorthand notation

// const balance = 1000

// if (balance > 500) console.log("test"); // this is implicit scope, one line if statement

// we can't write the multiple lines of code, like here

// if (balance > 500) console.log("test"),
// console.log("test2"); // this is very very unreadable code

// if (balance < 500) {
//     console.log("less than");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail || guestUser) {
    console.log("User logged in");
}

