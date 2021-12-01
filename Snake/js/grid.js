const GRID_SIZE = 21;

export function randomGridPos() {
  //   +1 is done to get value between 1 and 21 (Normally we get value bewtween 0 and 20)
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1,
  };
}

export function outOfGrid(position) {
  if (
    position.x < 1 ||
    position.x > GRID_SIZE ||
    position.y < 1 ||
    position.y > GRID_SIZE
  ) {
    return true;
  } else {
    return false;
  }
}
