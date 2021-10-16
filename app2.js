console.log("HYE")

var para = document.getElementById("para")
console.log(para)

//dark and light 
var body = document.querySelector('body')
body.classList.add('dark')
body.classList.remove('dark')

//
var list = document.querySelector("ul")
console.log(list)

//traversal of a array
// var arr = ['study', 'workout', 'project']
// for(var i = 0; i < arr.length; i++)
// {
//     console.log(arr[i])
// }

var arr = ['study', 'workout', 'project']

arr.push('complete the assignment')

for(var i = 0; i < arr.length; i++)
{
    var element = document.createElement('li')
    var textNode = document.createTextNode(arr[i])
    // console.log(textNode)
    element.appendChild(textNode)  //appending text to li
    list.appendChild(element)    //appending li to ul
}