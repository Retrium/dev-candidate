import { runGameOfLife } from './gameOfLife';

describe('runGameOfLife', () => {
  it('creates a block, given a block', () => {
    const inputBoard = {
      '2,2': true,
      '3,2': true,
      '2,3': true,
      '3,3': true,
    };
    const newBoard = runGameOfLife(inputBoard);

    expect(newBoard).toEqual({
      '2,2': true,
      '3,2': true,
      '2,3': true,
      '3,3': true,
    });
  });

  it('oscillates a blinker, given a blinker', () => {
    const inputBoard = {
      '2,3': true,
      '3,3': true,
      '4,3': true,
    };
    const rotatedBlinker = runGameOfLife(inputBoard);
    const originalBlinker = runGameOfLife(rotatedBlinker);

    expect(rotatedBlinker).toEqual({
      '3,2': true,
      '3,3': true,
      '3,4': true,
    });
    expect(originalBlinker).toEqual({
      '2,3': true,
      '3,3': true,
      '4,3': true,
    });
  });

  it('creates a glider', () => {
    const inputBoard = {
      '2,3': true,
      '3,4': true,
      '4,2': true,
      '4,3': true,
      '4,4': true,
    };
    const gliderOne = runGameOfLife(inputBoard);
    const gliderTwo = runGameOfLife(gliderOne);
    const gliderThree = runGameOfLife(gliderTwo);
    const shiftedOriginalGlider = runGameOfLife(gliderThree);
  
    expect(gliderOne).toEqual({
      '3,2': true,
      '3,4': true,
      '4,3': true,
      '4,4': true,
      '5,3': true,
    });
    expect(gliderTwo).toEqual({
      '3,4': true,
      '4,2': true,
      '4,4': true,
      '5,3': true,
      '5,4': true,
    });
    expect(gliderThree).toEqual({
      '3,3': true,
      '4,4': true,
      '4,5': true,
      '5,3': true,
      '5,4': true,
    });
    expect(shiftedOriginalGlider).toEqual({
      '3,4': true,
      '4,5': true,
      '5,3': true,
      '5,4': true,
      '5,5': true,
    });
    
  });
});