type IntegerFunction = (x: number, y: number) => number;
// function literal
let addFunction: IntegerFunction = function (x: number, y: number): number {
  return x + y;
};
let lightCopy = addFunction;
console.log(addFunction === lightCopy);
let hardCopy = function (x: number, y: number): number {
  return x + y;
};
console.log(addFunction === hardCopy);
console.log(addFunction(1, 2));
addFunction = (x: number, y: number): number => {
  return x + y;
};
console.log(addFunction(3, 4));
console.log(new Function("x", "y", "return x+y")(5, 10));
// page 160
let a = (function (x: number, y: number): number {
  return x + y;
})(1, 2);
console.log(a);
