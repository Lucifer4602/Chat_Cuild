const mongodb = require("mongoose");

require("dotenv").config();

const db = () => {
  mongodb
    .connect(process.env.db)
    .then(console.log("this is working"))
    .catch((err) => {
      console.log(err);
    });
};

module.exports = db;
