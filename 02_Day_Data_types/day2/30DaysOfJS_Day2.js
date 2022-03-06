// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days of JavaScript'
// Print the string on the browser console using console.log()
console.log(challenge)
// Print the length of the string on the browser console using console.log()
console.log(challenge.length)
// Change all the string characters to capital letters using toUpperCase() method
challenge.toUpperCase()
// Change all the string characters to lowercase letters using toLowerCase() method
challenge.toLowerCase()
// Cut (slice) out the first word of the string using substr() or substring() method
challenge.substring(3, challenge.length)
// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
challenge.substring(0, 4)
// Check if the string contains a word Script using includes() method
challenge.includes('Script')
// Split the string into an array using split() method
challenge.split()
// Split the string 30 Days Of JavaScript at the space using split() method
challenge.split(' ')
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let testString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
testString.split(', ')
// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
challenge.replace('JavaScript', 'Python')
// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
let indexFifteen = challenge.charAt(15)
console.log(`The character at index 15 is ${indexFifteen}`)
// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
let charCodeJ = challenge.charCodeAt(12)
console.log(`The character code at J is ${charCodeJ}`)
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(`The first time \'a\' is used is in index ${challenge.indexOf('a')}`)
// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(`The last time \'a\' is used is in index ${challenge.lastIndexOf('a')}`)
// Use indexOf to find the position of the first occurrence of the word
// because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction'
sentence.indexOf('because')
// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
sentence.lastIndexOf('because')
// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
sentence.search('because')
// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let challengeTrim = ' 30 Days Of JavaScript '
challengeTrim.trim()
// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
challenge.startsWith('30')
// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
challenge.startsWith('Script')
// Use match() method to find all the a’s in 30 Days Of JavaScript
challenge.match('a')
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let catOne = '30 Days of'
let catTwo = 'JavaScript'
let catThree = catOne.concat(catTwo)
console.log(catThree)
// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2))