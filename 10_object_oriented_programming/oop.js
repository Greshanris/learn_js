const user = {
    username: "rishav",
    loginCount: 8,
    signnedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`)
        console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)


// Constructor Function

/* 
const promiseOne = new Promise();
const date = new Date();

This "new" keyword is an constructore function. 
 */

function User(username, loginCount, isLoggedIn){
    // properties
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // methods
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("Rishav", 12, true);

const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne.constructor);
// console.log(userTwo);

/* new:

Step1: new object is created
Step2: there is constructor function call because of "new" keyword (this function packs whatever the argument is there and gives it.)
Step3: "this.argument" keyword injects whatever argument is there, in object
Step4: we get the returned value of an object with defined arguments.
*/

