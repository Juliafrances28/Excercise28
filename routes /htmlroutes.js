const path = require("path");
const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/excerises", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
