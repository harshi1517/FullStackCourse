//document.getElementsByClassName //document is an object,  getElementsByClassName is a method

console.log("hello world")

var heading = document.getElementById("heading")
console.log(heading)
console.log(typeof heading)
heading.innerHTML = "Hi from JS"   // will change the element in the tag
heading.style = "color:blue;font-size:2rem"   // style 
console.log(heading)

var para = document.getElementsByClassName("para")
console.log(para)
console.log(para.length)
console.log(para[0])
console.log(para[1])

var tags = document.getElementsByTagName("p")
console.log(tags)

var qi = document.querySelector("#heading")
console.log(qi)
var qc = document.querySelector(".para")
// var qc = document.querySelectorAll(".para")
console.log(qc)

console.log("class List", para3.classList)
heading.classList.add('four')
heading.classList.remove('two')