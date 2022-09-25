type TS<T, S> = (a: T) => S;
const outter: TS<number, TS<number, number>> = (a: number) => {
  const inner: TS<number, number> = (x: number) => {
    return a * x;
  };
  return inner;
};
const test = outter(20);
console.log(test(100));
