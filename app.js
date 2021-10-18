console.log('one')    
setTimeout( () => {console.log('timer 1')}, 2000)
setTimeout( () => {console.log('timer 2')}, 1000)
setTimeout( () => {console.log('timer 3')}, 3000)
console.log('two')

//PROMISE
let value = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('Hello')
        // reject('Rejected')
    }, 7000)
})
console.log(value)
setTimeout(() => {console.log(value)}, 5000)

//fetch
let data = fetch('https://jsonplaceholder.typicode.com/users')
console.log(data)    //still we dont get the actual data
setTimeout(() => {console.log(data)}, 2000)  

//.then
let responce = fetch('https://jsonplaceholder.typicode.com/users').then(data => {
    console.log(data)                
})

// let responce1 = fetch('https://jsonplaceholder.typicode.com/users').then(res => {
//     let parsedData = res.json()
//     console.log(parsedData)
//     console.log(res)
// })

// let responce1 = fetch('https://jsonplaceholder.typicode.com/users').then(res => {
//     let parsedData = res.json()
//     console.log(parsedData)
//     return(parsedData)   //we are returning it so that in next .then we have access to it
// }).then(data => {console.log(data)})

//we can also write the upper code(33-37) as
let responce1 = fetch('https://jsonplaceholder.typicode.com/users').then(res => 
    res.json()).then(data => {console.log(data)})