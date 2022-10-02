"use strict";

class Robot {
  constructor() {
    this.value = generateRandomName();
  }

  name() {
    return this.value;
  }

  reset() {
    let oldName = this.value;
    this.value = generateRandomName();
    usedNames.splice(usedNames.findIndex((name) => name === oldName), 1);
  }
}

let usedNames = [];

function generateRandomName() {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let digits = "0123456789";
  let randomName;
  let invalidName = true;

  do {
    randomName = "";
    for (let index = 0; index < 2; index ++) {
      randomName += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    for (let index = 0; index < 3; index ++) {
      randomName += digits[Math.floor(Math.random() * digits.length)];
    }
    if (usedNames.includes(randomName)) {
      invalidName = true;
    } else {
      invalidName = false;
    }
  } while (invalidName);

  usedNames.push(randomName);
  return randomName;
}

module.exports = Robot;