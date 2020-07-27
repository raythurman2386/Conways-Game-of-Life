import { generateGrid } from './generate_grid';

const operations = [
	[0, 1],
	[0, -1],
	[1, -1],
	[-1, 1],
	[1, 1],
	[-1, -1],
	[1, 0],
	[-1, 0],
];

export function simulation(
	g: any,
	gridCopy: any,
	numRows: number,
	numCols: number
) {
	for (let i = 0; i < numRows; i++) {
		for (let j = 0; j < numCols; j++) {
			let neighbors = 0;
			operations.forEach(([x, y]) => {
				const newI = i + x;
				const newJ = j + y;

				if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
					neighbors += g[newI][newJ];
				}
			});

			if (neighbors < 2 || neighbors > 3) {
				gridCopy[i][j] = 0;
			} else if (g[i][j] === 0 && neighbors === 3) {
				gridCopy[i][j] = 1;
			}
		}
	}
}
