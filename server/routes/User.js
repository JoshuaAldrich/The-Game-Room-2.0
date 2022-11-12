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

//sign in the user
router.post("/login", async (req, res) => {
  try {
    let user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (!user) {
      res.status(422).json("Wrong email or password");
      return;
    }

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

//get the currently logged in users
router.get("/currentUser", async (req, res) => {
  try {
    let token = req.get("Authorization");
    let tokenData = jwt.verify(token, "abc123");
    let user = await User.findOne({
      _id: tokenData.userId,
    });
    res.json(user);
  } catch (error) {
    res.status(500).json("An error has occurred");
  }
});

//put user stats

//delete user stats

module.exports = router;
