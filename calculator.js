
// const input1 = document.getElementsByTagName('input')[0]
// const input2 = document.getElementsByTagName('input')[1]
//or
const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]
// console.log(a, b)

const add = document.querySelector('#add')
const sub = document.querySelector('#sub')
const multi = document.querySelector('#multi')
const div = document.querySelector('#div')
const power = document.querySelector('#power')
// console.log(add, sub, multi,div)

const result = document.querySelector('.result')
// console.log(result)

// const sum = () => {
//     const ans = parseInt(a.value) + parseInt(b.value)      //a.value act like a string so to change it to int we use parseInt 
//     result.innerHTML = ans              //prints ans on veiwport
//     // result.textContent = ans
// }
// const substract = () => {
//     const ans = parseInt(a.value) - parseInt(b.value)     
//     result.innerHTML = ans           
// }
// const multiply = () => {
//     const ans = parseInt(a.value) * parseInt(b.value)     
//     result.innerHTML = ans           
// }
// const divide = () => {
//     const ans = parseInt(a.value) / parseInt(b.value)     
//     result.innerHTML = ans           
// }
// const power = () => {
//     const ans = parseInt(a.value) ** parseInt(b.value)     
//     result.innerHTML = ans           
// }

// add.addEventListener('click', sum)
// sub.addEventListener('click', substract)
// multi.addEventListener('click', multiply)
// div.addEventListener('click', divide)
// power.addEventListener('click', power)

//or

const calculate = (event, operation) => {

    // if (operation == 'add')
    // result.innerHTML = parseInt(a.value) + parseInt(b.value)     
    
    // else if (operation == 'sub')
    // result.innerHTML = parseInt(a.value) - parseInt(b.value)     

    // else if (operation == 'multi')
    // result.innerHTML = parseInt(a.value) * parseInt(b.value)     

    // else if (operation == 'div')
    // result.innerHTML = parseInt(a.value) / parseInt(b.value)     

    // else if (operation == 'power')
    // result.innerHTML = parseInt(a.value) ** parseInt(b.value)
    
    // else
    // result.innerHTML = 'Not a Valid Operation'

    //using switch case
    switch(operation){
     case 'add':
        result.innerHTML = parseInt(a.value) + parseInt(b.value)
        break
     case 'sub':
        result.innerHTML = parseInt(a.value) - parseInt(b.value)
        break
     case 'multi':
        result.innerHTML = parseInt(a.value) * parseInt(b.value)
        break
     case 'div':
        result.innerHTML = parseInt(a.value) / parseInt(b.value)
        break
     case 'power':
        result.innerHTML = parseInt(a.value) ** parseInt(b.value)
        break
     default:
        result.innerHTML = 'Not a Valid Operation'
    }
}
add.addEventListener('click', (event) =>  calculate(event, 'add'))
sub.addEventListener('click', (event) =>  calculate(event, 'sub'))
multi.addEventListener('click', (event) =>  calculate(event, 'multi'))
div.addEventListener('click', (event) =>  calculate(event, 'div'))
power.addEventListener('click', (event) =>  calculate(event, 'power'))

