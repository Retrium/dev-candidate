const test = require('tape');
const { getNextGeneration, BLOCK_BOARD, BLINKER_BOARD } = require('./game');

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

test('a blinker will cycle between two states across all generations', (assert) => {
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

  assert.end();
})