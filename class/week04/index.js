/* Project setup: For the server
1 - new project folder
2 - open an integrated terminal
3 - run these commands:
    npm init -y
    npm i express nodemon
    (optional) -> go into package.json and add "type": "module" to enable import from 
*/
 
// [Please enable only ONE of these] 
import express from "express"; // if you are using type: module
// const express = require("express"); // if using common JS (Default)
import logger from "./middleware/logger.js";
import auth from "./auth.js";
 
const app = express();
const PORT = process.env.PORT || 8000;

// This is application wide, so it runs everywhere
app.use(logger)
 
// middlelware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 
// routes
app.get("/", logger, (req, res) => { // using it in route, we can pass logger func here but this case, logger should have next() to run the next func
    // logger(req); write this line inside every func? No! use the app.use()
    res.send("Welcome to our server");
});

app.get("/about", (req, res) => {
    res.send("Welcome to the about page");
  });

app.get("/login", (req, res) => {
    res.send("We have received your request - Login");
});

app.post("/login", (req, res) => {
    res.send("We stole your information");
});

app.get("/fetchData", auth, (req, res) => {
    res.send("Hi Yeonu, here is your profile data");
});
 
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// All other routes should be above here
app.use("", (req, res) => {
  res.status(404).send("Page not found");
});