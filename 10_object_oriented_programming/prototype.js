// let myName = "Rishav      ";
// let myChannel = "chai      ";

// console.log(myName.trueLength);

let myHeroes = ["thor", "spiderman", "ironman", "captain america"];

let heroPower ={
    thor: "thunder",
    spiderman: "web",
    ironman: "money",
    captain: "shield",
    getSpiderPower: function(){
        console.log(`Spiderman power is ${this.spiderman}`);
    },
    getIronmanPower: function(){
        console.log(`Ironman power is ${this.ironman}`);
    },
    getThorPower: function(){
        console.log(`Thor power is ${this.thor}`);
    },
    getCaptainPower: function(){
        console.log(`Captain power is ${this.captain}`);
    }
}

Object.prototype.rishav = function(){
    console.log(`Rishav is present in all objects`);
}

Array.prototype.heyRishav = function(){
    console.log(`Rishav says hey from all arrays`);
}
    

// heroPower.rishav(); // yes, it has rishav property

// myHeroes.rishav(); // yes, it has rishav property
// myHeroes.heyRishav();
// heroPower.heyRishav(); // no, it does not have heyRishav property

// inheritance

const user = {
    name: "Rishav",
    email: "rishav@unemployed.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const taSupport = {
    makeAssignment: "JavaScript",
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user;

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher); // prototypal inheritance

let anotherUserName = "ChaiaurCode     ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length of ${this} is ${this.trim().length}`);
}

anotherUserName.trueLength();
"rishav".trueLength();
"milktea".trueLength();