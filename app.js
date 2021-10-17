//FUNCTIONS
function greet(Name, age){
    console.log("HELLO!")
    console.log(Name, age)
}
greet("Harshita", 20)

function greet(Name, age){
    console.log("HELLO! " + Name)
    console.log(age)   //in place of age it will show undefined
}
greet("Harshita")


function sum(a, b){
    console.log("a+b=", a+b)
}
sum(15,17)

function sum(a, b){
    console.log("a+b=", a+b)
}
sum(15)


function add(a, b){
    return  a+b
}
console.log("a+b=", add(18, 2))
//or
function add(a, b){
    var sum = a+b
    return  sum
}
var result = add(5, 7)
console.log("a+b=", result)

//above are function keyword declaration(normal declaration) and
// in below one we change it to a function expression
var add = function(a=0, b=0){
    return a+b
}
console.log("a+b=", add(50, 20))  //if this console.log will be placed above this function then it will throw an error

//ARROW FUNCTION
var add = (a=0, b=0) => {
    return a+b
}
//or
//var add = (a, b) => a+b
console.log("a+b=", add(50, 20))

var greet = (Name, age) => {
    console.log("HELLO!")
    console.log(Name, age)
}
greet("Harshita", 20)
//or
var greet = Name => 'hi '+ Name
console.log(greet("Harshita"))

//CALL BACK FUNCTION
var arr = ['study', 'workout', 'project']
// for(var i = 0; i < arr.length; i++)
// {
//     console.log(arr[i])
// }
var callbackFunction = () => {
    console.log('assignment')}
arr.forEach(callbackFunction)

var callbackFunction = (element) => {
    console.log(element)}
arr.forEach(callbackFunction)

var callbackFunction = (element, index) => {
    console.log(element, index)}
arr.forEach(callbackFunction)
//or
arr.forEach((element, index) => {
    console.log(element, index)
})

