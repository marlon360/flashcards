import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";

import store from "./app/store/index";
import * as serviceWorker from './serviceWorker';

import './css/tailwind.css';
import App from './app/app.component'



render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
