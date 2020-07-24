export function generateGrid(gridSize = 25): number[][] {
	const rows: number[][] = [];
	for (let i = 0; i < gridSize; i++) {
		rows.push(Array.from(Array(gridSize), () => 0));
	}

	return rows;
}

export function generateRandomGrid(gridSize = 25, setGrid: any) {
	const rows: number[][] = [];
	for (let i = 0; i < gridSize; i++) {
		rows.push(Array.from(Array(gridSize), () => (Math.random() > 0.7 ? 1 : 0)));
	}

	setGrid(rows);
}
