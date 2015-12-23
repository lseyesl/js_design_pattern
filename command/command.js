var EnableAlarm = function(alarm){
	this.alarm = alarm;
}
EnableAlarm.prototype.execute = function(){
	this.alarm.enable();
}
var DisableAlarm = function(alarm){
	this.alarm = alarm;
}
DisableAlarm.prototype.execute = function(){
	this.alarm.disable();
}

var ResetAlarm = function(){
	this.alarm = alarm;
}
RestAlarm.prototype.execute = function(){
	this.alarm.reset();
}

var SetAlarm = function(alarm){
	this.alarm = alarm;
}
SetAlarm.prototype.execute = function(){
	this.alarm.set();
}

var alarms = [],
    i = 0,
    len = alarms.length;

for(;i<len;i++){
	var enable_alarm = new EnableAlarm(alarms[i]),
	    disable_alarm = new DisableAlarm(alarms[i]),
            rest_alarm = new RestAlarm(alarms[i]),
            set_alarm = new SetAlarm(alarms[i]);
	
	new Button('enable',enable_alarm);
	new Button('disable',disable_alarm);
	new Button('reset',disable_alarm);
	new Button('set',set_alarm);
}



//////////////////////////////

var makeEnableCommand = function(alarm){
	return function(){
		alarm.enable();
	}
}

var makeDisableCommand = function(alarm){
	return function(){
		alarm.disable();
	}
}

var makeRestCommand = function(alarm){
	return function(){
		alarm.reset();
	}
}

var makeSetCommand = function(alarm){
	return function(){
		alarm.set();
	}
}
