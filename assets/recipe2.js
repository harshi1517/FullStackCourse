const input = document.querySelector('input')
const button = document.querySelector('button')
const parent = document.querySelector('div.flexbox')

//cards for all recipes of that particular food
const getData = async (food) => {
    const url = `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${food}`
    const res = await fetch(url)
    const data = await res.json()
    data.hits.forEach(food => {
        console.log(food)
        // console.log(food.recipe)
        // console.log(food.recipe.label)
        //Destructuring
        const {recipe} = food
        const {label, image, source, calories, mealType, dishType, cuisineType} = recipe
        // console.log(label, image, source, ingredients, mealType, dishType, cuisineType)
        const template = `
              <div class="food-card-image">
                <img src="${image}">
              </div>
              <div class="food-card-content">
                <div class="food-card-food-name"><h1>${label}</h1></div>
                <div class="food-card-artist-name"><h5>By <a>${source}</a></h5></div>
                <div class="food-card-about">calories: ${calories.toFixed(2)}</div>
                <div class="about-shadow"></div>
              </div>
              <div class="food-card-food-properties">
                <div><i class="fa fa-clock-o"></i><p>${mealType}</p></div>
                <div><i class="fa fa-star" style="color:yellow"></i><p>${dishType}</p></div>
                <div><i class="fa fa-money"></i><p>${cuisineType}</p></div>
              </div>`
        const newCard = document.createElement('div.flexbox')
        newCard.setAttribute('class', 'food-card')
        newCard.innerHTML = template
        // console.log(newCard)
        parent.appendChild(newCard)
    })
}
button.addEventListener('click', () => {
   parent.innerHTML = ''
    getData(input.value)
} )
