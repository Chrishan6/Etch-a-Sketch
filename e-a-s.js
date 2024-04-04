const etchContainer = document.querySelector("#etch-container")

const gridContainer = document.querySelector("#grid-container")


//creating the grid size
function createGrid(size) {
    //loop to generate the squares in the grid
    for(let i = 0; i < size * size; i++) {
        //setting up square div for css
        const square = document.createElement("div")
        square.classList.add("square")
        gridContainer.appendChild(square)
    }
}

document.body.appendChild(etchContainer)

const squares = document.querySelector(".square")

//to determine if mouse is dragging or not
let isDrawing = false

createGrid(8)

console.log("gridContainer", gridContainer)