var add = function add(){
	var result = 0;
	for(var index =0; index < arguments.length; index++)
		result += arguments[index];
	return result;
}
console.log(add(10));
console.log(add(10,20));
console.log(add(10,20,30,40,50));

var fn  = function fn(){
	console.log('first implementation')
}
fn();
fn = function fn(){
	console.log('last implementation');
}
fn();

/*
Function invocation

As a method of an obj
	this -> obj

As a function
	this -> global scope, window

Using the 'call' method


Using the 'apply' method
	

*/












