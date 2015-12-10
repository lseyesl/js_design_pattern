var Singleton = {
	attr:1,
	another_attr:'value',
	method:function(){},
	another_method:function(){}
};

var Namespace = {
	Util:{
		util_method1:function(){},
		util_method2:function(){}
	},
	Ajax:{
		ajax_method:function(){}
	},
	some_method:function(){}
}

Namespace.homepage = {
	init:function(){},
	method1:function(){},
	method2:function(){}
}

Namespace.contactpage = {
	init:function(){},
	method1:function(){},
	method2:function(){}
}

Namespace.pageutil = {
	getPageName:function(){}
}


