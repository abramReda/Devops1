var http = require("http");
var server = http.createServer(function (req, res) {
res.writeHead(200);
res.end("ibram reda sys 'Hello from the other side'! :)");
});
server.listen(3000);