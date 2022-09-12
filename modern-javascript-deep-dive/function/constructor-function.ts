console.log(new Function("x", "y", "return x+y")(10, 10));
let constructor_function = new Function("x", "y", "return x+y");
console.log(constructor_function(10, 11));
type numberToNumberFunction = (a: number) => number;

// function closure
let get_add_function = function (constant: number): numberToNumberFunction {
  return function (a: number): number {
    return a + constant;
  };
};
console.log(get_add_function(10)(20));

// arrow function
type number_number_ToNumberFunction = (a: number, b: number) => number;
const addTwoNum: number_number_ToNumberFunction = (
  num1: number,
  num2: number
): number => num1 + num2;

console.log(addTwoNum(10, 20));
