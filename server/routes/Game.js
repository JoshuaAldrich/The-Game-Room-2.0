const router = require("express").Router();
const Game = require("../models/Game");

// get all game stats
router.get("/", async (req, res) => {
  const users = await User.find().populate("thoughts").populate("friends");
  res.json(users);
});

//get one game stats

//post game stats

//put game stats

//delete game stats
router.get("/registration", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("profile");
    return;
  }
  res.render("registration");
});

module.exports = router;
