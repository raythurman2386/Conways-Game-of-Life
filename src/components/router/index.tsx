import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Game } from '../../pages';

const Router = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/about' component={About} />
			<Route path='/game' component={Game} />
			<Route component={Home} />
		</Switch>
	);
};

export default Router;
