var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require("../data/friends");
// var apiRoutes = require("./apiRoutes");

var app = express();
var router = express.Router();

// router.use("/api/",apiRoutes);

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname,"..","/public/home.html"));
});

router.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname,"..","/public/survey.html"));
});

// router.get("/api/friends", function (req, res) {
//     return   res.json(friends);
//    });

module.exports = router;

