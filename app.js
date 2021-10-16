console.log("Hello world")
console.warn("Hello warning")
console.error("Hello Error")

//primitive datatypes
//string
console.log("Hello world")
console.log(typeof "Hello world")

//numbers
console.log( 1)
console.log(typeof 0)
console.log(typeof 1)
console.log( 121.2535)
console.log(typeof 121.2535)
console.log(typeof 1541254412258789)
console.log(typeof -1)

//boolean
console.log(true)
console.log(false)
console.log(typeof false)

//undefined and null
var age = 20
console.log(age)
console.log(typeof age)
var roll
console.log(roll)
console.log(typeof roll)
var roll = null
console.log(roll)
console.log(typeof roll)
//console.log(name)  --> give error bcz name is not defined

//const and reassign
var num = 15
num = 17      //reassign
console.log(num)

const n = 1517    // we can not change this
console.log(n)


//non-primitive datatypes
var arr1 = [1, 2, 3, 4]   //doubt- while using push, it is showing 5 elements in array
console.log(arr1)
console.log(typeof arr1)
console.log(arr1.length)
// arr1.push(5)
// console.log(arr1)

var arr2 = [1, 2, 3, 4, "hye"]
console.log(arr2)

//operators
//arithmetic operator
var a = 5
var b = 7
console.log('a+b=', a+b)
console.log('a-b=', a-b)
console.log('a*b=', a*b)
console.log('a**b=', a**b)
console.log('a/b=', a/b)
console.log('a%b=', a%b)

//assignment
console.log('b = ', b)
console.log('b+=10 ', b+=10)
console.log('b++ ', b++)
console.log('b-- ', b--)
console.log('b+=5 ', b+=5)
console.log('b-=3 ', b-=3)

//comparision operator --> always return a boolean 
var d =  10
var e = 5
var f = '10'
console.log('d>e', d>e)
console.log(d>=e)
console.log('d<e', d<e)
console.log(d<=e)
console.log(d == e)

console.warn(d == f)
console.warn(d === f)
console.warn(d + f)

//logical operator
console.log('true && true', true&&true)
console.log('true && false', true&&false)
console.log('false && false', false&&false)

console.log('true || true', true||true)
console.log('true || false', true||false)
console.log('false || false', false||false)
