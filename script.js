const gridContainer = document.querySelector(".container");

let mode = "hover";
console.log(mode);

const chooseMode = document.querySelector(".drawMode .buttons1");
chooseMode.addEventListener("click", e => {
    
    mode = e.target.textContent; 
    console.log(mode);
})

//2079 is the really cool size I initially had (if you wanted to use it later)
for (let i = 0; i < 256; i++) {
    const oneGrid = document.createElement("div");
    oneGrid.classList.add("grid");
    gridContainer.appendChild(oneGrid);
}


gridContainer.addEventListener("click", (e) => {
    if (mode !== "click") return;
    console.log("BUG1")
    hover(e.target);
})


gridContainer.addEventListener("mouseover", (e) => {
    if (mode !== "hover") return;
    //debug coloring outside the grid blocks
    if (e.target.classList[0] === "container") {
        return;
    }
    //debugging
    // console.log(e.target.classList[0]);
    // console.log(e.target);
    e.target.addEventListener("mouseenter", (e2) => {
        if (mode !== "hover") return;
        console.log("BUG3")
        hover(e2.target);
        // console.log(e2.target);
    })
})


function hover(target) {
    console.log("BUG2");
    // const chooseColor = document.querySelector("")
    if (color === "rainbow") {
        target.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    } else {
        target.style.backgroundColor = color;
    }
}

//a function to randomly color the round message at the header
function randomColor() {
    let res = Math.floor(Math.random() * 256);
    return res
}


function cleanBoard() {
    [...gridContainer.children].forEach(val => {
        if (val.style.backgroundColor !== "white") {
            val.style.backgroundColor = "white";
        }
    });
    let gridSize = Number(prompt("How many squares per side? (leave empty for default value)", Number(16)));
    gridSizeFull = gridSize * gridSize;
    gridContainer.replaceChildren();
    for (let i = 0; i < gridSizeFull; i++) {
    const oneGrid = document.createElement("div");
    oneGrid.classList.add("grid");
    oneGrid.style.height = `${576/gridSize}px`;
    oneGrid.style.width = `${576/gridSize}px`;
    gridContainer.appendChild(oneGrid);
    }
};

const resetButton = document.querySelector(".resetIt");

resetButton.addEventListener("click", (e) => {
    cleanBoard();
    console.log(e.target);
})


const chooseColor = document.querySelector(".chooseColor .buttons1");
let color = "purple";
chooseColor.addEventListener("click", e => {
    // console.log(e.target.textContent)
    color = e.target.textContent;
})


