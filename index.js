const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var data = { data: "None" };

app.get("/", (req, res) => {
  res.send(`Data on Database: ${JSON.stringify(data)}`);
});

app.post("/", (req, res) => {
  data = req.body;
  res.send(`Data Received: ${JSON.stringify(data)}`);
});

app.listen(process.env.PORT || 3000);
