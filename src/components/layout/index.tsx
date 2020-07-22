import React from 'react';
import Header from '../header';
import Footer from '../footer';

const Layout = (props: any) => {
	return (
		<div>
			<Header />
			<main className='layout'>{props.children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
