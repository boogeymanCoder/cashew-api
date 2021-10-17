const express = require("express");
const app = express();

app.use(express.json());

var data = null;

app.get("/", (req, res) => {
  res.json(data);
});

app.post("/", (req, res) => {
  data = req.body;
  res.send(data);
});

app.listen(process.env.PORT || 3000);
