var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var routes = require("./app/routing/htmlRoutes");
var apiRoutes = require("./app/routing/apiRoutes");


var app = express();
// var appAPI =express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/",routes);
app.use("/api",apiRoutes);

// appAPI.use("/api/friends",apiRoutes);


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});