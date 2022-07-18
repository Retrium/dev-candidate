import { BLOCK_BOARD, getNextGeneration } from "./game";

// If you want to use plain JavaScript for unit testing, add some tests to this file
function testStillLife(inputBoard) {
  const generationTwo = getNextGeneration(inputBoard);
  const generationThree = getNextGeneration(inputBoard);

  const allGenerationsAreTheSame = JSON.stringify(inputBoard) === JSON.stringify(generationTwo) === JSON.stringify(generationThree);
  if (!allGenerationsAreTheSame) {
    throw new Error('FAIL: A still life should not change across multiple generations');
  }

  console.log('PASS: A still life should not change across multiple generations');
}

function main() {
  try {
    testStillLife(BLOCK_BOARD);
  } catch(err) {
    console.error(err.message);
  }
}

main();
