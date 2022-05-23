const num = 10;

let result = num.toString();
console.log(result);

result = num.toString(2);
console.log(result);

result = num.toString(16);
console.log(result);

console.log(parseInt(result, 16));

// Math
console.log(Math.PI);

// parseInt vs Number
let padding = "18.5%";
console.log(parseFloat(padding));
console.log(Number("18.5"));

const array = [1, 2, 3, 4, -2, 5];

// use spread operator to find max,min value of array
console.log(Math.max(...array));
console.log(Math.min(...array));

console.log(Math.abs(-10));

console.log(Math.pow(2, -3));

console.log(Math.sqrt(64));
