import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';

import { createStore } from 'redux';
import bugsReducer from './reducers/bugsReducer';

let store = createStore(bugsReducer);
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