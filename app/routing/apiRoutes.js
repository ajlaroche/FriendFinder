var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require("../data/friends");

var app = express();
var apiRouter = express.Router();

// console.log(friends);
apiRouter.get("/api/friends", function (req, res) {
 return   res.json(friends);
});

module.exports = apiRouter;