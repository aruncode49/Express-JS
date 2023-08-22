import express from "express";

const app = express();
const port = 3000;

// creating custom middleware => are just functions
const logger = (req, res, next) => {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  next();
};

// using custom middleware
app.use(logger);

// handle get request
app.get("/", (req, res) => {
  res.send("<h1>Hello mitron this is middleware class</h1>");
});

// listening the port
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
