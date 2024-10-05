const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" }); //NOTE - burada json göndereceğini soyledin

  const response = {
    message: "what's going on bro?",
    timestamp: new Date(),
  };
  res.end(JSON.stringify(response)); //NOTE -  response'u json stringify et öyle gönder anlaşıldı
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log("listening on port: " + PORT);
});
