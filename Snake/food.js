import { expandSnake, onSnake } from "./snake.js";
import { randomGridPos } from "./grid.js";
import { addBlock, onBlock } from "./block.js";
// Grid Starts from 1, 1 (note that 0, 0 is outside the grid)
export let foodPos = getRrandomFoodPos();

const GROWTH_PER_FOOD = 1;
const BLOCK_RATE = 2;

export function updateFood() {
  if (onSnake(foodPos)) {
    expandSnake(GROWTH_PER_FOOD);
    addBlock(BLOCK_RATE);
    foodPos = getRrandomFoodPos();
  }
}
export function drawFood(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.classList.add("food");
  foodElement.style.gridRowStart = foodPos.y;
  foodElement.style.gridColumnStart = foodPos.x;
  gameBoard.appendChild(foodElement);
}

function getRrandomFoodPos() {
  let newFoodPos;
  while (newFoodPos == null || onSnake(newFoodPos) || onBlock(newFoodPos)) {
    newFoodPos = randomGridPos();
  }
  return newFoodPos;
}
