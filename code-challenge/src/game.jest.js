const { BLOCK_BOARD, getNextGeneration, BLINKER_BOARD } = require("./game");

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

  it('a blinker will cycle between two states across all generations', () => {
    const generationOne = BLINKER_BOARD;
    const generationTwo = getNextGeneration(generationOne);
    const generationThree = getNextGeneration(generationTwo);
    const generationFour = getNextGeneration(generationThree);

    const rotatedBlinker = {
      0: [],
      1: [],
      2: [1, 2, 3],
      3: [],
      4: [],
    };

    expect(generationTwo).toEqual(rotatedBlinker);
    expect(generationThree).toEqual(generationOne);
    expect(generationFour).toEqual(generationTwo);
  });
});