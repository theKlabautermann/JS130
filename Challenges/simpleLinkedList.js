"use strict";

class Element {
  constructor(inputNum, next = null) {
    this.value = inputNum;
    this.nextElement = next;
  }

  datum() {
    return this.value;
  }

  isTail() {
    return this.next() === null;
  }

  next() {
    return this.nextElement;
  }
}

class SimpleLinkedList {
  constructor() {
    this.list = [];
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.list.length === 0;
  }

  push(newElement) {
    this.list.push(new Element(newElement, this.head()));
  }

  peek() {
    if (this.list.length === 0) return null;
    let highestIndex = this.list.length - 1;
    return this.list[highestIndex].value;
  }

  head() {
    let highestIndex = this.list.length - 1;
    return this.list[highestIndex];
  }

  pop() {
    return this.list.pop().value;
  }

  toArray() {
    return this.list.map(element => element.value).reverse();
  }

  reverse() {
    let reversedList = this.toArray().reverse();
    return SimpleLinkedList.fromArray(reversedList);
  }

  static fromArray(inputArr) {
    let result = new SimpleLinkedList();
    if (inputArr === null) return result;
    inputArr.slice().reverse().forEach((num) => {
      result.push(num);
    })

    return result;
  }
}

module.exports = {
  Element,
  SimpleLinkedList,
};
