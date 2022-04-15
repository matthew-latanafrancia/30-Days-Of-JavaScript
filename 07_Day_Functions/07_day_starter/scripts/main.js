console.log(countries)
alert('Open the console and check if the countries has been loaded')

/*
Question 1
*/
console.log(`Question 1`)

function fullName(){
    console.log(`Matthew Latanafrancia`)
}

fullName()

/*
Question 2
*/
console.log(`Question 2`)

function fullNameParam(firstName, lastName){
    console.log(firstName + " " + lastName)
}

firstName = 'Matthew'
lastName = 'Latanafrancia'

fullNameParam(firstName, lastName)

/*
Question 3
*/

console.log(`Question 3`)

//same thing as the last question but different parameters so i'm gonna skip it

/*
Question 4
*/

function areaOfRectangle(length, width){
    return length*width
}

console.log(areaOfRectangle(prompt("Enter length"), prompt("Enter width")))

/*
Question 5
*/

//same thing so i'm gonna skip

/*
Question 6
*/

//same thing but 3 parameters

/*
Question 7
*/
//use one parameter and use Math.PI to get the pi value to calculate the area of the circle

/*
Question 8
*/

//Use Math.PI again and just follow the formula

//Question 9 is also just following the formula, now with just mass and volume

//Question 10 uses 2 parameters with total distance covered and total mount of time taken.  The
//formula of this will just be distance/time = speed

//question 11 uses mass and the gravity constant so you can just store the gravity constant separately

//Question 12 is also just following formulas converting the fahrenheits to celsius

/*
Question 13: Body mass index is calculated as bmi = weight in Kg / (height x height) in meters^2.  Write a function that calculates bmi.  Afterwards,
check if a person is underweight, nomral, overweight, or obese with
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more
*/

function bmi(weight, height){
    let bmi = weight/(height*height)
    console.log(bmi)

    if(bmi < 18.5){
        console.log("You are underweight")
    }
    else if(bmi <= 18.5 && bmi >= 24.9){
        console.log("You are normal")
    }
    else if(bmi <= 25 && bmi >= 29.9){
        console.log("You are overweight")
    }
    else{
        console.log("You are Obese")
    }
}

bmi(73, 1.65)
//Well that was weird but i did it

/*
Question 14: Write a function called checkSeason, it takes a month
parameter and returned the season
*/

//checkSeason:
//month: must be an integer 0-11
function checkSeason(month){
    if (month == 11 || (month >= 0 && month <= 2) ){
        console.log("Winter!")
    }
    else if(month >= 3 && month <= 5){
        console.log("Spring!")
    }
    else if(month >= 6 && month <= 8){
        console.log("Winter!")
    }
    else{
        console.log("Fall!")
    }
}
//this should work

/*
Question 15
*/
//finding the max is pretty simple you can just run a for loop


