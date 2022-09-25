/**
 * These example boards represent the coordinates of live cells.
 * Feel free to keep this data structure or change it to something
 * that works better for you.
 */
export const BLOCK_BOARD = {
  '1,1': true,
  '1,2': true,
  '2,1': true,
  '2,2': true,
};

export const BLINKER_BOARD = {
  '1,2': true,
  '2,2': true,
  '3,2': true,
};

// Implement the Game of Life here - take in an inputBoard and output a new outputBoard!
export function getNextGeneration(inputBoard) {
  const outputBoard = { ...inputBoard };

  return outputBoard;
}