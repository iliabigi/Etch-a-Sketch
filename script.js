const gridContainer = document.querySelector(".container");

//2079
for (let i = 0; i < 2079; i++) {
    const oneGrid = document.createElement("div");
    oneGrid.classList.add("grid");
    gridContainer.appendChild(oneGrid);
}

gridContainer.addEventListener("mouseover", (e) => {
    //debug coloring outside the grid blocks
    if (e.target.classList[0] === "container") {
        return;
    }

    console.log(e.target.classList[0]);
    console.log(e.target);
    e.target.addEventListener("mouseenter", (e2) => {
        hoverRed(e2.target);
        // console.log(e2.target);
    })
})

// gridContainer.addEventListener("click", (e) => {
//     hover(e.target);
// })

function hoverRed(target) {
    target.style.backgroundColor = "red";
}

