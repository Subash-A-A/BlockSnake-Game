import { SNAKE_SPEED, updateSnake, drawSnake, getHead } from "./snake.js";
import { updateFood, drawFood } from "./food.js";
import { outOfGrid } from "./grid.js";
import { drawBlocks, checkBlockCollision, updateBlocks } from "./block.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

function gameLoop(currentTime) {
  if (gameOver) {
    return alert("GameOver");
  }
  window.requestAnimationFrame(gameLoop);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) {
    return;
  }
  lastRenderTime = currentTime;

  update();
  draw();
}

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}
function draw() {
  // Removing the previously drawn segments while drawing the next frame
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawBlocks(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  if (outOfGrid(getHead()) || checkBlockCollision(getHead())) {
    gameOver = true;
  }
}

gameLoop(lastRenderTime);
