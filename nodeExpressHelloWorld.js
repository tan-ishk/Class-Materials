const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/hello", function (req, res) {
  res.sendFile(path.join(__dirname, 'views/ChristmasPredicates.html'));
});

app.get("/IT", function (req, res) {
  res.sendFile(path.join(__dirname, 'views/HelloExpress.html'));
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

app.use(function(req, res, next){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found Any Resource');

});
