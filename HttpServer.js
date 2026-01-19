'use strict';
var http = require("http");

console.log("Hello World1");
function onRequest(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
}

var server = http.createServer(onRequest);
server.listen(8888);
console.log("Hello World2");