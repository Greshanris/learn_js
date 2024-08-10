// Scope
// starts with let, var and const


// {} is almost the scope: it is seen in functions, if else
// when it comes with functions, and if else: {} is called scope

// var c = 300

let a = 300

if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
} // All the thing that is written inside the if {} is block scope



console.log(a);
// console.log(b);
// console.log(c);

