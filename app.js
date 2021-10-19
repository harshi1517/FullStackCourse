const list = document.querySelector('ul')

//deleting element from veiwport
var arr = [1, 2, 3, 4]
arr.forEach((chore => {
    const element = document.createElement('li')
    const textNode = document.createTextNode(chore)
    element.appendChild(textNode)
    element.addEventListener('click', (e) => {
        console.log(e.target.innerHTML)
        const index = arr.indexOf(chore)
        arr.splice(index, 1)     //will remore from array
        e.target.remove()       //will remove from veiwport
    })
    list.appendChild(element)
}))

//window prompt
arr.forEach((chore => {
    const element = document.createElement('li')
    const textNode = document.createTextNode(chore)
    element.appendChild(textNode)
    element.addEventListener('click', (e) => {
        const userInput = window.prompt(`Are you sure you want to delete ${chore} ?`)
        if(userInput == 'YES' || userInput == 'yes' || userInput == 'Yes')
        {
            const index = arr.indexOf(chore)
            arr.splice(index, 1) 
            e.target.remove()
        }
    })
    list.appendChild(element)
}))

//PROMISE
let value = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello World')
    }, 3000)
})
console.log(value)

//promise with .then
let val = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello World')
    }, 3000)  
})
val.then(val => {console.log(val)})

//fetch and geting the data on console
let responce = fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => {
       console.log(data)     //returning in form of array
       data.forEach(user => {console.log(user)}) //returning in form of object  
    })   

//fetch and geting the data on veiwport in a table
// const table = document.querySelector('table')
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(user => {
//         let newRow = document.createElement('tr')
//         let id = document.createElement('th')
//         let idtextnode = document.createTextNode(user.id)
//         id.appendChild(idtextnode)
//         newRow.appendChild(id)
//         table.appendChild(newRow)
//         })
//     })  // by this way we have to make the codes for name email userid also and 
        //  it will become so lengthy so, we can use templates. 

// const table = document.querySelector('table')
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(user => {
//         let newRow = document.createElement('tr')
//         let element = `<td>${user.id}</td>
//             <td>${user.name}</td> 
//             <td>${user.email}</td> 
//             <td>${user.username}</td>  `
//         newRow.innerHTML = element
//         table.appendChild(newRow)
//         })
//     })

//we can put the code in a function so that we can reuse it if needed
const createRow = (user) => {
    let newRow = document.createElement('tr')
        let element = `<td>${user.id}</td>
            <td>${user.name}</td> 
            <td>${user.email}</td> 
            <td>${user.username}</td>  `
        newRow.innerHTML = element
        return newRow
}
const table = document.querySelector('table')
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        data.forEach(user => {
        table.appendChild(createRow(user))
        })
    })


//we can use await in place of promises
//await is only valid in async function
const fetchData = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
}
fetchData()



const input = document.querySelector('input')
const button = document.querySelector('button')
const div = document.querySelector('div')

const callbackfun = (event) => {
    const inputvalue = input.value
    const element = document.createElement('div')
    const textnode = document.createTextNode(inputvalue)
    element.appendChild(textnode)
    div.appendChild(element)
}
button.addEventListener('click', callbackfun)