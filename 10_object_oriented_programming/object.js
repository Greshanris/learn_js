function multiplyBy5(num){
    this.num = num;
    return num*5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power); // trying to find out whether function is object by trying to access property of function

// Displays function as object: value = 2

console.log(multiplyBy5.prototype); // trying to find out whether function is object by trying to access prototype of function

// Displays function as object: value = {}


function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai = new createUser("chai", 25); // although "new" keyword creates new instances of object, it also makes sure the method we defined in prototype is available to all instances of object
const tea = new createUser("tea", 250);

chai.printMe(); // now gives error, and solution to it will crack many interview questions

/*
Here's what happens behind the scenes when the new keyword is used:

1. A new empty object is created: The new keyword intiates the creation of a new Javascript object.

2. A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that the newly created object will have access to all the properties and methods that are defined on the constructor function's prototype property.

3. The constructor function is called: The constructor function is called with the specified arguments, and this is bound to the newly created object. If no explicit return value is specified from the constructor, Javascript assumes this, the newly created object, is the intended return value.

4. The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is retured.

*/