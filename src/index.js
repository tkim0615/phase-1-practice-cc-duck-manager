// write your code here!
let currentDuck
fetch('http://127.0.0.1:3000/ducks')
.then(resp => resp.json())
.then(duckList => {
    duckList.forEach(duck => {
            renderInNav(duck)
       

        
    })


    const duckButtonElement = document.getElementById('duck-display-likes')
    duckButtonElement.addEventListener('click', e => {
        let currentLikes = Number(duckButtonElement.textContent.split(' ')[0])
        currentLikes += 1
        duckButtonElement.textContent = currentLikes + ' likes'
    })

    const newDuckForm = document.getElementById('new-duck-form')
    newDuckForm.addEventListener('submit', e => {
        e.preventDefault()
        const newDuckInfo = {
            name: e.target[0].value,
            img_url: e.target[1].value,
            likes: 0
        }
        renderInNav(newDuckInfo)
    })
})


function renderInNav(duck){
    currentDuck = duck
const duckNavElement = document.getElementById('duck-nav')

const imgElement = document.createElement('img')
imgElement.src = duck.img_url
duckNavElement.appendChild(imgElement)


imgElement.addEventListener('click', e => {
    const duckNameElement = document.getElementById('duck-display-name') 
    const duckImageElement = document.getElementById('duck-display-image')
    const duckButtonElement = document.getElementById('duck-display-likes')

    duckNameElement.textContent = duck.name
    duckImageElement.src = duck.img_url
    duckButtonElement.textContent = duck.likes + ' likes'

})
}