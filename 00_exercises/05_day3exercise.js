// day 3
// note: windows prompt() is used in different questions' answers if needed to see, comment down others, and run it.
// exercises: Level 2

// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
const base = parseFloat(prompt("Enter base:"))
const height = parseFloat(prompt("Enter height:"))

if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
    console.log("Please enter valid positive numbers for base and height.")
} else {
    const area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`);
}

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
const sideA = parseFloat(prompt("Enter side a: "))
const sideB = parseFloat(prompt("Enter side b: "))
const sideC = parseFloat(prompt("Enter side c: "))

function perimeter (A, B, C) {
    let result;5
    
    if (isNaN(A) || isNaN(B) || isNaN(C)) {
        result = "NaN"
    } else if ((A < 0) || (B < 0) || (C < 0)) {
        result = "negative"
    } else {
        result = A + B + C
    }

    return `The perimeter is ${result}`
}
console.log(perimeter(sideA, sideB, sideC))

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
const len = parseFloat(prompt("Enter length: "))
const wid = parseFloat(prompt("Enter width: "))

let rectArea = (l, w) => {
    if (isNaN(l) || isNaN(w)) {
        return "Not a number"
    } else if (l<0 || w<0) {
        return "negative number"
    } else {
        let a = l*w
        let b = 2*(l+w)
        return `The area is ${a} and perimeter is ${b}`
    }
}

console.log(rectArea(len, wid))

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const circleAreaCircumference = () => {
    while (true) {
        let radius = parseFloat(prompt("Enter radius: "))
        if (isNaN(radius)) {
            console.log(`The value entered is not a number. \n Please renter:`)
        } else if (radius <= 0) {
            console.log(`The radius is negative or zero. \n Please renter:`)
        } else {
            let area = Math.round(Math.PI * radius * radius)
            let circumference = Math.round(2 * Math.PI * radius)
            return `The area of the circle is ${area}. \nThe circumference of the circle is ${circumference}.`
        }
    }
}

console.log(circleAreaCircumference());
