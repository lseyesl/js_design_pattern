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
