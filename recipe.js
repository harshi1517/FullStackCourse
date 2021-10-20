//RECIPE APP

const input = document.querySelector('input')
const button = document.querySelector('button')
const parent = document.querySelector('div.cards')

//making cards of the recipes
//below code will only make one card  
// const getData = async (food) => {
//     const url = `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${food}`
//     const res = await fetch(url)
//     const data = await res.json()
//     data.hits.forEach(recipe => {
//         console.log(recipe)
//         const template = `<div class="card">
//         <img class="card__image" src="https://images.unsplash.com/photo-1481070414801-51fd732d7184?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" alt="">
//         <div class="card__content">
//           <div class="card__header">
//             <h4 class="card__title">Ham Sandwich</h4>
//             <span class="card__price">$10.50</span>
//           </div>
//           <p class="card__text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
//         </div>
//         </div>`
//        //parent.appendChild(card)   //it will give an error
//        parent.innerHTML = template  //will give only one card
//     })
// }

//cards for all recipes
const getData = async (food) => {
    const url = `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${food}`
    const res = await fetch(url)
    const data = await res.json()
    data.hits.forEach(food => {
        // console.log(food)
        const template = `
        <img class="card__image" src="https://images.unsplash.com/photo-1481070414801-51fd732d7184?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" alt="">
        <div class="card__content">
          <div class="card__header">
            <h4 class="card__title">Ham Sandwich</h4>
            <span class="card__price">$10.50</span>
          </div>
          <p class="card__text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
        </div>`
        const newCard = document.createElement('div.cards')
        newCard.setAttribute('class', 'card')
        newCard.innerHTML = template
        console.log(newCard)
        parent.appendChild(newCard)
    })
}
button.addEventListener('click', () => {
    getData(input.value)
} )
