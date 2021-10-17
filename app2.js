//Dom method - addEvent Listner
var button = document.querySelector('button')
var input = document.querySelector('input')
var list = document.querySelector('ul')
console.log (button, input, list)

// const callbackfun = () => {
//     console.log('harshi')     //on clicking on add button, harshi will be seen at console
// }
// button.addEventListener('click', callbackfun)


// const callbackfun = (event) => {
//     console.log(event)        // it will give pointerevent (all informationabout the event click)
// }
// button.addEventListener('click', callbackfun)


// const callbackfun = (event) => {
//     console.log(event.target)
//     console.log(input.value)
// }
// button.addEventListener('click', callbackfun)


// const callbackfun = (event) => {
//     const inputValue = input.value
//     const element = document.createElement('li')
//     const textNode = document.createTextNode(inputValue)
//     element.appendChild(textNode)
//     list.appendChild(element)
// }
// button.addEventListener('click', callbackfun)


var body = document.querySelector('body')
var button = document.querySelector('button')

const callbackfun = (event) => {
    body.classList.toggle('dark')
    // body.classList.add('dark')
    // body.classList.remove('dark')
}
button.addEventListener('click', callbackfun)