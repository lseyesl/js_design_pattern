var Car = function(){}

var CarWithPowerLocks = function(){}
var CarWithPowerWindows = function(){}
var CarWithPowerLocksAndPowerWindows = function(){}
var CarWithAC = function(){}
var CarWithACAndPowerLocks = function(){}
var CarWithACAndPowerWindows = function(){}
var CarWithACAndPowerLocksAndPowerWindows = function(){}


///////////////////////
var Car = function(){
	console.log('assemble');
}

Car.prototype = {
	start:function(){
		console.log('start');
	},
	drive:function(){
		console.log('run');
	},
	getPrice:function(){
		return 11000.00;
	}
}



var CarDecorator = function(car){
	this.car =car;
}

CarDecorator.prototype = {
	start:function(){
		this.car.start();
	},
	drive:function(){
		this.car.drive();
	},
	getPrice:function(){
		return this.car.getPrice();
	}
}


var PowerLocksDecorator = function(car) {
	CarDecorator.call(this,car);
	console.log('1');
}
PwoerLocksDecorator.prototype = new CarDecorator();
PowerLocksDecorator.prototype.drive = function(){
	this.car.drive();
	console.log('lock');
}

var PowerWindowsDecorator = function(car){
	CarDecorator.call(this,car);
	console.log('ass');
}
PowerWindowsDecorator.prototype = new CarDecorator();
var ACDecorator = function(car) {
	CarDecorator.call(this,car);
	console.log('ass');
}
ACDecorator.prototype = new CarDecorator();
ACDecorator.prototype.start = function(){
	this.car.start();
	console.log('start');
}

var car = new Car();

car = new PowerWindowDecorator(car);
car = new PowerLocksDecorator(car);
car = new ACDecorator(car);
car.start();
car.drive();

