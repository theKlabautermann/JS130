"use strict";

function RomanNumerals(inputNum) {
  this.value = inputNum;
}

RomanNumerals.prototype.toRoman = function() {
  const conversionTable = {
    0: ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    1: ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    2: ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    3: ["", "M", "MM", "MMM"]
  }

  let digits = String(this.value).split("");
  let length = digits.length;
  
  return digits.map((digit, position) => {
    return conversionTable[length - position - 1][digit];
  }).join("");
}

module.exports = RomanNumerals;