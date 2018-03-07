
var orm = require("../config/orm.js");

var burgers = {
	all: function(cb) {
		orm.all("burgers", function(res){
			cb(res);
		});
	}

	
	update: function(id, cb) {
		orm.update("burgers", id, cb)
		
	}

	create: function(name, cb){
		orm.create("burgers", name, cb);
	}
	
}

module.exports = burger;