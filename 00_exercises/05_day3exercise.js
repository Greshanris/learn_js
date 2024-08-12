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

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x-2

/* Before answering this question, the basic concept, i went with is:
1. converting the equation to string
2. removing the spaces and equal sign using regex pattern
3. Using the charAt method to know the value.
But it caused NaN value while parsing to int.
so, same concept, with array destructuring is used and a function is used,
so, that i don't need to rewrite it:
1. Array Destructuring: '[_, m, c]'
2. string.match(regex pattern) returns array
3. let [_, m, c] = equation.match(/regex pattern/)
'_' will hold the entire matched string(y = mx +c)
'm' will hold the slope extracted from the first capture group
'c' will hold the value of y-intercept extracted from the second capture group

This is easy, but now creating regex pattern is the real deal
/y\s*=\s*([+-]?\d*\.?\d*)x\s*([+-]\s*\d*\.?\d*)/
This is the regex pattern that divides the into three respective array element
 */

/* 
              /y\s*=\s*
1. This regex part matches the character 'y'
2. \s* matches zero or more whitespace characters.
3. \s stands for any whitespace character (spaces, tabs, etc.)
4. * means "zero or more" of the preceding character
5. = matches =
6. \s* matches as same as 2.
combined makes the character that matches y = mx + c
*/

/*
([+-]?\d*\.?\d*)
The first capture group, which captures slope "m"
1. [+-]? matches an optional '+' or '-' sign. ? means "zero or one" of the preceding element.
2. \d* matches zero or more digits. \d stands for digit (0-9), and * means "zero or more" of the preceding character.
3. \.? matches an optional decimal point. \. escapes the dot and ? meanse zero or one
4. \d* matches zero or more digits after the decimal point. \d means digit and * means possbility of having one or more digits.
5. after y = "(mx)" is seen that if there is + or - sign, not then escape,then match digit which will be m and decimal if there is
*/

/*
x/s*: matches chaaracter x and any white spaces, if there is due to * 
*/

/*
([+-]\s*\d*\.?\d*)
Second capture group, which captures y-intercept c
[+-] as this is mandatory, for + c part, if + then +, and if - then - without ?
\s* any whitespaces characters
\d* matches zero or more digits
\.? if there is decimal point then, it matches, if not then not
\d* matches after zero or more digits after the decimal point
*/

/*
example: if y = 2x -2, then ["y = 2x -2", "2", "-2"]
*/
// to calculate, just put y = 2x - 2

const calculateSlopeIntercept = () => {
    const getValidEquation = () => {
        const equationPattern = /y\s*=\s*([+-]?\d*\.?\d*)x\s*([+-]\s*\d*\.?\d*)/
        let equation;
        
        while (true) {
            equation = prompt("Enter the equation in the form (y = mx +c): ")
    
            // checking if the the equation matches the pattern
            if (equation.match(equationPattern)) {
                break
            } else {
                alert("Invalid equation Format. Please retype the equation")
            }
        }
    
        return equation
    }

    let equation =getValidEquation();

    // using array destructuring and extract three elements (allvalue, m, c)
    let [_, m, c] = equation.match(/y\s*=\s*([+-]?\d*\.?\d*)x\s*([+-]\s*\d*\.?\d*)/)
    m = parseFloat(m.replace(/\s+/g, ""))
    c = parseFloat(c.replace(/\s+/g, "")) // removes any spaces if present

    // defining the x-intercept and y-intercept
    let xIntercept = -c/m
    let yIntercept = c

    return {
        equation: equation,
        slope: m,
        xIntercept: xIntercept,
        yIntercept: yIntercept
    }
}

const equationResult = calculateSlopeIntercept()

const equationSlope = equationResult.slope
const xIntercept = equationResult.xIntercept
const yIntercept = equationResult.yIntercept
console.log(`slope: ${equationSlope}, xIntercept: ${xIntercept}, yIntercept:${yIntercept}`)

// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

const slopeCalculator = () => {
    const pointPattern = /\((\d*\.?\d*)[,]\s*(\d*\.?\d*)\)/
    let pointOne;
    let pointTwo;
        
    while (true) {
        pointOne = prompt("Enter the equation in the form (x1, y1): ")
        pointTwo = prompt("Enter the equation in the form (x2, y2): ")
    
        // checking if the the equation matches the pattern
        if (pointOne.match(pointPattern) && pointTwo.match(pointPattern)) {
            break
        } else {
            alert("Invalid point Format. Please retype the points")
        }
    }

    let [, xOne, yOne] = pointOne.match(pointPattern)
    let [, xTwo, yTwo] = pointTwo.match(pointPattern)

    xOne = parseFloat(xOne)
    yOne = parseFloat(yOne)
    xTwo = parseFloat(xTwo)
    yTwo = parseFloat(yTwo)

    let slope = (yTwo-yOne)/(xTwo-xOne)

    if (isNaN(slope)) {
        alert(`The value is either not number or the value results 0/0`)
    } else {
        return {
            slope: slope,
            points: [{x: xOne, y: yOne}, {x: xTwo, y: yTwo}]
        }

    }
}

const pointResult = slopeCalculator()

const pointSlope = pointResult.slope
const points = pointResult.points
console.log(`pointslope: ${pointSlope}`) 
points.forEach(point => console.log(`(${point.x}, ${point.y})`))

// 7. Compare the slope of above two questions

const compareSlopes = (result1, result2) => {
    const slope1 = result1.slope
    const slope2 = result2.slope

    if (slope1 > slope1) {
        console.log(`Slope of first equation (${slope1}) is greater.`)
    } else if (slope2 > slope1) {
        console.log(`Slope from second points (${slope2}) is greater`)
    } else {
        console.log(`Both slopes are equal: ${slope1}`)
    }
}

compareSlopes(equationResult, pointResult)

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// Takes user input to calculate:
const questionSeven = () => {
    const valueY = (x) => {
        let y = Math.pow(x, 2) + 6*x + 9
        return y
    }
    const xValue = Number(prompt("Enter the value of X: "))
    const yValue = valueY(xValue)

    for (let x = -100; x <= 100; x++) {
        if (valueY(x) === 0) {
            console.log(`The value of x that makes y equals to 0 is x = ${x}`)
        }
    }

    return `The value you entered is ${xValue} while the y value is ${yValue}`
}

console.log(questionSeven())

// 9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
const payCalculator = () => {
    while (true) {
        let hours = parseFloat(prompt("Enter hours: "))
        let ratePerHour = parseFloat(prompt("Enter rate per hour: "))
        if (isNaN(hours) || hours < 0) {
            console.log(alert("Hours is Negative or not a number."))
        } else if (isNaN(ratePerHour) || ratePerHour < 0) {
            console.log(alert(`Rate is Negative or not a number.`))
        } else {
            weeklyEarnings = hours * ratePerHour
            return `Your weekly earning is ${weeklyEarnings}.`
        }
    }
}

console.log(payCalculator())

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
const name = prompt("Enter your Name: ")
const nameLength = name.length
if (nameLength > 7) {
    console.log(`Name '${name}' is long.`)
} else {
    console.log(`Name '${name}' is short.`)
}

// 11. Compare your first name length and your family name length and you should get this output.
let firstName = prompt("Enter first Name: ")
let lastName = prompt("Enter family Name: ")

if (firstName.length > lastName.length) {
    console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
} else if (firstName.length <lastName.length) {
    console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`)
} else {
    console.log(`Your first name, ${firstName} and your family name, ${lastName} is equal in length.`)
}

// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

const myAge = 23

while (true) {
    let yourAge = parseInt(prompt("Enter your age: "))
    if (isNaN(yourAge)) {
        alert('Please renter your age.')
    } else if (myAge > yourAge) {
        let differenceInAge = myAge - yourAge
        console.log(`I am ${differenceInAge} years older than you.`)
        break
    } else if (myAge < yourAge) {
        let differenceInAge = yourAge -myAge
        console.log(`I am ${differenceInAge} years younger than you.`)
        break
    } else {
        console.log(`We are of Same age.`)
        break
    }
}

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

const legalAgeDrive = () => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    while (true) {
        let birthYear = parseInt(prompt("Enter birth year: "), 10)

        if (!isNaN(birthYear) && birthYear > 1900 && birthYear <= currentYear) {
            const age = currentYear - birthYear
            const ageLeft = 18 - age
            if (age >= 18) {
                alert(`You are ${age}. You are old enough to drive.`)
                return `You are ${age}. You are old enough to drive.`
            } else {
                alert(`You are ${age}. You will be allowed to drive after ${ageLeft} years.`)
                return `You are ${age}. You will be allowed to drive after ${ageLeft} years.`
            }
        } else {
            alert("Please enter a valid birth year.")
        }     
    }
}

console.log(legalAgeDrive())
