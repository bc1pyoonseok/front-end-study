type numToVoid = (n: number) => void;
export type TtoS<T, S> = (a: T) => S;
const countDown: TtoS<number, void> = (n: number): void => {
  if (n === 0) {
    return;
  }
  console.log(n);
  countDown(n - 1);
};

countDown(10);
const factorial: TtoS<number, number> = (n: number): number => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(5))