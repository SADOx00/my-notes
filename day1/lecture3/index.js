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
  } else if (req.url === "/create" && req.method === "POST") {
    fs.appendFile("blog.html", "deneme", (err) => {
      if (err) {
        console.log(err);
      } else {
        res.statusCode = 302;
        res.setHeader("location", "/");
        res.end();
      }
    });
  } else if (req.url === "/create") {
    fs.readFile("create.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
}

const app = http.createServer(requestListener);

app.listen(3000);

console.log("Successfully started");
