// for redux (is all about hold the date, hold the state inside our app)
// at the very top we've got our redux store which is where all of our state exists. To determine our current state or to change our state we call an action creator which dispatches an action. The action is sent to all the different reducers inside of our application. Those reducers are combined together with the combined reducers call and that is used to update the state in our redux store.
// React component call an action creator that will return an action that will be sent to all of our different reducers, which will then update all the states inside of our redux store. After that update all of that state that exists inside the store will be sent back down to react components which causes them to rerender and display some amount of new content on the screen.
// We have a react component from the react component.

import 'materialize-css/dist/css/materialize.min.css';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // is provided by react-redux library, is like a glue between the react and redux sides of our application
import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';

import App from "./components/App";
import reducers from './reducers';

const store = createStore(reducers/* all our reducers */, {} /*inital state*/, applyMiddleware(reduxThunk));

// action creator is initiate a change inside our app, to modify the state contained in our redux store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, // provider will inform all elements of new state
  document.querySelector("#root")
);
/* ReactDOM.render(<App /> /jsx tag/, document.querySelector('#root')); */
