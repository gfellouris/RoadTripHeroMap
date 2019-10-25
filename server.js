var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
app.use(express.static("public"));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing

// Middleware
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, function() {
  console.log("App listening on PORT http://localhost:" + PORT);
});
