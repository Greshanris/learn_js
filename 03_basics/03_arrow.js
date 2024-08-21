// "this" keyword is used to refer to current context: {} any thing under is that current context
const user ={
    username: "rishav",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage() // rishav, welcome to website
// user.username = "sam" // current context is changed here
// user.welcomeMessage() // sam, welcome to website

console.log(this); // here current context is empty {}, because we are in node environment

// +++++++++++++++++++++++++browser+++++++++++++++++++++++

// In browser, if we go inspect:console then do console.log(this), we will se window 
// Inside browser, the global object is window, thats why we can capture window event such as click, form submit

// +++++++++++++++++++++++++browserpartend+++++++++++++++++

// Now, in node environment we can use it know using the function and logging this in console, after calling we can see a global object.
// we can see "this" keyword only works in object, not in function
function chai(){
    let username = "rishav"
    console.log(this.username);
}

chai()