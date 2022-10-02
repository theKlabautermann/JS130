function myBind(func, context) {
  let fixArg;
  [func, context, ...fixArg] = Array.from(arguments);
  let boundFunc = function() {
    return func.apply(context, [...fixArg, ...Array.from(arguments)]);
  };
  return boundFunc;
}

function add(first, second) {
  return first + second;
}

let addFive = add.bind(null, 5);
let addTen = myBind(add, null, 10);

console.log(addFive(3));  // 8
console.log(addFive(55)); // 60
console.log(addTen(3));   // 13
console.log(addTen(55));  // 65