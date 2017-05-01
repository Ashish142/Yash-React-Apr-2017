class Employee{
	constructor(id, name, salary){
		this.__id = id;
		this.name = name;
		this.salary = salary;
    }
	set id(value){
		console.log('id setter triggered');
		if (value < 0) return;
		this.__id = value;
	}
	get id(){
		console.log('id getter triggered');
		return this.__id;
    }
	display(){
		console.log(`id = ${this.id}, name = ${this.name}, salary = ${this.salary}`);
	}
}