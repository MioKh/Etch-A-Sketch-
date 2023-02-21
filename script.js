let i = prompt("grid size");
let gridSize = i * i;
let widthPercentage = 100 / i;
console.log(widthPercentage);

const gridContainor = document.querySelector(".grid");

// Generate the grid divs and add them to the grid container
for (let j = 0; j < gridSize; j++) {
  const gridDiv = document.createElement("div");
  gridDiv.className = "grid-div";
  gridDiv.style.width = `${widthPercentage}%`;
  gridDiv.style.height = `${widthPercentage}%`;
  gridContainor.appendChild(gridDiv);
}