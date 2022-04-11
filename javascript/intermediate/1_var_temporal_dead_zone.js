// var is function-scoped
// let is block-scoped

if (true) {
  var name = "yoonseok";
}

console.log(name); // 'yoonseok'

function add(num1, num2) {
  var result = num1 + num2;
  return result;
}

// console.log(result) => ReferenceError
