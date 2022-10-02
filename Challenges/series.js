"use strict";

function Series(inputStr) {
  this.value = inputStr;
};

Series.prototype.slices = function(limit) {
  if (limit > this.value.length) throw new Error;
  let result = [];

  for (let start = 0; start < this.value.length; start++) {
    for (let end = start + 1; end <= this.value.length; end++) {
      result.push(this.value.slice(start, end));
    }
  }
  console.log(result); 
  result = result.map((subStr) => subStr.split("").map((char) => Number(char)));
  return result.filter((slice) => slice.length === limit);
}

module.exports = Series;