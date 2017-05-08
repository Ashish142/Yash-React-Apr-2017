/*var bugActionCreators = {
	addNew : function (bugName){
		return {
			type : 'ADD_NEW',
			payload : bugName
		};
		
	},
	removeClosed : function(){
		return {
			type : 'REMOVE_CLOSED'
		};
	},
	toggle : function(bug){
		return { type : 'TOGGLE', payload : bug};
	}
}*/

//return function(dispatch){
import * as bugService from '../services/bugService';


/*export function load (dispatch){
	bugService
		.loadBugs()
		.then(bugs => {
			dispatch({
				type : 'LOAD_BUG_DATA',
				payload : bugs
			})
		});
}
export function addNew(dispatch, bugName){
	bugService.createNew(bugName)
		.then(newBug => {
			dispatch({
				type : 'ADD_NEW',
				payload : newBug
			})
		})
}

export function toggle(dispatch, bug){
	bug.isClosed = !bug.isClosed;
	bugService
		.update(bug)
		.then(updatedBug => {
			dispatch({
				type : 'TOGGLE',
				payload : updatedBug
			})
		})
}
*/

export function load (){
	
	return function(dispatch){
		console.log('arguments in load -> ', arguments);
		bugService
			.loadBugs()
			.then(bugs => {

				dispatch({
					type : 'LOAD_BUG_DATA',
					payload : bugs
				})
			});
	};
}
export function addNew(bugName){
	return function(dispatch){
		bugService
			.createNew(bugName)
			.then(newBug => {
				dispatch({
					type : 'ADD_NEW',
					payload : newBug
				})
			})
	};
}

export function toggle(bug){
	return function(dispatch){
		bug.isClosed = !bug.isClosed;
		bugService
			.update(bug)
			.then(updatedBug => {
				dispatch({
					type : 'TOGGLE',
					payload : updatedBug
				})
			})
	};
}
