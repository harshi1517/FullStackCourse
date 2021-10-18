//SCOPES 
let a = 40
var b = 30

if(true){
    var Name1 = "harshi"
}
console.log(Name1)        //it will print harshi on console bcz var is a global scope

// if(true){
//     let Name2 = "harshita"
// }
// console.log(Name2)      //it will give error bcz let is a block scope
//similary it will happen with for loop

if(true){
    var Name3 = "har"
    if(true)
    console.log(Name3)        //will print
}

const print = () =>{
    var Name4 = 'lm'
    if(true){
    console.log(Name4)}   //will print
    return Name4
}  
print()                        
// console.log(Name4)  //will give an error,in function global scope does not exists


//this is an object and points to a parent object and right now parent object is this window
// console.log(this)
// console.log(this.alert('Hi'))


//TO MAKE AN OBJECT
let car = {
    name:'c class',
    manufacturer: 'Mercedes'
}
console.log(car)
console.log(typeof car)
// console.log(car.name)
// console.log(car.manufacturer)

//Function inside a object is called method
let bus = {
    name:'B class',
    manufacturer: 'TATA',
    print1:function(){
        console.log(bus)
    },
    print2:function(a){
        console.log(a)
    }
}
bus.print1()
bus.print2('ferrari')

let manufacturer = 'xyz'
let car2 = {
    name:'A class',
    manufacturer: 'lamborgini',
    print:function(){
        let manufacturer = 'BMW'
        console.log(this)
        console.log(manufacturer)      //will not points to the property pf car2
        console.log(car2.manufacturer)   //will points to the property pf car2
        console.log(this.manufacturer)   //we can also use this
        console.log(this.name + ' was created by' + this.manufacturer)
    }
}
car2.print()

//Templates(`${ } ...`) and diff in arrow fun and fun declaration
let car3 = {
    name:'B class',
    manufacturer: 'TATA',
    print1: function() {
        console.log(this)
        console.log(`${this.name} was created by ${this.manufacturer}`)
    },
    print2: () => {
        console.log(this)
        console.log(`${this.name} was created by ${this.manufacturer}`)
    }
}
car3.print1()
car3.print2()
console.log(car3.hasOwnProperty('name'))    //it will check weather name is a property of object car or not

//object methods
console.log(Object.keys(car3))   //here Object is a global object
console.log(Object.values(car3))  //keys and values are methods of Object
console.log(Object)


setTimeout(() => {
    console.log('setTimeOut Hye')       //executes after 2000 milliseconds
}, 2000)
console.log('Hii')        //executes first

//PROMISES
var data = fetch('https://jsonplaceholder.typicode.com')
console.log(data)








