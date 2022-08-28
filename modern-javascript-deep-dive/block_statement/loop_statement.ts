const MAX = 3;
// for
for (let i = 0; i < MAX; i++) {
  console.log(i);
}
// while
let i = 0;
while (i < MAX) {
  console.log(i++);
}
// do - while
i = 0;
do {
  console.log(i++);
} while (i < MAX);

// break to outter
outter: for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    if (i * j >= 60) {
      console.log(`${i} X ${j} = ${i * j}`);
      break outter;
    }
  }
}
// continue moves top of the loop statement if it is executed
const count_not_capital = (str: string): number => {
  let answer = 0;
  const isCapital = (ch: string): boolean => {
    return /[A-Z]/.test(ch);
  };
  for (let ch of str) {
    if (isCapital(ch)) continue;
    answer++;
  }
  return answer;
};
console.log(count_not_capital("HiMyNameIsYoonSeok"));

let j = 0;
i = 0;
do {
  console.log(j);
  j++;
  if (j % 2 == 0) {
    continue;
  }
  console.log(i);
  i++;
} while (i < 2 * MAX);
