// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var dogs = require("./app/data/dogs.js");

var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("app/public"));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



require("./app/routing/html-routes.js")(app);
require("./app/routing/api-routes.js")(app);

//Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
