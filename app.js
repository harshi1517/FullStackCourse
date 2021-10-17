//functions
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

function add(a, b){
    var sum = a+b
    return  sum
}
var result = add(5, 7)
console.log("a+b=", result)
