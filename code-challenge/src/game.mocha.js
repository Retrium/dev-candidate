const assert = require('assert');
const { BLOCK_BOARD, getNextGeneration } = require('./game');

// If you want to use Mocha for unit testing, add some tests to this file
describe('Game of Life - getNextGeneration', () => {
  it('a still life should not change across multiple generations', () => {
    const generationOne = BLOCK_BOARD;
    const generationTwo = getNextGeneration(generationOne);
    const generationThree = getNextGeneration(generationTwo);

    assert.deepStrictEqual(generationOne, generationTwo);
    assert.deepStrictEqual(generationTwo, generationThree);
    assert.deepStrictEqual(generationThree, BLOCK_BOARD);
  });
});