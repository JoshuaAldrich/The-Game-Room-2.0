const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
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
  wins: [
    {
      type: Schema.Types.ObjectId,
      ref: "Game",
    },
  ],
});

const User = model("User", userSchema);

module.exports = User;
