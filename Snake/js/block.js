import { randomGridPos } from "./grid.js";
import { onSnake, equalPositions, getHead } from "./snake.js";

export const blockPos = [];
blockPos.push(getRrandomBlockPos());
export function updateBlocks() {
  checkBlockCollision(getHead());
}

export function checkBlockCollision(pos) {
  return onBlock(getHead());
}

export function drawBlocks(gameBoard) {
  blockPos.forEach((block) => {
    const blockElement = document.createElement("div");
    blockElement.classList.add("block");
    blockElement.style.gridRowStart = block.y;
    blockElement.style.gridColumnStart = block.x;
    gameBoard.appendChild(blockElement);
  });
}

export function onBlock(pos) {
  return blockPos.some((block) => {
    return equalPositions(block, pos);
  });
}

export function addBlock(amount) {
  for (let i = 0; i < amount; i++) {
    blockPos.push(getRrandomBlockPos());
  }
}

function getRrandomBlockPos() {
  let newBlockPos;
  while (newBlockPos == null || onSnake(newBlockPos)) {
    newBlockPos = randomGridPos();
  }
  return newBlockPos;
}
