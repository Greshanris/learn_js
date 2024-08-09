function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
    if(!username){ //username === undefined
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("rishav"))
// console.log(loginUserMessage("rishav")) // undefined

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000)) // if two or more item is added in arguments, when only one param is stated
// This quite common if we are buying many items with prices: only 
// To solve this, there is Rest Operators ... 
// Rest: the items are there, they are open distributor, just pack it in one and give it to me
// this will give array [ 200, 400, 500 ]
// val1, val2, ...num1 is used then first two are in val1 and val2, while rest are in num1
// ... is both rest operator and spread operator, the difference lies in its use

// how to pass object in function and how to use it
const user = {
    username: "rishav",
    prices: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,  400, 500, 1000]));
