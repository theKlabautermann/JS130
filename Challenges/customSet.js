"use strict";

class CustomSet {
  constructor(inputArr = []) {
    this.elements = inputArr;
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  contains(needle) {
    return this.elements.includes(needle);
  }

  isSame(inputSet) {
    let callingElements = [...this.elements].sort((a, b) => a - b);
    let passedElements = [...inputSet.elements].sort((a, b) => a - b);

    if (callingElements.length !== passedElements.length) return false;
    for (let index = 0; index < callingElements.length; index++) {
      if (callingElements[index] !== passedElements[index]) return false;
    }

    return true;
  }

  intersection(inputSet) {
    let callingElements = [...this.elements];
    let passedElements = [...inputSet.elements];
    let intersectionSet = [];

    callingElements.forEach((currentElement) => {
      if (passedElements.includes(currentElement)) intersectionSet.push(currentElement);
    })

    return new CustomSet(intersectionSet);
  }

  isSubset(inputSet) {
    let callingElements = [...this.elements];
    let passedElements = [...inputSet.elements];

    for (let index = 0; index < callingElements.length; index++) {
      let currentElement = callingElements[index];
      if (!(passedElements.includes(currentElement))) return false;
    }

    return true;
  }

  isDisjoint(inputSet) {
    let callingElements = [...this.elements];
    let passedElements = [...inputSet.elements];
    let intersectionSet = [];

    callingElements.forEach((currentElement) => {
      if (passedElements.includes(currentElement)) intersectionSet.push(currentElement);
    })

    return intersectionSet.length === 0;
  }

  add(inputNum) {
    if (!this.elements.includes(inputNum)) this.elements.push(inputNum);
    return this;
  }

  difference(inputSet) {
    let callingElements = [...this.elements];
    let passedElements = [...inputSet.elements];
    let missingElements = [];

    callingElements.forEach((currentElement) => {
      if (!passedElements.includes(currentElement)) missingElements.push(currentElement);
    })

    return new CustomSet(missingElements)
  }

  union(inputSet) {
    let allElements = [...this.elements, ...inputSet.elements];
    let union = [];

    allElements.forEach((currentElement) => {
      if (!union.includes(currentElement)) union.push(currentElement);
    })

    return new CustomSet(union);
  }
}

let test1 = new CustomSet([1]);
let test2 = new CustomSet();
console.log(test1.isSubset(test2));

module.exports = CustomSet;