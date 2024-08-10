// Scope
// starts with let, var and const


// {} is almost the scope: it is seen in functions, if else
// when it comes with functions, and if else: {} is called scope

// var c = 300

let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a); 
} // All the thing that is written inside the if {} is block scope

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "rishav"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()
}

// one()

if (true) {
    const username = "rishav"
    if (username === "rishav") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// +++++++++++++ interesting +++++++++++++++++

console.log(addOne(5))
function addOne(num) {
    return num + 1
}

console.log(addTwo(5))
const addTwo = function(num){
    return num + 2
}

