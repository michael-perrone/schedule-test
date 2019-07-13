const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const myFunction = require("./config/db");

myFunction();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3001;

app.listen(3000, () => {
  console.log("here");
});
