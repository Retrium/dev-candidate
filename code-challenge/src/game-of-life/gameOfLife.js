/**
 * The board has the following data structure:
 * {
 *  'x,y': true,
 *  'a,b': true,
 * }
 * where the coordinates represent live cells. Dead cells are not part of the set.
 * See gameOfLife.test.js for specific examples of boards and their generations. 
 * Boards can be infinitely large. The function expects a properly-formatted board.
 * 
 * @param board A board on which to run the game of life
 * @returns A new board, with the rules of the game of life applied
 */
export function runGameOfLife(board) {
	const newBoard = {};
	for (const coordinates in board) {
		const parts = coordinates.split(',');
		const x = Number(parts[0]);
		const y = Number(parts[1]);
		for (let dx = -1; dx <= 1; ++dx) {
			for (let dy = -1; dy <= 1; ++dy) {
				newBoard[`${x+dx},${y+dy}`] = true;
			}
		}
	}
	for (const coordinates in newBoard) {
		const parts = coordinates.split(',');
		const x = Number(parts[0]);
		const y = Number(parts[1]);
		let neighbors = 0;
		for (let dx = -1; dx <= 1; ++dx) {
			for (let dy = -1; dy <= 1; ++dy) {
				if (!(dx === 0 && dy === 0) && board[`${x+dx},${y+dy}`]) {
					neighbors++;
				}
			}
		}
		if (!(neighbors === 3 || (board[coordinates] && neighbors === 2))) {
			delete newBoard[coordinates];
		}
	}
	return newBoard;
}