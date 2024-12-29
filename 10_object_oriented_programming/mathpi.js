const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const chai = {
    name: "lemon tea",
    price: "45",
    isAvailable: "true",

    orderChai: function(){
        console.log("chai nhi bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*
{
  value: 'lemon tea',
  writable: true,
  enumerable: true,
  configurable: true
}
   */

// redifining properties inside chai
Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: true
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== "function"){
        console.log(`${key}: ${value}`);
    }
}
