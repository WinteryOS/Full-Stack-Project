const cors = require("cors");
const express = require("express");

require("dotenv").config();

require("./helpers/db/mongodb.js")();

const port = process.env.PORT || 9000;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jsonwebtoken.verify(
      req.headers.authorization.split(" ")[1],
      "MovieReviews",
      (err, decode) => {
        if (err) req.user = undefined;
        req.user = decode;
        next();
      }
    );
  } else {
    req.user = undefined;
    next();
  }
});

app.set("view engine", "html");

app.use(express.static(__dirname + "/views/"));

app.use("/api", require("./routes/api"));

app.listen(port);
console.log(`Listening On http://localhost:${port}/api`);

module.exports = app;
