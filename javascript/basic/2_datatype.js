// string
const name = "Mike";
const message = "I'm a boy";
const message1 = `${name} is boy`;

console.log(message);
console.log(message1);

// number
const age = 30;
const PI = 3.14;

console.log(30/7);
console.log(parseInt(30/7));

// NaN
// if you're working on a number, you should take care of Nan
console.log(message/2);
console.log(NaN);

//Boolean
const a = name =='Mike';
const b = age < 10;

console.log(a);
console.log(b);

//null and undefined
let user;
console.log(user);
user = null;
console.log(user);

//typeof operator
console.log(typeof null); // this result is object but null is not a object
console.log(typeof undefined);

// concat between number and string is string
console.log('hi' + PI + "no");
