const test = require('tape');
const { getNextGeneration, BLOCK_BOARD } = require('./game');

// If you want to use Tape for unit testing, add some tests to this file
test('a still life should not change across multiple generations', (assert) => {
  const generationOne = BLOCK_BOARD;
  const generationTwo = getNextGeneration(generationOne);
  const generationThree = getNextGeneration(generationTwo);

  assert.deepEqual(generationOne, generationThree);
  assert.deepEqual(generationTwo, generationThree);
  assert.deepEqual(generationThree, BLOCK_BOARD);

  assert.end();
});
