const input = document.querySelector('input')
const button = document.querySelector('button')
const parent = document.querySelector('div.flexbox')

//cards for all recipes
const getData = async (food) => {
    const url = `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${food}`
    const res = await fetch(url)
    const data = await res.json()
    data.hits.forEach(food => {
        // console.log(food)
        const template = `
              <div class="food-card-image">
                <img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
              </div>
              <div class="food-card-content">
                <div class="food-card-food-name"><h1>Great Gatsby</h1></div>
                <div class="food-card-artist-name"><h5>By <a>Jewel</a></h5></div>
                <div class="food-card-about">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo suscipit, minus neque tempore eaque qui, esse excepturi aliquid facilis quos placeat voluptatum dicta animi enim? Qui cumque ut repellat sint.
                <div class="about-shadow"></div>
              </div>
              <div class="food-card-food-properties">
                <div><i class="fa fa-clock-o"></i><p>5 min</p></div>
                <div><i class="fa fa-star" style="color:yellow"></i><p>4.2(121 votes)</p></div>
                <div><i class="fa fa-money"></i><p>$ 20</p></div>
              </div>`
        const newCard = document.createElement('div.flexbox')
        newCard.setAttribute('class', 'food-card')
        newCard.innerHTML = template
        console.log(newCard)
        parent.appendChild(newCard)
    })
}
button.addEventListener('click', () => {
    getData(input.value)
} )
