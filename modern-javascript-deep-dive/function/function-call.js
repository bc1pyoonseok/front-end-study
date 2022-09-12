// function calling is combined with indentifier and small brackets which is function calling operator
// name-of-function(arguments)
// function call does not check if number of argument is right.
function printer(a, b) {
  console.log(a, b);
  console.log(arguments);
}
// argument is 1 and undefined
printer(1);
// ignore if more argument is passed
let a = printer(1, 2, 3);
// if function returns nothing or if there is no return keywords than return value is undefined
console.log(a);
