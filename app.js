//document.getElementsByClassName //document is an object,  getElementsByClassName is a method

console.log("hello world")

var heading = document.getElementById("heading")
console.log(heading)
console.log(typeof heading)
heading.innerHTML = "Hi from JS"
console.log(heading)

var para = document.getElementsByClassName("para")
console.log(para)
console.log(para.length)
console.log(para[0])
console.log(para[1])

var tags = document.getElementsByTagName("p")
console.log(tags)

var q = document.querySelector("#heading")
var q = document.querySelectorAll(".para")
console.log(q)