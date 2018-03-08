
var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();
//send static content from the public directory to the app
app.use(express.static("public"));
//parse app form urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//parse app/json
app.use(bodyParser.json());
//set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//import routes and enable acces for the server
var routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(PORT, function(){
	console.log("app now listening at localhost: " + PORT);
});