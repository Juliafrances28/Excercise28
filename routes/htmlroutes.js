module.exports = function (app) {
  app.get("/excerises", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });

  app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
};
