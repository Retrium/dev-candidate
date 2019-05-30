import 'react-hot-loader'; // needs to come before react
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

document.addEventListener(
	'DOMContentLoaded',
	() => {
		ReactDOM.render(<App />, document.getElementById('app-body'));
	},
	false
);
