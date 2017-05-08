import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';

import { createStore, combineReducers, applyMiddleware } from 'redux';

import bugsReducer from './reducers/bugsReducer';
import calculatorReducer from './reducers/calculatorReducer';

import thunk from 'redux-thunk';

var allReducers = combineReducers({
	calculatorData : calculatorReducer,
	bugsData : bugsReducer
});

function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

let store = createStore(allReducers, applyMiddleware(thunk, logger));

console.log(store.getState());

/*store.subscribe(renderApp);

function renderApp(){
	ReactDOM.render(
	  <App store={store}/>,
	  document.getElementById('root')
	);
}
renderApp();*/

ReactDOM.render(
	  <Provider store={store}>
	  	<App />
	  </Provider>,
	  document.getElementById('root')
	);