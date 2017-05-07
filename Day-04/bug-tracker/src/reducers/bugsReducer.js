function bugsReducer(currentState = [], action){		
	switch(action.type){
        case 'ADD_NEW' :
			var newBug = {
				name : action.payload,
				isClosed : false
			};
			return [...currentState, newBug];

        case 'TOGGLE':
        	var bugToToggle = action.payload;
			return currentState.map(bug => 
				bug === bugToToggle ? Object.assign({}, bug, {isClosed : !bug.isClosed}) : bug);

		case 'REMOVE_CLOSED':
			return currentState.filter(bug => !bug.isClosed);

        default:
			return currentState;
	}
}
export default bugsReducer;