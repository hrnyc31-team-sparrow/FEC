import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "../client/src/App.jsx";
import rootReducer from './src/reducers/index.js';
import { createStore } from 'redux';


const store = createStore(rootReducer);

const mountNode = document.getElementById("app");
ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, 
    mountNode);