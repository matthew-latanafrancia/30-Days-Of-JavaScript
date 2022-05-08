// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

//1. create an empty set
const emptySet = new Set()
//2. Create a set containing 0 to 10 using loop
const oneToTwoSet = new Set()

for(let i = 1; i < 11; i++){
    oneToTwoSet.add(i)
}

//3. Remove an elemnt from a set
oneToTwoSet.delete(4)
console.log(oneToTwoSet)

//4. Clear a set
oneToTwoSet.clear()
console.log(oneToTwoSet)

//5. Create a set of 5 string elements from array
const hxhNames = ["Killua", "Kurapika", "Gon", "Leorio", "Killugon"]
const hxhNamesSet = new Set(hxhNames)
console.log(hxhNamesSet)

//6. Create a map of countries and number of characters of a country
const countryMap = new Map()

let japan = "Japan"
let germany = "Germany"
let yamato = "Yamato"
let america = "America"

countryMap.set(japan, japan.length)
countryMap.set(germany, germany.length)
countryMap.set(yamato, yamato.length)
countryMap.set(america, america.length)

console.log(countryMap)