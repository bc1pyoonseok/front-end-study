// function
function add(a: number, b: number): number {
  return a + b;
}
// function literal
let c = function add(a: number, b: number): number {
  return a + b;
};
// if you use fuction literal, you can skip function name
let b = function (a: number, b: number): number {
  return a + b;
};
// these are also literal
(function add(a: number, b: number): number {
  return a + b;
})(4, 5);
(function (a: number, b: number): number {
  return a + b;
})(4, 5);

// function declare verses functuion literal.
// function declare already runned before runtime.

// function hoisiting is different from variable hoisiting.
