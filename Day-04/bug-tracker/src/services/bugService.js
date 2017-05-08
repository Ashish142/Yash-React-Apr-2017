let baseUrl = 'http://localhost:3300/bugs';
export function loadBugs(){
	return fetch(baseUrl)
		.then(response => response.json());
}

export function createNew(bugName){
	var newBug = {
		name : bugName,
		isClosed : false
	};
	var requestOptions = {
		method : 'POST',
		headers : {
			'content-type' : 'application/json',
		},
		body : JSON.stringify(newBug)
	};
	return fetch(baseUrl, requestOptions)
		.then(response =>  response.json());
}

export function update(bug){
	var requestOptions = {
		method : 'PUT',
		headers : {
			'content-type' : 'application/json',
		},
		body : JSON.stringify(bug)
	};
	return fetch(`${baseUrl}/${bug.id}`, requestOptions)
		.then(response =>  response.json())
}