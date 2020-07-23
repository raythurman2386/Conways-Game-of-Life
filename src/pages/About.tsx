import React from 'react';
import { Hero } from '../components';

const About = () => {
	return (
		<>
			<Hero />
			<section className='rules'>
				<h2>Rules</h2>
				<p>
					The universe of the Game of Life is an infinite, two-dimensional
					orthogonal grid of square cells, each of which is in one of two
					possible states, live or dead, (or populated and unpopulated,
					respectively). Every cell interacts with its eight neighbours, which
					are the cells that are horizontally, vertically, or diagonally
					adjacent. At each step in time, the following transitions occur:
				</p>
				<blockquote>
					<ul>
						<li>
							Rule 1: Any live cell with fewer than two live neighbours dies, as
							if by underpopulation.
						</li>
						<li>
							Rule 2: Any live cell with two or three live neighbours lives on
							to the next generation.
						</li>
						<li>
							Rule 3: Any live cell with more than three live neighbours dies,
							as if by overpopulation.
						</li>
						<li>
							Rule 4: Any dead cell with exactly three live neighbours becomes a
							live cell, as if by reproduction.
						</li>
					</ul>
				</blockquote>
				<p>
					These rules, which compare the behavior of the automaton to real life,
					can be condensed into the following:
				</p>
				<blockquote>
					<ul>
						<li>Any live cell with two or three live neighbours survives.</li>
						<li>
							Any dead cell with three live neighbours becomes a live cell.
						</li>
						<li>
							All other live cells die in the next generation. Similarly, all
							other dead cells stay dead.
						</li>
					</ul>
				</blockquote>
				<p>
					The initial pattern constitutes the seed of the system. The first
					generation is created by applying the above rules simultaneously to
					every cell in the seed; births and deaths occur simultaneously, and
					the discrete moment at which this happens is sometimes called a tick.
					Each generation is a pure function of the preceding one. The rules
					continue to be applied repeatedly to create further generations.{' '}
				</p>
			</section>
			<section className='origins'>
				<h3>Origins</h3>
			</section>
			<section className='patterns'>
				<h3>Patterns</h3>
			</section>
			<section className='variations'>
				<h3>Variations</h3>
			</section>
			<p className='text_small'>
				Content from{' '}
				<a href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life'>
					Wikipedia
				</a>
			</p>
		</>
	);
};

export default About;
