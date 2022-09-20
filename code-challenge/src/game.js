/**
 * These example boards represent the row and column of live cells, where an empty array
 * represents an empty row. Feel free to keep this data structure or change it to something
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

// Implement the Game of Life here to transform the inputBoard into the outputBoard!
export function getNextGeneration(inputBoard) {
  const outputBoard = inputBoard;

  return outputBoard;
}