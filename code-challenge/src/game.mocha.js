const assert = require('assert');
const { BLOCK_BOARD, getNextGeneration, BLINKER_BOARD } = require('./game');

// If you want to use Mocha for unit testing, add some tests to this file
describe('Game of Life - getNextGeneration', () => {
  it('a still life should not change across multiple generations', () => {
    const generationOne = BLOCK_BOARD;
    const generationTwo = getNextGeneration(generationOne);
    const generationThree = getNextGeneration(generationTwo);

    assert.equal(generationOne, generationTwo);
    assert.equal(generationTwo, generationThree);
    assert.equal(generationThree, BLOCK_BOARD);
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

    assert.equal(generationTwo, rotatedBlinker);
    assert.equal(generationThree, generationOne);
    assert.equal(generationFour, generationTwo);
  });
});