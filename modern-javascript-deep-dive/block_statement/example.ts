// block
{
  let a: number = 10;
}
// @ts-ignore
// if statement
let num: numebr = 10;
if (num > 1) {
  console.log(++num);
  console.log(sum(1, 2));
} else if (num == 0) {
  console.log("haha");
} else {
  console.log("nope");
}
// function declare statement
function sum(a: number, b: number): number {
  console.log("sum!");
  return a + b;
}
