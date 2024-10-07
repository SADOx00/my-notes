const http = require("http");

function requestListener(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 404;

  res.write("HTTP/1.1 404 Not Found\n");
  res.end("Hello, world!");
}

const app = http.createServer(requestListener);

app.listen(3000);

console.log("Successfully started");
