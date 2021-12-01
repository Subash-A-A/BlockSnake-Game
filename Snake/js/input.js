let inputDirection = { x: 0, y: 0 };
let lastInput = { x: 0, y: 0 };

window.addEventListener("keydown", (e) => {
  // Snake moves downwards if y is 1 and upwards if y is -1
  // Snake moves left if x is -1 and right if x is 1
  switch (e.key) {
    case "ArrowUp":
      if (lastInput.y !== 0) {
        break;
      }
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (lastInput.y !== 0) {
        break;
      }
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (lastInput.x !== 0) {
        break;
      }
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (lastInput.x !== 0) {
        break;
      }
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

export function getInputDirection() {
  lastInput = inputDirection;
  return inputDirection;
}
