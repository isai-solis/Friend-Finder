var friendsArray = require("../data/friends");

module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friends", function(req, res) {

        console.log(friendsArray);
        
        var newUser = req.body;

        for (var i = 0; i < newUser.scores.length; i++) {
            newUser.scores[i] = parseInt(newUser.scores[i]); 
        }

        var lowScore = 0;
        var bestMatch = 0;

        for (var j = 0; j < friendsArray[0].scores.length; j++) {
            lowScore += Math.abs(newUser.scores[j] - friendsArray[0].scores[j]);
        }

        for (var i = 1; i < friendsArray.length; i++) {
            var sum = 0;
            for (var j = 0; j < friendsArray[i].scores.length; j++) {
                sum += Math.abs(newUser.scores[j] - friendsArray[i].scores[j]);
            } 

            if (sum < lowScore) {
                lowScore = sum;
                bestMatch = i;
            }
        } 

        friendsArray.push(newUser);

        res.send(friendsArray[bestMatch]);
    });

    app.post("/api/clear", function() {
        friendsArray = [];
    

        console.log(userData);
    });
};
