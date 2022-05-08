

/*
1. Explain the difference between **_forEach, map, filter, and reduce_**.
2. Define a callback function before you use it in forEach, map, filter or reduce.
3. Use **_forEach_** to console.log each country in the countries array.
4. Use **_forEach_** to console.log each name in the names array.
5. Use **_forEach_** to console.log each number in the numbers array.
6. Use **_map_** to create a new array by changing each country to uppercase in the countries array.
7. Use **_map_** to create an array of countries length from countries array.
8. Use **_map_** to create a new array by changing each number to square in the numbers array
9. Use **_map_** to change to each name to uppercase in the names array
10. Use **_map_** to map the products array to its corresponding prices.
11. Use **_filter_** to filter out countries containing **_land_**.
12. Use **_filter_** to filter out countries having six character.
13. Use **_filter_** to filter out countries containing six letters and more in the country array.
14. Use **_filter_** to filter out country start with 'E';
15. Use **_filter_** to filter out only prices with values.
16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
17. Use **_reduce_** to sum all the numbers in the numbers array.
18. Use **_reduce_** to concatenate all the countries and to produce this sentence: **_Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries_**
19. Explain the difference between **_some_** and **_every_**
20. Use **_some_** to check if some names' length greater than seven in names array
21. Use **_every_** to check if all the countries contain the word land
22. Explain the difference between **_find_** and **_findIndex_**.
23. Use **_find_** to find the first country containing only six letters in the countries array
24. Use **_findIndex_** to find the position of the first country containing only six letters in the countries array
25. Use **_findIndex_** to find the position of **_Norway_** if it doesn't exist in the array you will get -1.
26. Use **_findIndex_** to find the position of **_Russia_** if it doesn't exist in the array you will get -1.
*/

console.log("Day 9")

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//1
/*
What forEach will do is run through the higher order function for each of
the elements in the array. Map will iterate an arrays elements and modifies them.
In other words, map will map the values to new values depending on the values
in the element and returns an array.  Filer will filter out items that meet a condition
where its truthy.  Reduce will reduce the array into a single value
*/

//2
countries.forEach(function (elements, index, arr) {
    console.log(arr[index])
})


//3
//this is like the same thing as the last problem so im not gonna do it

//const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
    console.log(num)
})

//4 4. Use **_forEach_** to console.log each name in the names array.

names.forEach(function (elements, index, arr){
    console.log(arr[index])
})

//5. Use **_forEach_** to console.log each number in the numbers array.
numbers.forEach(function(num){
    console.log(num)
})

//6. Use map to create a new array by changing each country to uppecase in the countries array

const uppercaseCountries = countries.map(function (name){
    return name.toUpperCase()
})
console.log(countries)
console.log(uppercaseCountries)

//7. Use map to create an array of countries length from countries array

//literally i don't understand why you would ever want to do it like this cant you just use loop or the length command
const emptyCountries = countries.map(function (name){
    return
})
console.log(emptyCountries)

//8. Use map to create a new array byt changing each number to square in teh numbers array
const squareNums = numbers.map(function (num){
    return num*num
})
console.log(numbers)
console.log(squareNums)

//9. Use map to change to each name to uppercase in the nuames array
const changeCase = names.map(function(name){
    return name.toUpperCase()
})
console.log(changeCase)

//10. Use map to map the products array to its corresponding prices
// i dont understand what this is asking

//11. Use filter to filter out countries containing land
const alteredCountries = countries.filter((country) => !country.includes('land'))
console.log(alteredCountries)

//12
const alteredTwo = countries.filter((country) => country.length != 6)
console.log(alteredTwo)

//13
const alteredThr = countries.filter((country) => country.length < 6)
console.log(alteredThr)

//14 Use filter to filter out country starting with 'E'
const alteredFour = countries.filter(function(country){
    if(!country.includes(`E`)){
        return country
    }
})
console.log(alteredFour)

//15 Use filter to filter out only prices with values
const productsFiltered = products.filter(function(product){
    if(typeof(1) != typeof(product.price)){
        return product
    }
})
console.log(productsFiltered)

//16. Declare a function called getStringLIsts which takes an array as a parameter and then returns an array only with string items

function getStringLists(array){
    return array.map(function(value){
        return value.toString()
    })
}
console.log(getStringLists(numbers))

//17 Use reduce to sum all the numbers in the numbers array
console.log(numbers.reduce(function(total, num){
    return total + num
}))

//18 Use reduce to concatenate all the countries and to produce this sentence: --
let string = countries.reduce(function (str, country, index, arr){
    if(index !== arr.length-1){
        str = str + `, ` + country
    }
    else{
        str = str + ` and ` + country + ` are north European countries.`
    }
    return str;
})

console.log(string)

//19 Explain the difference between some and every
/*
 * Every checks if all the elements are similar and some checks if some of the elements are similar.
 * These functions both return true or false booleans depending on the outcome.  However, while some returns true
 * if some of the elements are similar, everys has to check if EVERY element is similar, it isn't just some.
 */

//20 Use some to check if some names' length greater than seven in names array
console.log(names.some((name) => name.length > 7))

//21 Use every to check if all the countries contain the word land
console.log(countries.every((country) => !country.includes(`land`)))

//22 Explain the difference between find and findIndex
/*
    Find finds the first element in an array that satisfies the condition while find index is just the find
    function but it returns the index of that element instead of the actual element.
*/

//23 Use find to find the first country containing only six letters in the countries array
console.log(countries.find((country) => country.length === 6))

//24 Use findIndex to find the position of the first country containing only six letters in the countries array
console.log(countries.findIndex((country) => country.length === 6))

//25 Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1
console.log(countries.findIndex((country) => country === `Norway`))

//26 Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1
console.log(countries.findIndex((country) => country === `Russia`))