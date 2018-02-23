var http = require("http");
var tasks = require("./tasks.js");
http.createServer(function(request, response) {
    response.writeHead(200, { "Content-type": "text/plain" });
    response.write("Here's a random fact about me: "+ tasks[Math.floor((Math.random() * tasks.length-1) + 1)]);
    response.end();
}).listen(3000);