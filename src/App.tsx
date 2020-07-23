import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './components';
import Home from './pages/Home';
import About from './pages/About';
import Game from './pages/Game';

function App() {
	return (
		<Layout>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/about' component={About} />
				<Route path='/game' component={Game} />
				<Route component={Home} />
			</Switch>
		</Layout>
	);
}

export default App;
