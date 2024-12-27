// ES6

class User {
    constructor(username, email, password){
        this.username = username; // properties
        this.email = email; //properties
        this.password = password; //properties
    }

    // methods
    encryptPassword(){
        return `${this.password}abc`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}

const chai = new User("chai", "chai@teaflavor.com", "123");

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// Behind the scene

function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const tea = new user("tea", "tea@teaflavor.com", "abc");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

