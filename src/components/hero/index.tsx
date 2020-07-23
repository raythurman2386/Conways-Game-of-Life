import React from 'react';
import logo from '../../assets/images/hero.png';

const Hero = () => {
	return (
		<section className='hero'>
			<img src={logo} alt="Conway's Game of Life" />
		</section>
	);
};

export default Hero;
