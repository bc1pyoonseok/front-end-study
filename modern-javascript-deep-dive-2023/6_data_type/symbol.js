// symbol is immutable type
const key1 = Symbol("yoonseok");
const key3 = key1;

const key2 = Symbol("yoonseok");

const obj = { [key1]: "nice" };
console.log(obj[key1]);
// undefined
// symbol is unique value
console.log(obj[key2]);

console.log(key1 === key2);
console.log(key1 === key3);
