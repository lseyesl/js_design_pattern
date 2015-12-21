var CarFactory = {
	makeCar:function(features){
		var car = new Car();
		if(features && features.length){
			var i = 0,
			    l = features.length;
			for(; i<l; i++){
				var feature = features[i];
				switch(feature){
					case 'powerwindows':
						car = new PowerWindowsDecorator(car);
						break;
					case 'powerlocks':
						car = new PowerLocksDecorator(car);
						break;
					case 'ac':
						car = new ACDecorator(car);
						break;
				}
			}
		}
		return car;
	}
}

var myCar = CarFactory.makeCar(['powerwindows','ac']);
var myCar = CarFactory.makeCar();



/////////////////////


var CarFactory = {
	makeCar:function(features){
		var car = new Car(),
		    featureList = {
			powerwindows:0,
			powerLocks:0,
			ac:0
		    };
		if(features && features.length){
			var i = 0,
			    l = features.length;
			for(; i<l; i++){
				featureList[features[i]]=1;
			}
			if(featureList.powerwindows){
				car = new PowerWindowsDecorator(car);
			}
			if(featureList.powerlocks){
				car = new PowerLocksDecorator(car);
			}
			if(featureList.ac){
				ac = new ACDecorator(car);
			}
		}
		return car;
	}
}

var myCar = CarFactory.makeCar(['ac','ac','powerlocks','powerwindows','ac']);

//////////////////////////////////////
var CarController = {
	getCars:function(){
		var model = ModelFactory.getModel('cars');
		return model;
	},
	getCar:function(){
		var model = ModelFactory.getModel('car');
		return model;
	},
	createCar:function(){
		var model = ModelFactory.getModel('car');
		model.create();
		return model.getId();	
	},
	deleteCars:function(){
		var model = ModelFactory.getModel('cars');
		model.delete(carIds);
	}
}




///////////////////////////////
var CarShop = function(){};
CarShop.prototype = {
	sellCar:function(type,features){
		var car = this.manufactureCar(type,features);
		getMoney();
		return car;
	},
	decorateCar:function(car,features){
		
	},
	manufactureCar:function(type,features){
		throw new Error('error');
	}
}	

var JoeCarShop = function(){};
JoeCarShop.prototype = new CarShop();
JoeCarShop.prototype.manufactureCar = function(type,features){
	var car;
	switch(type){
		case 'sedan':
			car = new JoeSedanCar();
			break;
		case 'hatchback':
			car = new JoeHatchbackCar();
			break;
		case 'coupe':
		default:
			car = new JoeCoupeCar();
	}
	return this.decorateCar(car,features);
}

var ZimCarShop = function(){}
ZimCarShop.prototype = new CarShop();
ZimCarShop.prototype.manufactureCar = function(type,features){
	var car;
	switch(type){
		case 'sedan':
			car = new ZimSedanCar();
			break;
		case 'hatchback':
			car = new ZimHatchbackCar();
			break;
		case 'coupe':
		default:
			car = new ZimCoupeCar();
			break;
	}
	return this.decorateCar(car,features);
}

var shop = new JoeCarShop();
var car = shop.sellCar('sedan',['powerlocks']);

shop = new ZimCarShop();
car = shop.sellCar('sedan',['powerlocks']);
