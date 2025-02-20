
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

//1. Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e)
console.log(pi)
console.log(gravity)
console.log(humanBodyTemp)
console.log(waterBoilingTemp)


//2. Destructure and assign the elemtns of coutnries array to fin, est, sw, den, nor
let [fin, est, sw, den, nor] = countries
console.log(fin)
console.log(est)
console.log(sw)
console.log(den)
console.log(nor)

//3. Destructure the rectangle object by its properties or keys
let {width:w, area:a, height:l, perimeter:p} = rectangle
console.log(w)
console.log(a)
console.log(l)
console.log(p)