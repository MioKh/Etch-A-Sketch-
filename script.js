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

// change the numbers under the slider
const rangeInput = document.querySelector('.slider');
const rangeValue = document.querySelector('.slider-value');

rangeValue.textContent = `${rangeInput.value} x ${rangeInput.value}`;

rangeInput.addEventListener('input', () => {
  rangeValue.textContent = `${rangeInput.value} x ${rangeInput.value}`;
});

//tracks the color that the user choosed
const currentColor = document.querySelector('.color');
let color = currentColor.value;

currentColor.addEventListener('input', () =>{
  color = currentColor.value;
})

//change the background color of the divs using a click event listener from the parent 
const grid = document.querySelector('.grid');

grid.addEventListener('click', function(event) {
  if (event.target.classList.contains('grid-div')) { // check if the clicked element is a pixel
    event.target.style.backgroundColor = color;
  }
});

let isMouseDown = false;

grid.addEventListener('mousedown', function(event) {
  isMouseDown = true;
});

grid.addEventListener('mouseup', function(event) {
  isMouseDown = false;
});

grid.addEventListener('mousemove', function(event) {
  if (isMouseDown && event.target.classList.contains('grid-div')) {
    event.target.style.backgroundColor = color;
  }
});

// make the color equal to white when you press the eraser button 

const eraser = document.querySelector('.eraser');
eraser.addEventListener('click',() =>{
  color = "#FFFFFF";
})

// clears the canvas when you press it basically turn all divs color to white or in other way it removes the background style


const gridDivs = document.querySelectorAll('.grid-div');
gridDivs.forEach((div) => {
  div.style.backgroundColor = '#FFFFFF';
});

// clears the canvas when the button clear is pressed
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
  const gridDivs = document.querySelectorAll('.grid-div');
  gridDivs.forEach((div) => {
    div.style.backgroundColor = '#FFFFFF';
  });
});










