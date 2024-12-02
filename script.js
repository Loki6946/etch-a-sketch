const gridContainer = document.querySelector("#grid-container");
const setGridButton = document.querySelector("#set-grid");
const resetGridButton = document.querySelector("#reset-grid");

function generateGrid(size) {
  for (let i = 0; i < (size * size); i++) {
    const item = document.createElement("div");
    item.setAttribute("id", "grid-item");
    item.classList.add("grid-item");
    item.style.setProperty("flex-basis", `calc(100% / ${size})`);
    gridContainer.appendChild(item);
  }

  const gridItems = document.querySelectorAll("#grid-item");

  gridItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      item.style.backgroundColor = "#252525";
    })
  });

  resetGridButton.addEventListener("click", () => {
    gridItems.forEach(item => {
      item.style.backgroundColor = "#ffffff";
    })
  })
}

generateGrid(16);

function setGrid() {
  const userInput = prompt("Enter grid size (grid size must be less than 100");
  if (userInput > 100 || typeof userInput === "string") {
    alert("input must be number and less than 100");
    return;
  } else {
    gridContainer.textContent = "";
    generateGrid(userInput);
  }
}

setGridButton.addEventListener("click", setGrid);