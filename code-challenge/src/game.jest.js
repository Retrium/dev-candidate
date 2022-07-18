const { BLOCK_BOARD, getNextGeneration } = require("./game");

// If you want to use Jest for unit testing, add some tests to this file
describe('Game of Life - getNextGeneration', () => {
  it('a still life should not change across multiple generations', () => {
    const generationOne = BLOCK_BOARD;
    const generationTwo = getNextGeneration(generationOne);
    const generationThree = getNextGeneration(generationTwo);

    expect(generationOne).toEqual(generationTwo);
    expect(generationTwo).toEqual(generationThree);
    expect(generationThree).toEqual(BLOCK_BOARD);
  });
});