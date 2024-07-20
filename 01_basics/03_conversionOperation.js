/* This multiline is being used for notes. 
while // is used for the codes we previously used, but not wanting now to print in console.(Educational) */

// let score = "true"

//const {score}req.body() /* taking request from frontend */

/* Explanation on why we may not know the type of data from the forms or other front-end sources */
// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/* "33" =>33
 "33abc" =>NaN
 true =>1; false = 0 */

//let isLoggedIn = null;

//let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn)

/* changing data types to boolean and logging in console.
1 => True 
0 =>  false
"" => false
" " => true
"rishav" => true
NaN => false
null => false */ 

// let someNumber = 33;

// let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// **************** Operations *************

// let value = 3
// let negValue = -value
// console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // 2 to the power 3
// console.log(2/3); //
// console.log(2%3);

// let str1 = "hello"
// let str2 = " Rishav"
// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + "2"); // 12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); // 32

// console.log(3 + 4 * 5 % 3); // 5 (very confusing code)

// console.log( (3 + 4) * 5 % 3); // 2

// console.log(+true); // bad code (value: 1)

// console.log(true+); // bad code (value: error)

// console.log(+""); // value: 0 due to "" converts to false and + operator converts it to boolean values(bad code)

// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2;

/*postfix*/
// let gameCounter = 100
// gameCounter++;
// console.log(gameCounter); // 101

/* prefix */

let gameCounter = 100
++gameCounter;
console.log(gameCounter); // 101

// link to study: https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

