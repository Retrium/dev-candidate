export const getCellState = (board, x, y) => {
  return !!board[`${x},${y}`];
};

export const isCellAlive = (board, x, y) => {
  return getCellState(board, x, y) === true;
};

export const isCellDead = (board, x, y) => {
  return getCellState(board, x, y) === false;
};
