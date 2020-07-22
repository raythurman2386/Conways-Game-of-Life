import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './css/normalize.css';
import './css/style.css';
import App from './App';

const AppWithRouter = withRouter(App);

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<AppWithRouter />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
