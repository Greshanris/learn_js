// day 3

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
const sideC = parseFloat(prompt(""))