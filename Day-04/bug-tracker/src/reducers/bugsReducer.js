function bugsReducer(currentState = [], action){		
	switch(action.type){
		case 'LOAD_BUG_DATA' :
			return [...currentState, ...action.payload];
        case 'ADD_NEW' :
			return [...currentState, action.payload];
        case 'TOGGLE':
        	var toggledBug = action.payload;
			return currentState.map(bug => 
				bug.id === toggledBug.id ? toggledBug : bug);

		case 'REMOVE_CLOSED':
			return currentState.filter(bug => !bug.isClosed);

        default:
			return currentState;
	}
}
export default bugsReducer;