// the operator who has effect on original variable is ++,--,=,delete
// @ts-ignore
let x = 3;
x = 4;
// reallocation
x++;
// same as x = x + 1. so reallocation
// @ts-ignore
const obj = {} as {
  [key: string]: number;
};
obj.haha = 10;
console.log(obj);
delete obj.haha;
console.log(obj);
