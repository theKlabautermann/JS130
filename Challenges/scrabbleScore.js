"use strict";

function Scrabble(word) {
  this.word = word;
}

Scrabble.score = function(inputStr) {
  if (inputStr === null) return 0;
  let score = 0;
  for (let index = 0; index < inputStr.length; index++) {
    let currentLetter = inputStr[index].toUpperCase();
    if (["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"].includes(currentLetter)) {
      score += 1;
    } else if (["D", "G"].includes(currentLetter)) {
      score += 2;
    } else if (["B", "C", "M", "P"].includes(currentLetter)) {
      score += 3;
    } else if (["F", "H", "V", "W", "Y"].includes(currentLetter)) {
      score += 4;
    } else if (["K"].includes(currentLetter)) {
      score += 5;
    } else if (["J", "X"].includes(currentLetter)) {
      score += 8;
    } else if (["Q", "Z"].includes(currentLetter)) {
      score += 10;
    }
  }
  return score;
}

Scrabble.prototype.score = function() {
  return Scrabble.score.call(null, this.word);
}

module.exports = Scrabble;