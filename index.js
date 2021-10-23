console.log('something')    //use node index.js to run on terminal 
for (var i = 0; i < 5; i++)
{
    console.log('iteration', i+1)
}
// console.log(document)  //it will not run here because it is a part of chrome [DOM API]
// console.log(window)   //it will not run here because it is a part of chrome [DOM API]

setTimeout(() => {      //it will run here because it is a part of v8 engine
    console.log('hello')
}, 2000)


//MODULE - it holds our incapsulated data or file that may be function,text or actual piece of code or anything executable
//console.log(module)   //it will run here and give error in chrome

const greet = () => 'hye' // function

module.exports.something = 'hi'        //we can use any of these syntax to export texts
// module.exports['something'] = 'hi'
// console.log(module.exports)

module.exports.greeting = greet   //to export a function in module 
// console.log(module.exports)

//
const add = () => {
    console.log('i am add')
}
const subs = () => {
    console.log('i am substract')
}
module.exports.addition = add
module.exports.substraction = subs 
// console.log(module.exports)