// Promise is an object representing eventual completion. So, Promise is an object

// So, new instance needs to be created for Promise object // ES6 

// Promise has two parts: 1. Creating Promise 2. Consuming Promise

// Creating Promise
const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network calls, file system
    setTimeout(function(){
        console.log("Async task is completed.");
        // Now, the resolve is connected to the .then() method
        resolve();
    }, 1000)
})

// What even the resolve and reject are doing in Promise?


// Consuming Promise

// .then() has direct relation to resolve
promiseOne.then(function () {
    console.log("Promise consumed");
})

// New promise creation and consumption using then() in single step
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Rishav", password: "1234"})
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000);
})

// consuming promiseFour
promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The Promise is either resolved or rejected."))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javascript", password: "123"})
        } else {
            reject("ERROR: JS went wrong");
        }
    }, 1000);
});

// consuming promiseFive
async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// async function getAllUsers(){
//     // obviously, this is network call, and it takes time. so, we need to use await
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json() // response.json() also takes time, and is also a kind of promise, so, we need to use await
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()

fetch("https://api.github.com/users/Greshanris")
.then((response, resolve) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));