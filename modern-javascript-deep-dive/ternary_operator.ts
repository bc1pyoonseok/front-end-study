const even: number = 2;
const isEven = (x: number): boolean => {
  return x % 2 === 0 ? true : false;
};
console.log(isEven(even));
console.log(isEven(even + 1));
