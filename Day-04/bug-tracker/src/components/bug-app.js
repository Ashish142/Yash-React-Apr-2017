import React from 'react';
import BugStats from './bug-stats';
import BugEdit from './bug-edit';
import BugList from './bug-list';

import * as bugActionCreators from '../actions/bugActionCreators';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';


export function BugApp({ bugs, addNew, removeClosed, toggle, load }){
	return (
		<div>
			<input type="button" onClick={load} value="Load" />
			<BugStats bugs={bugs}></BugStats>
		 	<BugEdit addNew={addNew}></BugEdit>
		 	<BugList bugs={bugs} removeClosed={removeClosed} toggle={toggle}></BugList>
		</div>
	)
}


function mapStateToProps(state){
	return {
		bugs : state.bugsData
	};
}

/*function bindAsyncActionCreators(actionCreators, dispatch){
	var boundActions = {};
	for(let key in actionCreators){
		boundActions[key] = function(){
			actionCreators[key].apply(this, [dispatch, ...arguments]);
		}
	}
	return boundActions;
}*/

function mapDispatchToProps(dispatch){
	return bindActionCreators(bugActionCreators, dispatch);	
}

//export default BugApp;



export default connect(mapStateToProps, mapDispatchToProps)(BugApp);





