export function generateGrid(numRows: number, numCols: number): number[][] {
	const rows: number[][] = [];
	for (let i = 0; i < numRows; i++) {
		rows.push(Array.from(Array(numCols), () => 0));
	}

	return rows;
}

export function generateRandomGrid(
	numRows: number,
	numCols: number,
	setGrid: any
): void {
	const rows: number[][] = [];
	for (let i = 0; i < numRows; i++) {
		rows.push(Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0)));
	}

	setGrid(rows);
}

export function setGridSize(setRows: any, setCols: any, size: number) {
	setRows(size);
	setCols(size);
}
