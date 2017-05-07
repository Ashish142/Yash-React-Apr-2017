import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';

import { createStore, combineReducers } from 'redux';

import bugsReducer from './reducers/bugsReducer';
import calculatorReducer from './reducers/calculatorReducer';

var allReducers = combineReducers({
	calculatorData : calculatorReducer,
	bugsData : bugsReducer
});

let store = createStore(allReducers);

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