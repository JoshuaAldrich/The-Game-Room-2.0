const router = require("express").Router();
const { User } = require("../models");
router.get("/registration", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("profile");
      return;
    }
    res.render("registration");
  });
  
  module.exports = router;