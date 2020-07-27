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
	grid: number[][],
	newGrid: number[][],
	numRows: number,
	numCols: number
) {
	for (let i = 0; i < numRows; i++) {
		for (let j = 0; j < numCols; j++) {
			let neighbors = 0;
			// Checks each operation to see if it is alive or dead
			operations.forEach(([x, y]) => {
				const newI = i + x;
				const newJ = j + y;

				if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
					// updates the amount of neighbors to the current item
					neighbors += grid[newI][newJ];
				}
			});

			// Uses the rules to turn grid item on or off
			if (neighbors < 2 || neighbors > 3) {
				newGrid[i][j] = 0;
			} else if (grid[i][j] === 0 && neighbors === 3) {
				newGrid[i][j] = 1;
			}
		}
	}
}
