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

//adding a button to reset coloured squares
const resetBtn = document.querySelector("#reset-button")
resetBtn.addEventListener("click", resetButton)

function resetButton() {
    squares.forEach(square =>{
        square.style.backgroundColor = "white"
    })
}
// add input for prompt tmr**
const sizeBtn = document.querySelector("#open-modal-btn")
sizeBtn.addEventListener("click", sizeButton)


//opening the modal from the change grid size button
function sizeButton() {
    openModal()
}

//button for reseting the original size of the grid
/*function sizeButton() {
    //input for grid size
    const gridSize = alert("How big would you like your grid?")
    //convert prompt string into number
    const size = parseInt(gridSize)

    if(!NaN(size) && size > 0) {
        createGrid(size)
    } else {
        alert("C'mon buddy enter a real number!")
    }
} */

const modalContainer = document.getElementById("modal-container")
const closeBtn = document.getElementById("close-button")
const openModalButton = document.getElementById("open-modal-btn")
const confirmSizeButton = document.getElementById("confirm-size-button")
const gridSizeInput = document.getElementById("grid-size-input")

//adding functionality to change gridsize button
openModalButton.addEventListener("click", openModal)

closeBtn.addEventListener("click", closeModal)
// function to open the modal
function openModal() {
    modalContainer.style.display = "block"
}

// function to close the modal
function closeModal(){
    modalContainer.style.display = "none"
}

//Making sure the modal button closes the modal as intended
window.addEventListener("click", (event) => {
    if(event.target === modalContainer) {
        closeModal()
    }
})

// allowing user to enter a number into the Gridsize input - alerting if the number is below 0
confirmSizeButton.addEventListener("click", () => {
    const newSize = parseInt(gridSizeInput.value)
    if (!isNaN(newSize && newSize > 0)){
        createGrid(newSize)
        closeModal()
    } else {
        alert("Please Enter a Valid Grid Size")
    }
})

document.body.appendChild(etchContainer)

console.log("gridContainer", gridContainer)
