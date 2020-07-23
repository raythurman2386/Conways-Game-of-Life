import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer>
			<h3 className='logo'>Conway's Game of Life</h3>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/game'>Play</Link>
			</nav>
			<p className='text_small'>&copy; 2020 Ray Thurman</p>
		</footer>
	);
};

export default Footer;
