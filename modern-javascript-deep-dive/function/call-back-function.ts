type TSX<A, B, C, D> = (a: A, b: B, c: C) => D;
type TtoS<T, S> = (t: T) => S;
const repeat: TSX<number, TtoS<string, void>, string, void> = (
  n: number,
  f: TtoS<string, void>,
  arg: string
): void => {
  for (let i = 0; i < n; i++) {
    f(arg);
  }
};
const callBack: TtoS<string, void> = (arg: string): void => {
  console.log(arg);
};

repeat(10, callBack, "callback");
// setTimeout
setTimeout((): void => console.log("callback is used in setTimeout"), 1000);

// map
console.log([1, 2, 3].map((x: number): number => 2 * x));
// fillter
console.log([1, 2, 3, 4].filter((x: number): boolean => x % 2 == 0));
// reduce
console.log(
  [1, 2, 3, 4, 5, 6].reduce((acc, cur) => acc + cur, 10),
  [1, 2, 3, 4, 5, 6].reduce((acc, cur) => acc * cur, 1),
  [1, 2, 3, 4, 5, 6].reduce((acc, cur) => acc * cur, 0)
);
