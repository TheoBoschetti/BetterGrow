const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { port, sequelize } = require("./conf");

//Config
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Test route
app.get("/", (req, res, next) => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
      return res.send("Trop génial !!!");
    })
    .catch(err => {
      console.error("Unable to connect to the database:", err);
      return res.send("Ca marche pas !!!");
    });
});

app.listen(port, err => {
  if (err) {
    throw new Error(`Error !`);
  } else {
    console.log(`Server is listening to ${port}`);
  }
});
