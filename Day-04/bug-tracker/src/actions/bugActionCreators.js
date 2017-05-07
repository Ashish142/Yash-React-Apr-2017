var bugActionCreators = {
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
}
export default bugActionCreators;