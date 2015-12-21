var Observable = function(){
	this.subscribers = [];
}

Observable.prototype = {
	subscribe:function(callback){
		this.subscribers.push(callback);
	},
	unsubscribe:function(callback){
		var i = 0,
		    len = this.subscribers.length;
		for(;i<len;i++){
			if(this.subscribers[i]===callback){
				this.subscribers.splice(i,1);
				return;
			}
		}
	},
	publish:function(data){
		var i = 0,
		    len = this.subscribers.length;
		for(;i<len;i++){
			this.subscribers[i](data);
		}
	}
}
var Observer = function(data){
	console.log(data);
}

observable = new Observer();
observable.subscribe(Observer);
observable.publish('~~~');

///////////////////////////////////
Observable = function(){
	this.status = "constructed";
}

Observable.prototype.getStatus = function(){
	return this.status;
}

Observer.prototype = {
	subscribeTo:function(observable){
		this.subscriptions.push(observable);
	},
	unsubscribeFrom:function(observable){
		var i =0,
		    len = this.subscriptions.length;
		for(;i<len;i++){
			if(this.subscriptions[i]===observable){
				this.subscriptions.splice(i,1);
			}
		}
	},
	doSomethingIfOk:function(){
		var i = 0,
		    len = this.subscriptions.length;
		for(;i<len;i++){
			if(this.subscriptions[i].getStatus()==='ok'){
				//
			}
		}
	}
}

var observer = new Observer(), 
    observable = new Observable();
observer.subscribeTo(observable);
observer.doSomethingIfOk();
observable.status = 'ok';
observer.doSomethingIfOk();
