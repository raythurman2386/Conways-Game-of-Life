import React, { useState, useEffect, useRef } from 'react';
import produce from 'immer';
import {
	generateGrid,
	generateRandomGrid,
	simulation,
	setGridSize,
} from '../utils';
import { Grid, Button } from '../components';
import { glider, pulsar, gliderGun } from '../presets';

const Game = () => {
	const [numRows, setRows] = useState(25);
	const [numCols, setCols] = useState(25);
	const [speed, setSpeed] = useState(300);
	const [grid, setGrid] = useState(() => generateGrid(numRows, numCols));
	const [running, setRunning] = useState(false);

	useEffect(() => {
		setGrid(generateGrid(numRows, numCols));
	}, [numRows, numCols]);

	const runningRef = useRef(running);
	runningRef.current = running;

	const runSim = () => {
		if (!runningRef.current) {
			return;
		}

		setGrid((grid) => {
			// Produce takes the current grid, and returns a newGrid+
			// returns a newGrid without altering the old grid
			// makes deep state updates easy
			return produce(grid, (newGrid) => {
				simulation(grid, newGrid, numRows, numCols);
			});
		});

		// Runs the sim using recursion
		// uses the current speed that from state
		setTimeout(runSim, speed);
	};

	const handleSelectChange = (e: any) => {
		switch (e.target.value) {
			case 'glider':
				setGridSize(setRows, setCols, 25);
				setGrid(glider);
				break;
			case 'pulsar':
				setGridSize(setRows, setCols, 25);
				setGrid(pulsar);
				break;
			case 'glider-gun':
				setGridSize(setRows, setCols, 40)
				setGrid(gliderGun);
				break;
			default:
				setGrid(generateGrid(numRows, numCols));
				break;
		}
	};

	return (
		<div style={{ textAlign: 'center' }}>
			{/* Buttons, With the amount of buttons, they will need to be a component */}
			{/* TODO: We will need a Start button */}
			<div className='controls' style={{ marginBottom: '10px' }}>
				<Button
					title={!running ? 'Start' : 'Stop'}
					onClick={() => {
						setRunning(!running);
						if (!running) {
							runningRef.current = true;
							runSim();
						}
					}}
				/>

				{/* TODO: We will need a Clear Button */}
				<Button
					title='Clear'
					onClick={() => setGrid(generateGrid(numRows, numCols))}
					disabled={running ? true : false}
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
					step='100'
					value={speed}
					onChange={(e) => setSpeed(Number(e.target.value))}
					disabled={running ? true : false}
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
					step='5'
					onChange={(e) => {
						setRows(Number(e.target.value));
						setCols(Number(e.target.value));
					}}
					disabled={running ? true : false}
				/>

				{/* TODO: We will need a dropdown for presets */}
				<label htmlFor='presets'>Preset Designs</label>
				<select
					name='presets'
					id='presets'
					onChange={(e: any) => handleSelectChange(e)}
				>
					<option value=''>Please Choose a Preset</option>
					<option value='glider'>Glider</option>
					<option value='pulsar'>Pulsar</option>
					<option value='glider-gun'>Glider Gun</option>
					<option value='#'>Preset 4</option>
				</select>
			</div>{' '}
			<p className='text_small'>Must set grid to 40x40 for Glider gun to work</p>
			<p className='text_small'>Most presets default to 25x25</p>
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
