import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<header>
				<h1 className='logo'>Conway's Game of Life</h1>
				<nav>
					<Link to='#'>Home</Link>
					<Link to='#'>About</Link>
					<Link to='#'>Play</Link>
				</nav>
			</header>
		</>
	);
};

export default Header;
