const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const myFunction = require("./config/db");
const router = express.Router();
myFunction();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/routes", require("./routes/index"));

const port = 3001;

app.listen(port, () => {
  console.log("here");
});
