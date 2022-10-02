function newStack() {
  let stack = [];

  return {
    push(newElement) {
      stack.push(newElement);
    },

    pop() {
      return stack.pop();
    },

    printStack() {
      stack.forEach(element => console.log(element));
    }
  };
}

let test1 = newStack();
test1.push("a");
test1.push("b");
test1.printStack();
console.log(test1.pop());
test1.printStack();

let test2 = newStack();
test2.push("a");

test1.printStack();
test2.printStack();