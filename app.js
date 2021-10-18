//scopes 
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

let car2 = {
    name:'A class',
    manufacturer: 'lamborgini',
    print:function(){
        // let manufacturer = 'BMW'
        console.log(this)
        console.log(manufacturer)
        }
}
car2.print()










