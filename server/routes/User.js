const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// create a new user
router.post("/signup", async (req, res) => {
  try {
    let userExists = await User.findOne({
      email: req.body.email,
    });
    if (userExists) {
      res.status(422).json("Email already exists");
      return;
    }
    let user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    await user.save();

    let token = jwt.sign(
      {
        userId: user._id,
      },
      "abc123"
    );

    res.json({
      user,
      token,
    });
  } catch (error) {
    res.status(500).json("An error has occurred");
  }
});

//get one users stats

//post user stats

//put user stats

//delete user stats

module.exports = router;
