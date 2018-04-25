
var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body);
        res.json(bestFriendTest(req.body));
    })
};


function bestFriendTest(userProfile) {

    var compareResult = [];
    var totalDifference = 0;
    var bestFriend = {};
    for (var i = 0; i < friends.length; i++) {
        var compCalc = [];
        totalDifference = 0;
        for (var j = 0; j < 10; j++) {
            compCalc[j] = Math.abs(userProfile.scores[j] - friends[i].scores[j]);
            totalDifference += compCalc[j];
        }
        compareResult.push(totalDifference);
    };

    console.log(compareResult);
    console.log(Math.max(...compareResult));

    function findMax(result) {
        return result === Math.max(...compareResult);
    }


    return bestFriend = friends[compareResult.findIndex(findMax)];

};