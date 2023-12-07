const duckNavELement = document.getElementById('duck-nav')
const url = 'http://127.0.0.1:4000/ducks'
const detailName = document.getElementById('duck-display-name')
const detailImage = document.getElementById('duck-display-image')
const detailLikes = document.getElementById('duck-display-likes')
const newDuckForm = document.getElementById('new-duck-form')
 let currentDuck

init(url)
    .then(r => r.json())
    .then(ducks => {
        ducks.map(duck =>{
            renderDuckImage(duck)
        })
    })

function renderDuckImage(duck){
    console.log(duck)
    const imgElement = document.createElement('img')
    imgElement.src = duck.img_url
    duckNavELement.append(imgElement)

    imgElement.addEventListener('click', () =>{
        displayDetail(duck)
    })

}

function init(url){
   return fetch(url)
}

function displayDetail(duck){
    currentDuck = duck
    detailName.textContent = duck.name
    detailImage.src = duck.img_url
    detailLikes.textContent = duck.likes + ' likes'
}

function likeIncrementor(){
    detailLikes.addEventListener('click', () =>{
        currentDuck.likes += 1
        detailLikes.textContent = Number(currentDuck.likes) + ` likes`
    })
}
likeIncrementor()

function handleNewDuck(){
    newDuckForm.addEventListener('submit', (e) =>{
        //capture value of input fields with e.target index.value
        //call renderimage function add like button starts with 0(number) likes, string interpolate
        e.preventDefault()
        let newDuck = {
            name: e.target[0].value,
            img_url: e.target[1].value,
            likes: Number(0) 
        }
        renderDuckImage(newDuck)
    })
}

handleNewDuck()

//diff bttw putting function on e vs in body