// binary operator
console.log(5 + 2);
console.log(5 / 2);
console.log(5 % 2);

// unary operator
let value = 5;
console.log(value++);
console.log(++value);
console.log(+value);
// reverse sign
console.log(-value);

let result = 5;

let x = result++;

console.log(x, result);
x = ++result;
console.log(x, result);

let a = "1";
console.log(typeof +a);

let b = "1";
console.log(typeof -b);

// assignment operator
console.log((x = 10));
console.log((x += 10));

let name = "my name is ";
console.log((name += "yoonseok"));

let x1 = 1;
let y1 = 1;
let z1 = 1;

x1 = y1 = z1 = 10;
console.log(x1, y1, z1);
// comparison operator
// ===, !== is strict. so lets use this one
console.log(NaN === NaN);
console.log(NaN !== NaN);
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(1 + undefined));
// tenary operator
let yoonseok_age = 28;
let adult = yoonseok_age >= 20 ? true : false;
console.log(adult);
// logical operator
console.log("Cat" && "Dog");
console.log("Cat" || "Dog");
// typeof operator
// number, boolean, undefined, symbol, object, function
console.log(typeof []);
// pow operator
console.log(2 ** 2.5);
console.log(Math.pow(2, 2.5));

// optional chaining
const obj = { yoonseok: 27 };
console.log(obj?.yoonseok)
console.log(obj?.age)
console.log('yoonseok' in obj)

// delete operator
console.log(obj)
delete obj.yoonseok
console.log(obj)
