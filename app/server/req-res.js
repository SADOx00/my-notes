const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Success" }); //NOTE -  Burada ana dizin ne returnn edecek onu söyle
});

app.get("/name", (req, res) => {
  res.status(200).json({ message: "Sado" });
});

app.get("/search", (req, res) => {
  const query = req.query.q; // NOTE -  kardeş  query ?q=değere eşit
  res.send(`Arama Terimi: ${query}`);
});

app.post("/name/:nm", (req, res) => {
  const name = req.params.nm; // NOTE üstekini aynı mantık

  //NOTE -  burada kayıt işlemlerini yapabilirsiin
  res.send(`Arama Terzxsimi: ${name}`);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});
