// object singleton: constructor part

// const tinderUser = new Object() // this is singleton object which is constructed

// console.log(tinderUser); //{}

// const newtinderUser = {} // this is not singleton object

// console.log(newtinderUser); //{}

const tinderUser = {} // non-singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userFullName: {
            firstName: "Rishav",
            lastName: "chaudhary"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName); // This is one way to access objects inside objects
// optional chaining
// if there is no fullname then we can use it in this way
// console.log(regularUser.fullname?.userFullName.firstName); // we use this syntax, when there is response from API


// object combination
const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}
const obj4 = {
    5: "a",
    6: "b"
}

// const obj3 = {obj1, obj2}
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2, obj4) 
/*Copy the values of all of the 
enumerable own properties from 
one or more source objects to a 
target object. Returns the 
target object. */
// {}: optional parameter, guaranteed result(target, source)

const obj3 = {...obj2, ...obj2, ...obj4} // spread operator

// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// objects coming from databases are arrays of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // data type is in array, now we can use it in loops
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

