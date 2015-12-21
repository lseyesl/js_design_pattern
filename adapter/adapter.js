var LoggerFactory = {
	getLogger:function(){
		return window.console;
	}
};

var logger = LoggerFactory.getLogger();
logger.log("something to log");

var AjaxLogger = {
	sendLog:function(){
		var data = this.urlEncode(arguments);
		jQuery.ajax({
			url:"http://example.com/log",
			data:data
		});
	},
	urlEncode:function(arg){
		return encodeData;
	}
};

var AjaxLoggerAdapter = {
	log:function(arg) {
		AjaxLogger.sendLog(arg);
	}
};

var LoggerFactory = {
	getLogger:function(){
		return AjaxLoggerAdapter;
	}
}
