var express = require("express");
const env = require("dotenv");
env.config();

var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function(req, res) {
  res.send("hello world");
});

app.listen(process.env.PORT || 4000);
console.log("server running...");
