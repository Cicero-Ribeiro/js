/**
 * Events aplenty.
 * @link https://developer.mozilla.org/en-US/docs/Web/Events
 *
 * My start with JS
 * because all history has a begin
 *
 * CR 3rd Feb, 2022
 */

const makeTheGrid = (rows, cols) => {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  for (let c = 0; c < (cells); c++) {
    let container_nr = c + 1;
    array_of_cells[c] = document.createElement("div");
    array_of_cells[c].innerText = container_nr;
    container.appendChild(array_of_cells[c]).className = "grid-item";

    array_of_cells[c].classList.add("item_" + container_nr);

    array_of_cells[c].setAttribute("row", Math.ceil(container_nr / cols));
    let col_nr = container_nr % cols;
    if (col_nr != 0) { array_of_cells[c].setAttribute("col", col_nr); }
    else { array_of_cells[c].setAttribute("col", cols); }


  }
};

const getRowAndColumn = (cell) => {

  // get index of elements in same row and column
  array_of_cells.forEach(ci => {
    if (ci.getAttribute("row") == cell.getAttribute("row") && cell != ci) {
      array_for_color.push(array_of_cells.indexOf(ci))
    }
    if (ci.getAttribute("col") == cell.getAttribute("col") && cell != ci) {
      array_for_color.push(array_of_cells.indexOf(ci))
    }
  });
};

const changeColor = (cell, mainColor, secondColor) => {
  cell.style.backgroundColor = mainColor;
  array_for_color.forEach(index => {
    array_of_cells[index].style.backgroundColor = secondColor;
  });
  array_for_color = [];
};


const container = document.querySelector(".container");

var dimensions = [8, 10];
var array_for_color = [];

const rows = dimensions[0];
const cols = dimensions[1];

const cells = rows * cols
const array_of_cells = [];

makeTheGrid(rows, cols);

container.addEventListener("mouseenter", () => {
  container.style.backgroundColor = "skyblue";
});
container.addEventListener("mouseleave", () => {
  container.style.backgroundColor = "azure";
});

array_of_cells.forEach((item) => { // an item is a cell

  item.addEventListener("mouseenter", () => {
    getRowAndColumn(item);
    changeColor(item, "orange", "yellow");
  }, false);

  item.addEventListener("mouseleave", () => {
    getRowAndColumn(item);
    changeColor(item, "white", "white");
  }, false)
});
