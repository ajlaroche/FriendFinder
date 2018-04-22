$(document).ready(function () {
    var userProfile = {};
    var answers = [];
    var compareResult = [];
    var totalDifference = 0;
    var bestFriend = {};

    $("#submitButton").on("click", function () {
        userProfile.name = $("#name").val().trim();
        userProfile.foto = $("#fotoLink").val().trim();
        for (var i = 0; i < 10; i++) {
            var question = "#answerOptions" + (i + 1);
            answers[i] = $(question).val();
            // console.log(question);
        }
        userProfile.scores = answers;
        console.log(userProfile);
        bestFriendTest();
    })


    var friends = [{
        name: "Al Bundy",
        foto: "http://www.kiwireport.com/29-facts-will-totally-surprise-married-children/",
        scores: [3, 2, 4, 2, 4, 2, 1, 5, 2, 5]
    },
    {
        name: "Jim Beam",
        foto: "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
        scores: [1, 2, 5, 1, 4, 3, 2, 3, 2, 1]
    },
    {
        name: "Bill",
        foto: "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
        scores: [2, 2, 3, 5, 2, 4, 5, 1, 4, 4]
    },
    {
        name: "Steve",
        foto: "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
        scores: [1, 5, 2, 5, 4, 3, 2, 1, 3, 3]
    },
    {
        name: "Molly Sue",
        foto: "www.google.com/images/cat.jpg",
        scores: [5, 5, 3, 1, 2, 4, 3, 1, 5, 5]
    },
    {
        name: "Peggy Bundy",
        foto: "http://marriedwithchildren.wikia.com/wiki/Peg_Bundy",
        scores: [3, 2, 4, 5, 1, 3, 5, 1, 3, 3]
    }
    ];

    function bestFriendTest() {
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

        
        bestFriend = friends[compareResult.findIndex(findMax)];

        console.log(bestFriend);
        $("#friendResult").text(bestFriend.name);
        $("#modalImage").attr("src",bestFriend.foto);
        $("#friendModal").modal();
                
    };
})