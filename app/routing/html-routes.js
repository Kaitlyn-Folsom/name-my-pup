var express = require("express");
var path = require("path");

module.exports = function(app) {

	//Route to Home page
	app.get("/", function(req, res) {
	    res.sendFile(path.join(__dirname, "../public/index.html"));
	});

	//Route to Survey page
	app.get("/dogs", function(req, res) {
	    res.sendFile(path.join(__dirname, "../public/dogs.html"));
	});

	//Route to Home page
	app.get("/namesList", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/namesList.html"));
	});

	//Route to Survey page
	app.get("/randomize", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/randomize.html"));
	});

};//End export
