"use strict";

let PerfectNumber = {
  classify: function(inputNum) {
    if (inputNum < 1) throw new Error;

    let divisors = [];
    for (let divisor = 1; divisor < inputNum; divisor++) {
      if (inputNum % divisor === 0) divisors.push(divisor);
    }

    let sum = divisors.reduce((acc, num) => acc + num, 0);
    if (sum === inputNum) {
      return "perfect";
    } else if (sum > inputNum) {
      return "abundant";
    } else {
      return "deficient";
    }
  }
}

module.exports = PerfectNumber;