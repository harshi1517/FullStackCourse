var button = document.querySelector('button')
var input = document.querySelector('input')
var list = document.querySelector('ul')
console.log(button, input, list)

// const callbackfun = (event) => {
//     const inputValue = input.value
//     const element = document.createElement('li')
//     const textNode = document.createTextNode(inputValue)
//     element.appendChild(textNode)
//     list.appendChild(element)
// }

// const callbackfun = (event) => {
//     const inputValue = input.value
//     const element = document.createElement('li')
//     const textNode = document.createTextNode(inputValue)
//     element.appendChild(textNode)
//     // element.setAttribute('id', '')       //it will give id to each element of the list
//     list.appendChild(element)
//     // element.addEventListener('click', () => {
//     //     console.log('clicked')                //on clicking on the list element, it will show clicked in console     
//     // })
//     element.addEventListener('click', (e) => {
//         console.log(e.target.innerHTML)          //on clicking on the list element, it will show that element in console 
//     })
// }

//to avoid  duplicates and adding a function called deleteitems / saving the index of element clicked for deleting / delete the element
var chores = []
var deleteitems = (e, value) => {
    // console.log(value)
    const index = chores.indexOf(value)      //it will get the index of clicked element
    console.log(index) 
    chores.splice(index, 1)   
    // console.log(chores)  
    e.target.remove()

}
const callbackfun = (event) => {
    const inputValue = input.value              //.value takes the input
    if(chores.includes(inputValue)){
        console.log('Already exists')
    }
    else{
       chores.push(inputValue)
       const element = document.createElement('li')
       const textNode = document.createTextNode(inputValue)
       element.appendChild(textNode)
       list.appendChild(element)
       element.addEventListener('click', (e) => {
       deleteitems(e, e.target.innerHTML)  })         //calling deleteitems function
    } 
}
button.addEventListener('click', callbackfun)




// var body = document.querySelector('body')
// var button = document.querySelector('button')

// const callbackfun = (event) => {
//     body.classList.toggle('dark')
//     // body.classList.add('dark')
//     // body.classList.remove('dark')
// }
// button.addEventListener('click', callbackfun)