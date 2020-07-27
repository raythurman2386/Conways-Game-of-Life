import React from 'react';

const Grid = ({ grid, setGrid, numRows, running }: any) => {
	// Handles changing the color of the square in an immutable fashion
	const handleClick = (x: number, y: number) => {
		const newGrid = grid.map((row: [], key: number) => {
			if (key === x) {
				return row.map((item: number, colKey: number) => {
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

	// controls the width and height of the boxes depending on how many rows
	// the user has chose, Keeps the grid from getting ridiculously big
	let size = numRows >= 50 ? 10 : 20;

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(${numRows}, ${size}px)`,
				justifyContent: 'center',
			}}
		>
			{grid.map((rows: [], i: number) =>
				rows.map((col: [], j: number) => (
					<div
						key={`${i}-${j}`}
						// As long as the sim isn't running, you can change colors
						onClick={() => (!running ? handleClick(i, j) : undefined)}
						style={{
							width: size,
							height: size,
							backgroundColor: grid[i][j] ? 'red' : undefined,
							border: 'solid .5px black',
						}}
					></div>
				))
			)}
		</div>
	);
};

export default Grid;
