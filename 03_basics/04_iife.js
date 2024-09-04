// Immediately Invoked Function Expressions (IIFE)

// When the function is written, immediately executing the function

// Scenario:
//  When we write a file, where only databases are connected, and we want that when the application is opened, database connection to start in the file.
// Global Scope: when we declare the variable, when we are writing inside the functions, and we do not want global variable to cause some problem: global scope pollution which we don't want

// To avoid it, we make a different scope, here could be function(){} and immediately execute it

// named IIFE
(function chai() {
    console.log(`DB CONNECTED`)
})();

// (function_declaration)(Execution_call)

// unnamed IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
} )("rishav")