console.log(countries)
alert('Open the console and check if the countries has been loaded')

/*
1.
*/

for(let i = 0; i <= 10; i++){
    //prints out into the console 0 through 10
    console.log(i)
}

i = 0
while(i<=10){
    //prints out into the console 0 through 10
    console.log(i)
    i++
}

i = 0

do{
    console.log(i)
    i++
} while(i < 10)


/*
2
*/
//this is literally the same thing as number 1 so i'm not gonna do it

/*
3
*/
let n = prompt("Give n")

for(i = 0; i <= n; i++){
    console.log(i)
}

/*
4
*/

let string = ""

for(i = 0; i<=7; i++){
    string += "#"
    console.log(string)
}

/*
5
*/

//this is the same thing just multiplying

/*
6
*/

//This is the same thing just printing more and doing the exponent

/*
7
*/

for(i = 0; i <= 100; i++){
    if((i%2) == 0){
        console.log(i)
    }
}

/*
8
*/

//Smae thing but modulo will equal 1

/*
9. Use for loop to iterate from 0 to 100 and print only prime numbers
*/

for(i = 0; i <= 100; i++){
    if(isPrime(i)){
        console.log(i)
    }
}

/*
10
*/

let sum = 0

for(i = 0; i <= 100; i++){
    sum += i;
}

console.log(`The sume of all numbers from 0 to 100 is ${sum}`)

/*
11
*/
//same thing but with the if statements for iseven and isodd

/*
12
*/

//put the question 11 numbers in an array

/*
13
*/

let arr = []
for(i = 0; i<6; i++){
    arr.push(Math.random)
}
//put the things in the array by pushing or popping

/*
14
*/

//same thing but check if the value is in the array first.  if not reroll

/*
15. Develop a small script which generate a six characters random Id:
*/

