const express = require("express");
const loginController = require("../controllers/loginController");
const registerController = require("../controllers/registerController");
const router = express.Router();
const { dashboardController } = require("../controllers/dashboardController");
const { protectRoute } = require("../auth/protect");

router.get("/register", registerController.index);
router.post("/register", registerController.create);
router.get("/login", loginController.index);
router.post("/login", loginController.create);
router.get("/dashboard", protectRoute, dashboardController.index);
router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
