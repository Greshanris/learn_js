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
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // data type is in array, now we can use it in loops
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

// Destructuring of Objects and arrays:
// Destructuring of objects

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// we can use 
// course.courseInstructor to know the value or logging it in console
// we can also use course["courseInstructor"]

// but we can't always write this repetedly, if we have to log it three or more times to the console
// The readability of the code is also something to be concerned about
// For clean code, we use this syntax
const {courseInstructor: instructor} = course // const {value's key to be extracted} = objectname
// there is slight change here, because we can give its own name and access it using that name
console.log(instructor); // now we can directly use the key to access the value
// this is what destructuring of objects means
// console.log(course); // { coursename: 'js in hindi', price: '999', courseInstructor: 'hitesh' } // see the keyname is not changed

// we use these in react: 
// There are methods in react such as 
// const navbar = ({company}) => {

// }
// navbar(company = "hitesh")
// // in react, by default there are props, we don't use props.company, props.something
// // we use concept of {company} in params of the function: here destructuring object is used
// console.log(navbar);

 // ++++++++++++++++++++++++++

// API concepts:
// API: giving our work to others, its not our headache if the by clicking login button, how a google will verify it.
// API: middleman
// API: when we get values from backend, it is how we write it:
// previously, the file came in xml structure which was complex.
// now, it comes in json structure

// json looks just like object without name(key: value pair)

// later on we hold in variable
// proper json structure: key is also in string, and value is also in string
// {
//     "name": "rishav",
//     "coursename": "js in hindi",
//     "price": "free"
// }