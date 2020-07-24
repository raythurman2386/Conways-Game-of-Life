import React, { useState, useEffect } from 'react';
import { generateGrid, generateRandomGrid } from '../utils';
import { Grid, Button } from '../components';

const Game = () => {
	const [numRows, setRows] = useState(25);
	const [numCols, setCols] = useState(25);
	const [speed, setSpeed] = useState(300);
	const [grid, setGrid] = useState(() => generateGrid(numRows, numCols));
	const [running, setRunning] = useState(false);

	useEffect(() => {
		setGrid(generateGrid(numRows, numCols));
	}, [numRows]);

	return (
		<div style={{ textAlign: 'center' }}>
			{/* Buttons, With the amount of buttons, they will need to be a component */}
			{/* TODO: We will need a Start button */}
			<div className='controls' style={{ marginBottom: '10px' }}>
				<Button title='Start' onClick={() => setRunning(true)} />

				{/* TODO: We will need a Stop Button */}
				<Button title='Stop' onClick={() => setRunning(false)} />

				{/* TODO: We will need a Clear Button */}
				<Button
					title='Clear'
					onClick={() => setGrid(generateGrid(numRows, numCols))}
				/>

				{/* TODO: We will need a Random Button */}
				<Button
					title='Random'
					onClick={() => generateRandomGrid(numRows, numCols, setGrid)}
				/>

				{/* TODO: We will need a slider for speed */}
				<label htmlFor='speed'>Speed: {`${speed}ms`}</label>
				<input
					type='range'
					id='speed'
					name='speed'
					min='100'
					max='1000'
					value={speed}
					onChange={(e) => setSpeed(Number(e.target.value))}
				/>

				{/* TODO: We will need a slider for grid size */}
				<label htmlFor='size'>Size: {`${numRows} x ${numCols}`}</label>
				<input
					type='range'
					id='size'
					name='size'
					min='25'
					max='80'
					value={numRows}
					onChange={(e) => {
						setRows(Number(e.target.value));
						setCols(Number(e.target.value));
					}}
				/>

				{/* TODO: We will need a dropdown for presets */}
				<label htmlFor='presets'>Preset Designs</label>
				<select name='presets' id='presets'>
					<option value=''>Please Choose an Preset</option>
					<option value='#'>Preset 1</option>
					<option value='#'>Preset 2</option>
					<option value='#'>Preset 3</option>
					<option value='#'>Preset 4</option>
				</select>
			</div>{' '}
			{/* End of controls */}
			{/* TODO: Break controls into component */}
			{/* Grid Component */}
			<Grid
				grid={grid}
				setGrid={setGrid}
				numRows={numRows}
				numCols={numCols}
				running={running}
			/>
		</div>
	);
};

export default Game;
