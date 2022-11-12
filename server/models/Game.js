const { Schema, model } = require("mongoose");

let gameSchema = new Schema({
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

const Game = model("Game", gameSchema);

module.exports = Game;
