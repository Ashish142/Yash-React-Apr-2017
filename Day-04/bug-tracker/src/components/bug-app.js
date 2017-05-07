import React from 'react';
import BugStats from './bug-stats';
import BugEdit from './bug-edit';
import BugList from './bug-list';

import bugActionCreators from '../actions/bugActionCreators';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';


function BugApp({ bugs, addNew, removeClosed, toggle }){
	return (
		<div>
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

function mapDispatchToProps(dispatch){
	var bugActions = bindActionCreators(bugActionCreators, dispatch);
	return bugActions;
}

//export default BugApp;

export default connect(mapStateToProps, mapDispatchToProps)(BugApp);





