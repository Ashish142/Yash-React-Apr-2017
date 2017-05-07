function calculatorReducer(currentState = 0, action){
	switch(action.type){
        case 'add' :
			return currentState + action.payload;
        case 'subtract':
			return currentState - action.payload;
        default:
			return currentState;
	}
}
export default calculatorReducer;