// // Dates

// let myDate = new Date() // making date object instance as myDate.

// console.log(myDate); // 2024-07-25T09:02:47.265Z (is not readable or compare)

// // The question arises about how we can bring it in comparison.

// console.log(myDate.toString()); // Thu Jul 25 2024 09:04:29 GMT+0000 (Coordinated Universal Time)
// // so after converting it to string we get a different value having weekday, month, and year as well as time in millisecond at GMT+000 (cooridinated universal time).

// console.log(myDate.toDateString()); // Thu Jul 25 2024
// // in DateString, we got weekday, month, and year only with no time

// console.log(myDate.toISOString()); // 2024-07-25T09:08:54.364Z
// // date-month-yearT and time (Same as myDate instance)

// console.log(myDate.toLocaleDateString()); // 7/25/2024 (day/month/year)

// console.log(myDate.toLocaleString()); // 7/25/2024, 9:11:29 AM (now, it is understandable.)

// console.log(myDate.toLocaleTimeString()); // 9:12:52 AM (so, current time)

// console.log(myDate.toJSON()); // it also gives in same as the myDate

// console.log(myDate.toTimeString()) // 09:15:15 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toUTCString()); // Thu, 25 Jul 2024 09:15:51 GMT

// console.log(myDate.getTimezoneOffset()); // 0

// // type of myDate
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2024, 0, 25) // we are changing date: month start with 0=> jan
// console.log(myCreatedDate.toDateString()); // Thu Jan 25 2024

// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // we can see the output, that 5 is hour and 3 is minute in AM here

// console.log(myCreatedDate.toLocaleString()); // 1/23/2023, 5:03:00 AM // we have to change to locale string to know the time as well with date

// let myCreatedDate = new Date("2023-01-14") // just changing the format of writing(yyyy-mm-dd), like in here " ", and month is started in 1.

// console.log(myCreatedDate.toLocaleString()); // 1/14/2023, 12:00:00 AM

// India's prefered is (dd-mm-yyyy)
let myCreatedDate = new Date("01-14-2023")

// console.log(myCreatedDate.toLocaleString()); // 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now() // when designing quizes, polls, who is fastest, we want them to make winner,timestamp is needed.

// console.log(myTimeStamp); // 1721899966523 it is in millisecond, from where we saw date to now.
// console.log(myCreatedDate.getTime()); // 1673654400000 in millisecond, we get the exact value from 1st january

// converting in seconds
// console.log(Date.now()); // date and time in milliseconds
// console.log(Math.floor(Date.now()/1000)); // in seconds

let newDate = new Date()
console.log(newDate); // 2024-07-25T09:48:26.612Z

console.log(newDate.getMonth()); // 6 because it starts from 0
console.log(newDate.getMonth() + 1); // 7

console.log(newDate.getDay()); // 4 (weekday)

newDate.toLocaleString('default', {
    weekday: "long"
}) // we can customize it