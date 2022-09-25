// immediately invoked function expression
// the function which is in group operator("()") is not a declare of function. it is function literal

console.log(
  ((a: number, b: number): number => {
    return a + b;
  })(10, 11)
);
console.log(
  (function foo(a: number, b: number) {
    return a * b;
  })(100, 120)
);

// foo(10,11) => error.
