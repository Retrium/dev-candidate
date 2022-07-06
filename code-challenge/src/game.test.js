function exampleTest(shouldFail) {
  console.log('This is an example test');

  if (shouldFail) {
    throw new Error('Test failed');
  }

  console.log('Test passed');
  return true;
}

function main() {
  try {
    exampleTest(true);
  } catch(err) {
    console.error(err.message);
  }
}

main();
