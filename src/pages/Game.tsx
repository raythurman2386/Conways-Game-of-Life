import React, { useState } from 'react';
import { generateGrid, generateRandomGrid } from '../utils';
import { Grid, Button } from '../components';

const Game = () => {
	const [gridSize, setSize] = useState(25);
	const [grid, setGrid] = useState(generateGrid(gridSize));
	const [running, setRunning] = useState(false);

	return (
		<div>
			<h1>Game Page</h1>
			{/* Buttons, With the amount of buttons, they will need to be a component */}
			{/* TODO: We will need a Start button */}
			<div className='controls'>
				<Button title='Start' onClick={() => setRunning(true)} />
				{/* TODO: We will need a Stop Button */}
				<Button title='Stop' onClick={() => setRunning(false)} />
				{/* TODO: We will need a Clear Button */}
				<Button title='Clear' onClick={() => setGrid(generateGrid(gridSize))} />
				{/* TODO: We will need a Random Button */}
				<Button
					title='Random'
					onClick={() => generateRandomGrid(gridSize, setGrid)}
				/>
				{/* TODO: We will need a slider for speed */}
				{/* TODO: We will need a slider for grid size */}
				{/* TODO: We will need a dropdown for presets */}
			</div>
			{/* Grid Component */}
			<Grid
				grid={grid}
				setGrid={setGrid}
				gridSize={gridSize}
				running={running}
			/>
		</div>
	);
};

export default Game;
