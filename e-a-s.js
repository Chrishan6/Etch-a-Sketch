const etchContainer = document.querySelector("#etch-container")

const gridContainer = document.querySelector("#grid-container")

etchContainer.appendChild(gridContainer)


//creating the grid size
function createGrid(size) {
    gridContainer.style.setProperty("--grid-columns", size)
    gridContainer.style.setProperty("--grid-rows", size)

    //remove any pre-existing squares (if any)
    gridContainer.innerHTML = ""

    //loop to generate the squares in the grid
    for(let i = 0; i < size * size; i++) {
        //setting up square div for css
        const square = document.createElement("div")
        square.classList.add("square")
        gridContainer.appendChild(square)
    }
}

createGrid(20)

const squares = document.querySelectorAll(".square")

//to determine if mouse is dragging or not
let isDrawing = false

function handleHover(square) {
    //change colour when hovering over with mouse
    square.addEventListener("mouseenter", () => {
        if (isDrawing) {
            square.style.backgroundColor = "white"
        } else {
            square.style.backgroundColor = "blue"
        }
    })

    square.addEventListener("mouseleave", () =>{
        if (!square.classList.contains("hovered")) {
            square.style.backgroundColor = "white"
        }
    })
}


//clicking functionality to make sure the squares remain painted when dragging the mouse

//clicking square
function handlePaint(square){
square.addEventListener("mousedown", () =>{
    isDrawing = true
    square.classList.add("hovered")   
})
//while not pressing down
square.addEventListener("mouseup", () =>{
    isDrawing = false
})

//dragging while pressing down
square.addEventListener("mousemove", () => {
    if(isDrawing = true){
        square.style.backgroundColor = "blue"
        square.classList.add("hovered")
    }
})
}

//attaching handleHover and handlePaint to each square
squares.forEach(square => {
   handleHover(square)
   handlePaint(square)
});



document.body.appendChild(etchContainer)

console.log("gridContainer", gridContainer)
