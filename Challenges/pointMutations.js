"use strict";

function DNA(inputStrand) {
  this.strand = inputStrand;
}

DNA.prototype.hammingDistance = function(compareStrand) {
  let counter = 0;
  let shorterLength = Math.min(this.strand.length, compareStrand.length);

  for (let index = 0; index < shorterLength; index++) {
    if (this.strand[index] !== compareStrand[index]) counter += 1;
  }

  return counter;
}

module.exports = DNA;