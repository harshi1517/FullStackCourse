//LOCAL STORAGE
// localStorage.setItem('inputvalue', 'something')  //to set in localstorage
// console.log(localStorage.getItem('inputvalue'))  //to get from localstorage
// localStorage.clear()   //to clear localstorage

const arr = [1,2,3,4,5]
// localStorage.setItem('val', arr)
// console.log(localStorage.getItem('val'))   //will not get stored as array, it will get stored as string
// console.log(typeof (localStorage.getItem('val')))  //output - string      //1,2,3,4,5 

const con = JSON.stringify(arr)  //JSON.stringify converts the array to string
// console.log(con)  //output will be string that looks like an array. output -  [1,2,3,4,5] 

localStorage.setItem('val', con)  //it will store like an array in application
// console.log(localStorage.getItem('val'))  //on console output will be string that looks like an array.
console.log(JSON.parse(localStorage.getItem('val')))  //JSON.parse converts the string intoarray. on console output will be an array.


//
// const input = document.querySelector('input')
// const button = document.querySelector('button')
// const div = document.querySelector('div')

// div.innerHTML = localStorage.getItem('inputvalue')  // this will store the value so tha if we refresh the page, the value will not get vanished

// button.addEventListener('click', (req, res) => {
//     localStorage.setItem('inputvalue', input.value)  //this will set the value
//     div.innerHTML = input.value
// })
