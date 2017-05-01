var Employee = (function(){
	let idSymbol = Symbol();
	class Employee{
		constructor(id, name, salary){
			this[idSymbol] = id;
			this.name = name;
			this.salary = salary;
	    }
		set id(value){
			console.log('id setter triggered');
			if (value < 0) return;
			this[idSymbol] = value;
		}
		get id(){
			console.log('id getter triggered');
			return this[idSymbol];
	    }
		display(){
			console.log(`id = ${this.id}, name = ${this.name}, salary = ${this.salary}`);
		}
	}
	return Employee;
})()