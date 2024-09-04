const coding = ["js", "ruby", "java", "python", "cpp"]

// there are bydefault loop method in arrays such as foreach:
// but this is higher order function

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe) // just put reference, don't execute like coding.forEach(printMe())

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// }) // this just don't have access to only one parameter
// // This has also access to other parameters such as index and array, which can put one after another.

// Having objects inside an array is common, then how to access the particular key value pair inside an array's certain object?

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})