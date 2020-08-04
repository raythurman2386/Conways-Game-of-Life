import React from 'react';

import { Hero } from '../components';

const Home = () => {
	return (
		<>
			<Hero />
			<section>
				<p>
					Welcome to my implementation of The Game of Life. Feel free to check
					out the about page to see what the rules of the game of life are and
					to see an illustration of some of the possible visualizations that can
					be made.
				</p>
				<blockquote>
					The Game of Life, also known simply as Life, is a cellular automaton
					devised by the British mathematician John Horton Conway in 1970. It is
					a zero-player game, meaning that its evolution is determined by its
					initial state, requiring no further input. One interacts with the Game
					of Life by creating an initial configuration and observing how it
					evolves. It is Turing complete and can simulate a universal
					constructor or any other Turing machine.
				</blockquote>
			</section>
			<section className='references'>
				<h3>References</h3>
				<ul>
					<li>
						Wikipedia -{' '}
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life'
						>
							Conway's Game of Life
						</a>
					</li>
					<li>
						My Github Repo -{' '}
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://github.com/raythurman2386/Conways-game-of-life'
						>
							Located here
						</a>
					</li>
					<li>
						Other Variation -{' '}
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://playgameoflife.com/'
						>
							Play Game of Life
						</a>
					</li>
				</ul>
			</section>
		</>
	);
};

export default Home;
