//For Register Page
const dashboardController = {
  index(req, res) {
    res.render("dashboard", {
      user: req.user,
    });
  },
};

module.exports = {
  dashboardController,
};
