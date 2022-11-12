const mongoose = require("mongoose");

let gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  wins: {
    type: Number,
    required: true,
    default: 0,
  },
  plays: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = gameSchema;
