const mongoose = require("mongoose");

const myFunction = () => {
  mongoose.connect(
    "mongodb://Emily:Emily1@ds351107.mlab.com:51107/appointment",
    { useNewUrlParser: true },
    error => {
      if (error) {
        console.log(error);
      } else {
        console.log("we ggood");
      }
    }
  );
};

module.exports = myFunction;
