/*
Question 1
*/

const cat = {}

/*
Question 2
*/

console.log(cat)

/*
Question 3
*/
//You can set a new keu in an object by just adding it in right?

cat.name = `Killu`
cat.legs = 4
cat.age = 12
cat.meow = `mreowwwww`

//question 4
let catName = cat.name
let catLegs = cat.legs
let catAge = cat.age
let catSound = cat.meow

//question 5
cat.breed = `killu breed is all we need`
cat.getCatInfo = `${catName} is a great cat and will always take care of his best friend.  He is ${catAge} years old and has ${catLegs} legs.  He goes ${catSound}.`

console.log(cat.getCatInfo)

/*
Exercises level 2
*/
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  /*
  Find the person who has many skills in the users object
  */

  const keys = Object.entries(users)
  let max = 0
  let maxUser

  for(let i = 0; i < keys.length; i++){
      if(keys[i][1].skills.length > max){
          max = keys[i][1].skills.length
          maxUser = keys[i][0]
      }
  }

  console.log(`The user with the most skills is ${maxUser}.`)

  /*
  Count logged in users, count users having greater than equal to 50 points from the following object
  */

  let numberLoggedIn = 0
  let numberOfGEQ50 = 0

  for(let i = 0; i < keys.length; i++){
      if(keys[i][1].isLoggedIn){
        numberLoggedIn++
      }
      if(keys[i][1].points >= 50){
          numberOfGEQ50++
      }
  }

  console.log(`There are ${numberLoggedIn} users logged in and there are ${numberOfGEQ50} users that have greater than or equal to 50 points.`)
