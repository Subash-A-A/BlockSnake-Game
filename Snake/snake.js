import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5;

export const snakeBody = [{ x: 11, y: 11 }];

let newSegments = 0;

export function updateSnake() {
  const inputDirection = getInputDirection();
  // Updating the bodySegments
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  // Updating head Segment
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}
export function drawSnake(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.classList.add("snake");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    gameBoard.appendChild(snakeElement);
  });
}

export function expandSnake(amount) {
  newSegments += amount;
  addSegment();
}

export function onSnake(pos) {
  // Head of snake on food
  return snakeBody.some((segment) => {
    return equalPositions(segment, pos);
  });
}

export function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegment() {
  // Duplicating the last segment
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }
  newSegments = 0;
}
export function getHead() {
  return snakeBody[0];
}
