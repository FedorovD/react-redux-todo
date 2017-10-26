import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import createHistory from 'history/createBrowserHistory'

import { routerMiddleware } from 'react-router-redux'

import App from './components/App';
import './styles/main.css';
const history = createHistory();
const middleware = routerMiddleware(history)
const store = createStore(allReducers, applyMiddleware(middleware));



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
