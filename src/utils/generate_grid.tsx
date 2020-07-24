export function generateGrid(numRows = 25, numCols = 25): number[][] {
	const rows: number[][] = [];
	for (let i = 0; i < numRows; i++) {
		rows.push(Array.from(Array(numCols), () => 0));
	}

	return rows;
}

export function generateRandomGrid(numRows = 25, numCols = 25, setGrid: any) {
	const rows: number[][] = [];
	for (let i = 0; i < numRows; i++) {
		rows.push(Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0)));
	}

	setGrid(rows);
}
