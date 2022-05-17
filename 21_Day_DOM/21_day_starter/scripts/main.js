// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
const testArr = document.querySelector("p");
console.log(testArr);

// Get get each of the the paragraph using document.querySelector('#id') and by their id
const testID = document.querySelector("#P2")
console.log(testID)
const testP3 = document.querySelector("#P3")
const testP4 = document.querySelector("#P4")
console.log(testP3)
console.log(testP4)

// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
// Loop through the nodeList and get the text content of each paragraph
console.log("Third questions")
const testArrOfP = document.querySelectorAll("p")
for(let i = 0; i < testArrOfP.length; i++){
    console.log(testArrOfP[i])
}

// Set a text content to paragraph the fourth paragraph,Fourth Paragraph
testArrOfP[3].textContent = 'Fourth Paragraph'

// Set id and class attribute for all the paragraphs using different attribute setting methods
testArrOfP[0].setAttribute("id", "Killooah")
testArrOfP[1].id = "paragraph2"
testArrOfP[2].className = "thisIsANewClass"
testArrOfP[3].setAttribute("class", "thisIsAlsoANewClass")

console.log(`Question 6`)
console.log(document.querySelector("#Killooah"))
console.log(document.querySelector("#paragraph2"))
console.log(document.querySelector(".thisIsANewClass"))
console.log(document.querySelector('.thisIsAlsoANewClass'))

