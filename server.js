var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var routes = require("./app/routing/htmlRoutes");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});