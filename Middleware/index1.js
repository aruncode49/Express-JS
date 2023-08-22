import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// modify dirname
const __dirname = dirname(fileURLToPath(import.meta.url));

// parse data from bodyParser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// first get request
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  const fruit1 = req.body.fruit1;
  const fruit2 = req.body.fruit2;
  res.send(`<h1>${fruit1}, ${fruit2}</h1>`);
});

// listening the port
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
