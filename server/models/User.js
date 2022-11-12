const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  //password length must be at least 6 char
  password: {
    type: String,
    required: true,
  },
});

module.exports = userSchema;
