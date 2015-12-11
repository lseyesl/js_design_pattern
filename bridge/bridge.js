var getXById = function(id,callback){
	
	$.ajax({
		url:'/getx?id='+id,
		success:callback
	})
}

var getXBridge = function(){
	var id = this.id;
	getXById(this.id,function(){
		console.log(response);
	})
}

$('#someElement').bind('click',getXBridge);


var RemoteControl = function(tv){
	this.tv = tv;
	this.on = function(){
		this.tv.on();
	};
	this.off = function(){
		this.tv.off();
	};
	this.setChannel = function(ch){
		this.tv.tuneChannel(ch);
	};
};

var PowerRemote = function(){
	this.tv =tv;
	this.currChannel = 0;
	this.setChannel = function(ch){
		this.currChannel = ch;
		this.tv.tuneChannel(ch);
	};
	this.nextChannel = function(){
		this.setChannel(this.currChannel+1);
	};
	this.prevChannel = function(){
		this.setChannel(this.currChannel -1);
	};
};

PowerRemote.prototype = new RemoteControl();

var SonyTV = function(){
	this.on = function(){
		console.log('Sony TV is on');
	};

	this.off = function(){
		console.log('Sony TV is off');
	};

	this.tuneChannel = function(){
		console.log('Sony TV tuned to channel '+ ch);
	};
};

var ToshibaTV = function(){
	this.on = function(){
		console.log('welcome to Toshiba entertainment');
	};

	this.off = function(){
		console.log('GoodBye Toshiba user');
	};

	this.tuneChannel = function(){
		console.log('Channel '+ ch + ' is set on your Toshiba television');
	};
};


var sony = new SonyTV(),
    toshiba = new ToshibaTV(),

