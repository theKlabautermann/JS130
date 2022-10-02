function delegate(obj, method) {
  let fixArgs = [].slice.call(arguments, 2);
  return function() {
    return obj[method].apply(obj, fixArgs);
  };
}

// Alternative Solution that allows for arguments of the delegated invocation:
function delegate2(obj, method) {
  let fixArgs = [].slice.call(arguments, 2);
  return function() {
    return obj[method].apply(obj, [...fixArgs, ...arguments]);
  };
}

let foo = {
  name: 'test',
  bar: function(greeting, experiment) {
    console.log(greeting + ' ' + this.name);
    console.log(experiment);
  },
};

let baz = {
  qux: delegate2(foo, 'bar', 'hello'),
};

baz.qux("Bla");   // logs 'hello test';

foo.bar = function() {
  console.log('changed');
};

baz.qux();          // logs 'changed'