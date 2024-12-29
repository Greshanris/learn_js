class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    // methods

    // getter: getting value outside from class
    // setter: setting value inside the class

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}rishav`
    }

    set password(value){
        this._password = value
    }
}

const rishav = new User("rishav@rolei.ai", "abc")

console.log(rishav.password);
console.log(rishav.email);
console.log(rishav._email);

