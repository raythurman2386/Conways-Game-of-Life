export function generateGrid(gridSize = 25): number[][] {
	const rows: number[][] = [];
	for (let i = 0; i < gridSize; i++) {
		rows.push(Array.from(Array(gridSize), () => 0));
	}

	return rows;
}
