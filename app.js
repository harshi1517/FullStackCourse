const list = document.querySelector('ul')

//deleting element from veiwport
var arr = [1, 2, 3, 4]
arr.forEach((chore => {
    const element = document.createElement('li')
    const textNode = document.createTextNode(chore)
    element.appendChild(textNode)
    element.addEventListener('click', (e) => {
        console.log(e.target.innerHTML)
        const index = arr.indexOf(chore)
        arr.splice(index, 1)     //will remore from array
        e.target.remove()       //will remove from veiwport
    })
    list.appendChild(element)
}))

arr.forEach((chore => {
    const element = document.createElement('li')
    const textNode = document.createTextNode(chore)
    element.appendChild(textNode)
    element.addEventListener('click', (e) => {
        const userInput = window.prompt(`Are you sure you want to delete ${chore} ?`)
        if(userInput == 'YES' || userInput == 'yes' || userInput == 'Yes')
        e.target.remove()
    })
    list.appendChild(element)
}))



