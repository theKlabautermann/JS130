"use strict";

class Triangle {
  constructor(side1, side2, side3) {
    if (!(side1 > 0 && side2 > 0 && side3 > 0) ||
       (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1)) {
      throw new Error();
    }
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  kind() {
    if (this.side1 === this.side2 && this.side2 === this.side3) {
      return "equilateral";
    } else if (this.side1 === this.side2 ||
               this.side2 === this.side3 ||
               this.side1 === this.side3) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }
}

module.exports = Triangle;