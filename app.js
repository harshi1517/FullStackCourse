
// const input1 = document.getElementsByTagName('input')[0]
// const input2 = document.getElementsByTagName('input')[1]
//or
const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]
console.log(a, b)

const add = document.querySelector('#add')
const sub = document.querySelector('#sub')
const multi = document.querySelector('#multi')
const div = document.querySelector('#div')
console.log(add, sub, multi,div)

const result = document.querySelector('.result')
console.log(result)

const sum = () => {
    const ans = parseInt(a.value) + parseInt(b.value)      //a.value act like a string so to change it to int we use parseInt 
    result.innerHTML = ans              //prints ans on veiwport
    // result.textContent = ans
}
const substract = () => {
    const ans = parseInt(a.value) - parseInt(b.value)     
    result.innerHTML = ans           
}
const multiply = () => {
    const ans = parseInt(a.value) * parseInt(b.value)     
    result.innerHTML = ans           
}
const divide = () => {
    const ans = parseInt(a.value) / parseInt(b.value)     
    result.innerHTML = ans           
}

add.addEventListener('click', sum)
sub.addEventListener('click', substract)
multi.addEventListener('click', multiply)
div.addEventListener('click', divide)
