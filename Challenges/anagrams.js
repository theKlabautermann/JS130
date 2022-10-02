"use strict";

function Anagram(inputStr) {
  this.value = inputStr;
}

Anagram.prototype.match = function(inputArr) {
  let letterCount = countLetters(this.value);
  return inputArr.filter((candidate) => isAnagram(letterCount, candidate))
                 .filter((candidate) => candidate.toLowerCase() !== this.value.toLowerCase());
}

function countLetters(inputStr) {
  let count = {};
  for (let index = 0; index < inputStr.length; index++) {
    let currentLetter = inputStr[index];
    if (count[currentLetter]) {
      count[currentLetter.toLowerCase()] += 1;
    } else {
      count[currentLetter.toLowerCase()] = 1;
    }
  }

  return count;
}

function isAnagram(countObj, candidateStr) {
  let candidateCount = countLetters(candidateStr);
  for (let letter in countObj) {
    if (countObj[letter] !== candidateCount[letter]) return false;
  }
  for (let letter in candidateCount) {
    if (countObj[letter] !== candidateCount[letter]) return false;
  }
  return true;
}

module.exports = Anagram;