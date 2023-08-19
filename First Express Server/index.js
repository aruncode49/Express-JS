import express from "express";

// express() function is used to create an Express application.
const app = express();
const port = 3000;

// // Using Express Get Method we can request a resource from the server (anything)
// app.get("/", (req, res) => {
//   res.send("<h1>Hello World</h1>");
// });

// //-->  "/about" --> localhost:3000/about
// app.get("/about", (req, res) => {
//   res.send("<h1>This is the about page</h1>");
// });

// //-->  "/contact" --> localhost:3000/contact
// app.get("/contact", (req, res) => {
//   res.send("<h1>This is the contact page</h1><p>Contact Me: xxxxxxxx367");
// });

// // Listen method is used to access a local host server at any port of our computer
// app.listen(port, () => {
//   console.log(`Server Running on Port ${port}`);
// });

// Testing Postman Status Code's
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/register", (req, res) => {
  res.sendStatus(201);
});

app.put("/user/arun", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/arun", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/arun", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${3000}`);
});
