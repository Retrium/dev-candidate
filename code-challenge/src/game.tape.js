const test = require('tape');
const { getNextGeneration, BLOCK_BOARD } = require('./game');

// If you want to use Tape for unit testing, add some tests to this file
test('a still life should not change across multiple generations', (assert) => {
  const generationOne = BLOCK_BOARD;
  const generationTwo = getNextGeneration(generationOne);
  const generationThree = getNextGeneration(generationTwo);

  assert.equal(generationOne, generationThree);
  assert.equal(generationTwo, generationThree);
  assert.equal(generationThree, BLOCK_BOARD);

  assert.end();
});
