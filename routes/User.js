const router = require("express").Router();
const User = require("../models/User");

// get all user stats
router.get("/", async (req, res) => {
  const users = await User.find().populate("thoughts").populate("friends");
  res.json(users);
});

//get one users stats

//post user stats

//put user stats

//delete user stats

module.exports = router;
