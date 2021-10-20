
const input = document.querySelector('input')
const button = document.querySelector('button')
// const div = document.querySelector('div')

// const callbackfun = (event) => {
//     const inputvalue = input.value
//     const element = document.createElement('div')
//     const textnode = document.createTextNode(inputvalue)
//     element.appendChild(textnode)
//     div.appendChild(element)
// }
// button.addEventListener('click', callbackfun)

//RECIPE APP
//to get the recipe of pizza on console
const getData = async () => {
    const url = 'https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=Pizza'
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
}
button.addEventListener('click', () => {
    getData()
} )

//to get the recipe of the input which we give in input text box 
const getData1 = async (food) => {
    const url = `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${food}`
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data)
    // console.log(data.hits)
    data.hits.forEach(recipe => {
        console.log(recipe)
    })
}
button.addEventListener('click', () => {
    getData1(input.value)
} )