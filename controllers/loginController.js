const passport = require("passport");

const loginController = {
  index(req, res) {
    res.render("login", {});
  },
  create(req, res) {
    const { email, password } = req.body;
    //Required
    if (!email || !password) {
      console.log("Please fill in all the fields");
      res.render("login", {
        email,
        password,
      });
    } else {
      passport.authenticate("local", {
        successRedirect: "/dashboard",
        failureRedirect: "/login",
        failureFlash: true,
      })(req, res);
    }
  },
};
module.exports = loginController;
