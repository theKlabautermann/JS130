"use strict";

function diamond(inputLetter) {
  let firstPadding;
  let result = [];
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  firstPadding = alphabetPosition(inputLetter);
  result.push(`${" ".repeat(firstPadding)}A${" ".repeat(firstPadding)}`);

  for (let index = 0; alphabet[index] < inputLetter; index++) {
    let currentChar = alphabet[index + 1];
    let currentPadding = firstPadding - alphabetPosition(currentChar);
    let currentWidth = 1 + ((alphabetPosition(currentChar) - 1) * 2);
    result.push(returnLine(currentChar, currentPadding, currentWidth));
  }

  for (let index = result.length - 2; index >= 0; index--) {
    result.push(result[index]);
  }

  return`${result.join("\n")}\n`;
}

function returnLine(char, padding, width) {
  return `${" ".repeat(padding)}${char}${" ".repeat(width)}${char}${" ".repeat(padding)}`;
}

function alphabetPosition(letter) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let index = 0;

  while(alphabet[index] <= letter) {
    index++;
  }

  return index - 1;
}