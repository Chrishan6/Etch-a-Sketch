const container = document.querySelector("container")

//creating the grid size
function createGrid(size) {

    const totalSquares = size * size

    //creating new div classes for css
    container.style.display = "grid"
    //this allows me to set the style of the grid, and embed the size variable 
    //to be repeated 16 times using 1fr
    container.style.gridTemplateColumns = "repeat($(size), 1fr)"

    //loop to generate the squares in the grid
    for(let i = 0; i < totalSquares; i++) {
        //setting up square div for css
        const square = document.createElement("div")
        square.classList.add("square")
        container.appendChild("square")
    }
}

createGrid(8)