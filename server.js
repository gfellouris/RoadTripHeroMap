var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
app.use(express.static("public"));
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing

// Middleware
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, function() {
  console.log("App listening on PORT http://localhost:" + PORT);
});
