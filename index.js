document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // ADD CODE HERE!
  arrowHandler()
  moveButtonHandler()
  
})

const arrowHandler = () => {
    document.addEventListener("keydown", function(e){
        const newLi = document.createElement('li')

        console.log(e.key)
        if (e.key === "ArrowUp"){
            newLi.textContent = "up"
        } else if (e.key === "ArrowDown"){
            newLi.textContent = "down"
        } else if (e.key === "ArrowLeft"){
            newLi.textContent = "left"
        } else if (e.key === "ArrowRight"){
            newLi.textContent = "right"
        }

        if (newLi.textContent) {
            const parentUl = document.querySelector("#moves-container")
            parentUl.append(newLi)
        }
    })
}

const moveButtonHandler = () => {
    const moveButton = document.querySelector('button#move-button')
}
