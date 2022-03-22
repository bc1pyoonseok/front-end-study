hi();
const sayHello = function(){
  console.log('hi');
}
sayHello();

function hi() {
  console.log('this can call any where');
  // in javascript, initailize stage,
  // it gather all function declare and generate it
  // it is called hoisting.
}
const add = (num1, num2) => num1 + num2;
console.log(add(1,2));
const three_add = function(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(three_add(1,2,3));
