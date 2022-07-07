import { BLINKER_BOARD, BLOCK_BOARD, getNextGeneration } from "./game";

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

function testBlinker(inputBoard) {
  const generationTwo = getNextGeneration(inputBoard);
  const generationThree = getNextGeneration(generationTwo);
  const generationFour = getNextGeneration(generationThree);

  const rotatedBlinker = {
    0: [],
    1: [],
    2: [1, 2, 3],
    3: [],
    4: [],
  };

  const everyOtherGenerationIsTheSame = JSON.stringify(generationThree) === JSON.stringify(inputBoard) && JSON.stringify(generationFour) === JSON.stringify(generationTwo);
  const everyOtherGenerationIsRotated = JSON.stringify(generationTwo) === JSON.stringify(rotatedBlinker);
  if (!everyOtherGenerationIsTheSame || !everyOtherGenerationIsRotated) {
    throw new Error('FAIL: A blinker will cycle between two states across all generations');
  }

  console.log('PASS: A blinker will cycle between two states across all generations')
}

function main() {
  try {
    testStillLife(BLOCK_BOARD);
    testBlinker(BLINKER_BOARD);
  } catch(err) {
    console.error(err.message);
  }
}

main();
