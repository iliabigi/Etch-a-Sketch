const gridContainer = document.querySelector(".container");

for (let i = 0; i < 2046; i++) {
    const oneGrid = document.createElement("div");
    oneGrid.classList.add("grid");
    gridContainer.appendChild(oneGrid);
}

gridContainer.addEventListener("mouseover", (e) => {
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

