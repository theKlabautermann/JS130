"use strict";

function SumOfMultiples() {
  let factors = Array.from(arguments)
  for (let factor = 0; factor < factors.length; factor++) {
    this[factor] = factors[factor];
  }
}

SumOfMultiples.prototype.to = function(upperLimit) {
  let sum = [];
  for (let factor in this) {
    let currentFactor = this[factor];
    for (let multiple = currentFactor; multiple < upperLimit; multiple += currentFactor) {
      sum.push(multiple);
    }
  }
  return sum.filter((element, index, arr) => {
    for (let current = 0; current < index; current++) {
      if (arr[current] === element) return false;
    }
    return true;
  }).reduce((acc, num) => acc + num, 0);
}

SumOfMultiples.to = function(upperLimit) {
  return SumOfMultiples.prototype.to.call({default1: 3, default2: 5}, upperLimit);
}

module.exports = SumOfMultiples;