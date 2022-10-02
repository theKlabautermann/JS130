"use strict";

function Octal(inputNum) {
  this.octalValue = inputNum;
}

Octal.prototype.toDecimal = function() {
  if (Number.isNaN(Number(this.octalValue))) return 0;
  let digits = this.octalValue.split("").map((digit) => Number(digit));
  if (digits.some((digit) => digit >= 8)) return 0;
  let length = digits.length;
  return digits.map((digit, index) => digit * (8 ** (length - index - 1)))
               .reduce((acc, num) => acc + num, 0);
}

module.exports = Octal;