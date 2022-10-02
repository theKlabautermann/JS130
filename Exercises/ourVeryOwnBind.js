function myBind(func, context) {
  let boundFunc = function() {
    return func.apply(context, Array.from(arguments));
  };
  return boundFunc;
}

let object = {
  a: 'hello',
  b: 'world',
  foo: function() {
    return this.a + ' ' + this.b;
  },
};

let bar = object.foo;
console.log(bar()); // "undefined undefined"

let baz = myBind(object.foo, object);
console.log(baz()); // "hello world"