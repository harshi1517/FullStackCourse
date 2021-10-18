// array method

var arr = [1,2,3,4,5,6]
//arr.push(5)      //add the element in end
arr.unshift(5)      //add the element in begining
console.log(arr)
// console.log(arr.push(6))

// arr.shift()         //removes the first element

var new_arr = arr.slice(2, 4)     //arr.slice will not change the original array
console.log(new_arr)             //it will returt a new array starting with index 2(included) till index 4(excluded)

arr.splice(5, 1)             //it will remove the element at index 3, and the 2nd parameter is num of element to remove     
console.log(arr)


//store even num in arr2
var arr2 = []
for (var i = 0;  i < arr.length; i++) {
    if(arr[i] % 2 == 0)
    arr2.push(arr[i]) 
}
console.log(arr2)

//for these operation there is a filter method in array
arr.filter((element, index) => {
    console.log(element, index)    //will return all elements of array with index
})

var arr3 = arr.filter((element) => {
    if(element % 2 == 0) return true
})
console.log(arr3)           //will return new array with even nums







