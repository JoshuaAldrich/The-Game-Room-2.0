const router = require("express").Router();
const { User } = require("../../models");

router.post("/", (req, res) => {
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
      .then((userData) => {
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.username = userData.username;
          req.session.loggedIn = true;
          res.json(userData);
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  //login route will go here
  router.post("/registration", (req, res) => {
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((userData) => {
      if (!userData) {
        res.status(400).json({ message: "No user with that email address" });
        return;
      }
      const correctPassword = userData.verifyPassword(req.body.password);
  
      if (!correctPassword) {
        res.status(400).json({ message: "Wrong email or Password" });
        return;
      }
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.loggedIn = true;
        res.json({ user: userData, message: "You are logged in!" });
      });
    });
  });
  
  router.post("/logout", (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  