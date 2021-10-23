// console.log(module)

/*REQUIRE - export the object of the file whose file name is given 
and also execute the other codes */

// console.log(require('./index.js'))  
// const stuff = require('./index.js')
// console.log(stuff)      //runs all the codes of index.js file

const {addition, substraction, greeting, something} = require('./index.js')
addition()
substraction()    //runs all the codes of index.js and the it will execute the function
greeting()
console.log(something)

