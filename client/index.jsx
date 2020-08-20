import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./src/App.jsx";
import rootReducer from './src/reducers/root.js';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './src/styles.scss';

const composeEnahcer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer, 
  composeEnahcer(applyMiddleware(thunk))
);


const mountNode = document.getElementById("app");
ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  mountNode);