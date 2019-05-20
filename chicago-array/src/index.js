import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

// middleware
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// browserRouter
// import { BrowserRouter as Router } from 'react-router-dom';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, logger)))


ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));


