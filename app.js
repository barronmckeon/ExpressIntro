const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Barron Mckeon!");
});

app.get("/reallybigfish", (req, res) => {
  res.send("Call me Ishmael....");
});

app.get("*", (req, res) => {
  res.send(404, "Nothing to see here");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//ctrl-c to stop node process
