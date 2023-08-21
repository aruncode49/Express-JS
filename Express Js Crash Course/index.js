const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Middleware Usage
// app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about/:name", (req, res) => {
  res.send(`<h1>This is about page of ${req.params.name}</h1>`);
});

app.get("/contact", (req, res) => {
  res.send("<h1>This is contact page</h1>");
});

app.get("/help", (req, res) => {
  res.send("<h1>This is help page</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
