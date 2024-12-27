function setUsername(username){
    // complex DB calls
    this.username = username;
    console.log("called");
    
}

function createUser(username, email, password){
    setUsername.call(this, username); // to hold the reference, we use call
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
