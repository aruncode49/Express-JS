const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Use middleware for serving a static folder
app.use(express.static(path.join(__dirname, "static")));

// Using routes
app.use("/", require(path.join(__dirname, "routes/blog.js")));

// Listening the server on port 3000
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
