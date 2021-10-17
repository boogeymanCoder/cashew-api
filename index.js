const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var data = "None";

app.get("/", (req, res) => {
  res.send(`Data on Database: ${data}`);
});

app.post("/", (req, res) => {
  data = req.body;
  res.send(`Data Received: ${data}`);
});

app.listen(process.env.PORT || 3000);
