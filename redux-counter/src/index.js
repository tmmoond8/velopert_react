import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
