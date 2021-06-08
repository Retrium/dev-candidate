import React from 'react';
import ReactDOM from 'react-dom';
import App from './shell/App';

document.addEventListener(
	'DOMContentLoaded',
	() => {
		ReactDOM.render(<App />, document.getElementById('app-body'));
	},
	false
);
