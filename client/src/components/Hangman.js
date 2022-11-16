window.onload = function () {
    var alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];

var categories; // Array of Topics
var chosenCategory; // Selected Category
var getHint; // Word getHint
var word; // Selected word
var guess; // Geuss
var geusses = []; // Stored geusses
var lives; // Lives
var counter; // Count correct geusses
var space; // Number of spaces in word '-'
