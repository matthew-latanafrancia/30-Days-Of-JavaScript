// this is your main.js script
/*
 * 1. Declare firstName, lastName, country, city, age, isMarries, year
 * variables and assign value to it and use the type of operator
 * to check different data types.
 */
console.log('Question 1:')

let firstName = 'Matthew'
let lastName = 'Latanafrancia'
let country = 'United States'
let city = 'Bellingham'
let age = 19
let isMarried = false
let year = 2022

console.log(`firstName: ${firstName} ${typeof firstName}`)
console.log(`lastName: ${lastName} ${typeof lastName}`)
console.log(`country: ${country} ${typeof country}`)
console.log(`city: ${city} ${typeof city}`)
console.log(`age: ${age} ${typeof age}`)
console.log(`isMarried: ${isMarried} ${typeof isMarried}`)
console.log(`year: ${year} ${typeof year}`)

/*
 * 2. Check if type of '10' is equal to 10
 */
console.log(`Question 2:`)
console.log(`The answer to question 2 is: ${typeof '10' == typeof 10}`)

/*
 *3. Check if parseInt('9.8') is equal to 10
 */
console.log(`Question 3:`)
console.log(`The answer to questions 3 is: ${parseInt('9.8') == 10}`)

/*
 * 4. Boolean value is either true or false.
 *      1. Write three JavaScript statement which provide truthy value.
 *      2. Write three JavaScript statement which provide falsy value.
 */
console.log(`Question 4`)
console.log(`Truthy values: ${3}, ${'woahhhhh'}, ${true}`)
console.log(`Falsy value: ${false}, ${0}, ${''}`)

/*
 * 5. Figure out the result of the following comparison expression first
 * without using console.log().   After you decide the result confirm it using
 * console.log
 */
console.log(`Question 5`)
console.log(4 > 3) //true
console.log(4 >= 3) //true
console.log(4 < 3) //false
console.log(4 <= 3) //false
console.log(4 == 4) //true
console.log(4 === 4) //true
console.log(4 != 4) //false
console.log(4 !== 4) //false
console.log(4 != '4') //false
console.log(4 == '4') //true
console.log(4 === '4') //false
//Find the length of python and jargon and make a falsy comparison statement.console.log
let pytString = 'python'
let jarString = 'jargon'

console.log(pytString.length === jarString.length) //true

/*
 * 6. Figure out the result of the following expressions first without using
 * console.log().  After you decide the result confirm it by using console.log()
 */
console.log(`Questions 6`)
console.log(4 > 3 && 10 < 12) //true
console.log(4 > 3 && 10 > 12) //false
console.log(4 > 3 || 10 < 12) //true
console.log(4 > 3 || 10 > 12) //true
console.log(!(4 > 3)) //false
console.log(!(4 < 3)) //true
console.log(!(false)) //true
console.log(!(4 > 3 && 10 < 12)) //false
console.log(!(4 > 3 && 10 > 12)) //true
console.log(!(4 === '4')) //true

/*
 * 7. Use the Date object to do the following activities
 *      1. What is the year today?
 *      2. What is the month today as a number?
 *      3.  What is the date today?
 *      4. What is the day today as a number?
 *      5. What is the hours now?
 *      6. What is the minutes now?
 *      7. Find out the number of seconds elapsed from January 1, 1970 to now.
 */
console.log(`Question 7`)
const now = new Date()
console.log(`The year is ${now.getFullYear()}`)
console.log(`The month today as a number is ${now.getMonth() + 1}`)
console.log(`The date today is ${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`)
console.log(`The day today as a number is ${now.getDate()}`)
console.log(`The hours right now is ${now.getHours()}`)
console.log(`The minutes right now is ${now.getMinutes()}`)
console.log(`The number of seconds since January 1, 1970 is ${now.getTime()}`)