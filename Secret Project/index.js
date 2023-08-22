import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

// create app
const app = express();
const port = 3000;

// setting up the dirname
const __dirname = dirname(fileURLToPath(import.meta.url));

// parse the data from body parser
app.use(bodyParser.urlencoded({ extended: true }));

// creating home get request
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// handling  post request from secret file
app.post("/check", (req, res) => {
  const password = req.body.password;
  if (password === "ILoveProgramming") {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.redirect("/");
  }
});

// listening the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
