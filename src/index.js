import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import './sass/index';

const rootApp = <App />;

const rootElement = document.getElementById('app');

ReactDOM.render(rootApp, rootElement);
