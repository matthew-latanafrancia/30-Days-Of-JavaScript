//Using console.log() print out the following statement
console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.")

//using console.log() print out the following quote by Mother Teresa:
console.log("\"Love is not patronizing and charisty isn't about pity, it is about love. Charity and lvoe are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"")

//Check if typeof'10' is exactly equal to 10.  If not make it exactly equal
if(typeof'10' != 10){
    let ten = 10
    console.log(ten)
}

//Check if parseFloat("9.8") is equal to 10 if not make it exactly equal with 10

//Check if on is found in both python and jargon
let pythonCheck = 'python'
let jargonCheck = 'jargon'
console.log(pythonCheck.includes('on'))
console.log(jargonCheck.includes('on'))

//I hope this course is not full of jargon.  Check if jargon is in the sentence
let sentence = 'I hope this course is not full of jargon'
console.log(sentence.includes('jargon'))

//Generate a random number between 0 and 100 inclusively
let rand = Math.floor(Math.random() * 101)
console.log(rand)

//generate a random number between 50 and 100 inclusively
let rand2 = Math.random() * 50 + 50
console.log(rand2)

//Generate a random number between 0 and 255 inclusively
let rand3 = Math.floor(Math.random() * 256)
console.log(rand3)

//Access the javascript string characters using a random number.
let jsString = 'JavaString'
let randChar = Math.floor(Math.random() * jsString.length)
console.log(jsString[randChar])

//Use console.log() and escape characters to print the following pattern
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

//Use substr to slice out the phrase because because because from the following sentence. "You cannot end a sentence with because because because is a conjunction."
let fullString = 'You cannot end a sentence with because because because is a conjuction.'
let subString = fullString.substr(31, 23)
console.log(subString)
