class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const rishav = new User('Rishav');
// console.log(rishav.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email;
    }
}

const iphone = new Teacher("Iphone", "i@phone.com")

iphone.logMe();
console.log(iphone.createId());
