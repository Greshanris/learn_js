const myobj = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myobj) {
    // console.log(`${key} shortcut is for ${myobj[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('Fr', "France")
// map.set('USA', "United States of America")
// map.set('IN', "India")

// for (const [key, value] in map) {
//     console.log(key);
// } // outputs: no value, map is not iteratable, and we cannot use loop in it