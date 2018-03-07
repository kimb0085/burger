var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "1234",
	database: "burgers_db"
});

connection.connect(function(err){
	if (err) {
		console.log("error connecting: " + err.stack);
		return;
	}
});

module.exports = connection;