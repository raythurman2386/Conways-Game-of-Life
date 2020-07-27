import React from 'react';

const Grid = ({ grid, setGrid, numRows, running }: any) => {
	// Handles changing the color of the square in an immutable fashion
	const handleClick = (x: number, y: number) => {
		const newGrid = grid.map((row: any, key: any) => {
			if (key === x) {
				return row.map((item: any, colKey: any) => {
					if (colKey === y) {
						return item === 0 ? 1 : 0;
					} else {
						return item;
					}
				});
			} else {
				return row;
			}
		});

		setGrid(newGrid);
	};

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(${numRows}, 20px)`,
				justifyContent: 'center',
			}}
		>
			{grid.map((rows: [], i: number) =>
				rows.map((col: [], j: number) => (
					<div
						key={`${i}-${j}`}
						onClick={() => (!running ? handleClick(i, j) : undefined)}
						style={{
							width: 20,
							height: 20,
							backgroundColor: grid[i][j] ? 'red' : undefined,
							border: 'solid 1px black',
						}}
					></div>
				))
			)}
		</div>
	);
};

export default Grid;
