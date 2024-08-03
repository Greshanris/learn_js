// object singleton: constructor part

// const tinderUser = new Object() // this is singleton object which is constructed

// console.log(tinderUser); //{}

// const newtinderUser = {} // this is not singleton object

// console.log(newtinderUser); //{}

const tinderUser = {}
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

console.log(regularUser.fullname?.userFullName.firstName);