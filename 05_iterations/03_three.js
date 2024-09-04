// for of

// Array specific loops

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
// inside here object is different compared to javascript object.
// syntax: for (const variablename of objectname){}
for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello world!"
for (const greet of greetings) {
    if (greet === " ") {
        continue
    }
    // console.log(`Each char is ${greet}`);
}

// Maps

/* Map is an object which hold key-value pairs and remembers the original insertion order of the keys.
- no duplicate values */

const map = new Map()
map.set('IN', "India")
map.set('Fr', "France")
map.set('USA', "United States of America")
map.set('IN', "India")

//console.log(map);

for (const key of map) {
    console.log(key);
    
}
/* ouputs: [ 'IN', 'India' ]
[ 'Fr', 'France' ]
[ 'USA', 'United States of America' ] */ // This is in array format

// But here, if we destructure the array like this:
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}
/*
 IN
Fr
USA */

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// } // myobj is not iteratable

