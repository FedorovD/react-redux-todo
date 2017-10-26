import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';

import App from './components/App';
import './styles/main.css';
const store = createStore(allReducers);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
