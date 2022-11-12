const mongoose = require("mongoose");

let gameSchema = new mongoose.Schema({
  id: {
    type: INTEGER,
    required: true,
    validate: {
      validator: (value) => {
        if (value.length >= 1 && value.length <= 280) {
          return true;
        } else {
          return false;
        }
      },
      message: "Please keep your message between 1 and 280 characters.",
    },
  },
  name: {
    type: String,
    required: true,
  },
  wins: {
    type: INTEGER,
    required: true,
    defaultValue: 0,
  },
  plays: {
    type: INTEGER,
    required: true,
    defaultValue: 0,
  },
});

module.exports = gameSchema;
