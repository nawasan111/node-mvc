const express = require("express");
const session = require("express-session");
const app = express();
const dotenv = require("dotenv");
const passport = require("passport");
const { loginCheck } = require("./auth/passport");
loginCheck(passport);
dotenv.config();
const mongoose = require("mongoose");
const database = process.env.MONGO_URI;
mongoose
  .connect(database)
  .then(() => console.log("connect success"))
  .catch((err) => console.error(err));
app.use(
  session({
    secret: "oneboy",
    saveUninitialized: true,
    resave: true,
  })
);
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/", require("./routes/login"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server run at port", port);
});
