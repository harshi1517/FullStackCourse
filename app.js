
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



