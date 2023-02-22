// let i = prompt("grid size");
// let gridSize = i * i;
// let widthPercentage = 100 / i;
// console.log(widthPercentage);

// const gridContainor = document.querySelector(".grid");

// // Generate the grid divs and add them to the grid container
// for (let j = 0; j < gridSize; j++) {
//   const gridDiv = document.createElement("div");
//   gridDiv.className = "grid-div";
//   gridDiv.style.width = `${widthPercentage}%`;
//   gridDiv.style.height = `${widthPercentage}%`;
//   gridContainor.appendChild(gridDiv);
// }

const rangeInput = document.querySelector('.slider');
const rangeValue = document.querySelector('.slider-value');

rangeValue.textContent = `${rangeInput.value} x ${rangeInput.value}`;

rangeInput.addEventListener('input', () => {
  rangeValue.textContent = `${rangeInput.value} x ${rangeInput.value}`;
});

const currentColor = document.querySelector('.color');
let testee = currentColor.value;

currentColor.addEventListener('input', () =>{
  testee = currentColor.value;
  console.log(testee);
})