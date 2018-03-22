var path = require("path");
var dogs = require("../data/dogs.js");
var express = require("express");

module.exports = function(app) {

  //Used to display a friends.js
  app.get("/api/dogs", function(req, res) {
    res.json(dogs);
  });

  //Calculates the best match
  app.post("/api/dogs", function(req, res) {
  var newFriend = req.body;
  console.log(newFriend);

  // if male
  // else if female
  // either

  //Loops through the users scores 
  for (var i = 0; i < newFriend.scores.length; i++) {
      if (newFriend.scores[i] == "1") {
          newFriend.scores[i] = 1;
      } else if (newFriend.scores[i] == "5") {
          newFriend.scores[i] = 5;
      } else {
          newFriend.scores[i] = parseInt(newFriend.scores[i]);
      }
  }

    var differencesArray = [];

    //Loop through friends in friends.js 
    for (var i = 0; i < friends.length; i++) {

        var comparedFriend = friends[i];
        var totalDifference = 0;

        //Loop through each of those friends scores
        for (var k = 0; k < comparedFriend.scores.length; k++) {
            var differenceOneScore = Math.abs(comparedFriend.scores[k] - newFriend.scores[k]);
            totalDifference += differenceOneScore;
        }
        differencesArray[i] = totalDifference;
    }

    var bestFriendNum = differencesArray[0];
    var bestFriendIndex = 0;

    for (var i = 1; i < differencesArray.length; i++) {
        if (differencesArray[i] < bestFriendNum) {
            bestFriendNum = differencesArray[i];
            bestFriendIndex = i;
        }
    }

    friends.push(newFriend);
    res.json(friends[bestFriendIndex]);
});

};
