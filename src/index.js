import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import './sass/index';

const rootElement = document.getElementById('app');
const rootApp = <App />;

ReactDOM.render(rootApp, rootElement);
