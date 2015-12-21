var CarList = function(){
	
}

CarList.prototype = {
	getCar:function(){

	},
	search:function(){

	},
	addCar:function(){

	}
}

var CarListProxy = function(){
	this.carList = new CarList();
}

CarListProxy.prototype = {
	getCar:function(){
		return this.carList.getCar();
	},
	search:function(){
		return this.carList.search();
	},
	addCar:function(){
		return this.carList.addCar();
	}
}

//////////////////////////////////

var CarListProxy = function(){
	this.carList = null;
}
CarListProxy.prototype = {
	_init:function(){
		if(!this.carList){
			this.carList = new CarList();
		}
	},
	getCar:function(){
		this._init();
		return this.carList.getCar();
	},
	search:function(){
		this._init();
		return this.carList.search();
	},
	addCar:function(){
		this._init();
		return this.carList.addCar();
	}
}


/////////////////////////////
var CarListProxy = function(){};
CarListProxy.prototype = {
	getCar:function(){
		ajax(url+args);
	},
	search:function(){
		ajax(url+args);
	},
	addCar:function(){
		ajax(url+args);
	}
}

//////////////////////////////
(function(){
	var CarList = ...;
	var CarListProxy = function(){
		this.carList = null;
		this.date = new Date();
	};
	CarListProxy.prototype = {
		_initIfTime:function(){
			if(this._isTime() && !this.carList){
				this.carList = new CarList();
				return true;
			}
			return false;
		},
		_isTime:function(){
			return this.data > plannedReleaseDate;
		},
		getCar:function(){
			return this._initIfTime() && this.carList.getCar();
		},
		search:function(){
			reuturn this._initIfTime() && this.carList.search();
		},
		addCar:function(){
			return this._initIfTime() && this.carList.addCar();
		}
	}
	window.CarListProxy = CarListProxy;
	window.CarList = CarListProxy;
})
