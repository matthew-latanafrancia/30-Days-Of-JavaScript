// this is your main.js script

alert('Open the browser console whenever you work on JavaScript')

/*
 * 1. Get user input using prompt("Enter your age:").  If user is 18 or older, give feedback "old enough to drive."
 */

let age = prompt("Enter your age")

if(age >= 18){
    alert("you can drive thats so cool")
}
else {
    alert(`uh you can't drive yet what the heck.  you don't turn 18 for another ${18-age} years`)
}

/*
 * 2. Compare the values of myAge and yourAge using if ... else.  Based on the comparison and log the result
 * to console stating who is older (me or you).  Use prompt("Enter your age:") to get the age as input
 */

let myAge = 19
 if(myAge > age){
     //older
     alert(`You are ${myAge-age} year(s) younger than me`)
 }
 else if(myAge == age){
     //same
 }
 else{
     //younger
     alert(`You are ${age-myAge} year(s) older than me`)
 }

 /*
  * 3
  */

 //if else
 let a = 2
 let b = 3
 if(a < b){
     alert(`${a} is less than ${b}`)
 }
 else if (a > b){
     alert(`${a} is greater than ${b}`)
 }

 //ternary operator

 a > b
 ? alert(`${a} is greater than ${b}`)
 : alert(`${a} is less than ${b}`)

 /*
  * 4. 
  */

 if((age%2) == 1){
     //odd
     alert("odd yo")
 }
 else{
     //even
     alert("even yo")
 }