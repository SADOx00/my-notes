const http = require("http");
const fs = require("fs");

function requestListener(req, res) {
  if (req.url === "/") {
    fs.readFile("index.html", "utf8", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/blog") {
    fs.readFile("blogs.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
}

const app = http.createServer(requestListener);

app.listen(3000);

console.log("Successfully started");
