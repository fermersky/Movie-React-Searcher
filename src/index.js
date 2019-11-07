import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import * as serviceWorker from './serviceWorker';

// import 'bootswatch/dist/minty/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';

const loggerMiddlware = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddlware));

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

serviceWorker.unregister();
