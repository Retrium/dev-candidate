import { getCellState, isCellAlive, isCellDead } from './selectors';

describe('selectors', () => {
  describe('getCellState', () => {
    it('should retrieve live cell state', () => {
      const board = {
        '1,1': true
      };
      expect(getCellState(board, 1, 1)).toBe(true);
    });

    it('should retrieve dead cell state', () => {
      const board = {
        '1,1': true
      };
      expect(getCellState(board, 2, 2)).toBe(false);
    });
  })
  
  describe('isCellAlive', () => {
    it('should accurately find live state', () => {
      const board = {
        '1,1': true
      };

      expect(isCellAlive(board, 1, 1)).toBe(true);
      expect(isCellAlive(board, 2, 2)).toBe(false);
    });
  });

  describe('isCellDead', () => {
    it('should accurately find dead state', () => {
      const board = {
        '1,1': true
      };

      expect(isCellDead(board, 1, 1)).toBe(false);
      expect(isCellDead(board, 2, 2)).toBe(true);
    });
  });
});