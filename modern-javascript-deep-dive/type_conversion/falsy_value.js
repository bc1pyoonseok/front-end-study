const arr = [false, undefined, null, 0, NaN, "", [], {}];
for (let i of arr) {
  if (i) {
    console.log(`[],{} is true!?!`);
  } else {
    console.log(`${i} is false`);
  }
  console.log(Boolean(i));
  console.log(!!i);
}

// convert type to string
// 1. use String()
console.log(typeof String(arr), typeof arr);
// 2.Object.prototype.toString()
console.log(typeof arr.toString(), typeof arr);
// 3. concat operator
// lets not use this one..
console.log(typeof (arr + ""), typeof arr);

// why this one result is object??
console.log(typeof {} + "", {} + "");

// convert to number
// 1. Number opertator
console.log(Number("-1"), Number("-10.53"), Number(true), Number([]));
// 2. parseInt, parseFloat (on;y string to number is available)
console.log(parseInt("-3"), parseFloat("-10.53"));
// 3. use + operator
console.log(+true, +false, +"-3.2", +[]);
// 4. use * operator
console.log(true * 1, false * 1, "-3.2" * 1, [] * 1);

// convert to boolean
// 1. use Boolean operator
// 2. use !!
console.log(Boolean(""));
console.log(!!"");
