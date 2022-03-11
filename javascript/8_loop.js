// for
const LoopAmount = 5;
console.log('for loop')
for (let i = 0; i < LoopAmount; i++) {
  console.log(i);
}
// while
console.log('while loop')
let i = 0
while (i < LoopAmount) {
  console.log(i++);
}
// do while
// do while loop execute code at least once
console.log('do while loop')
i = 6
do {
  console.log(i);
} while (i < LoopAmount);

// break
// continue
console.log('continue')
for (let i = 0; i < LoopAmount; i++) {
  if (i%2) {
    continue;
  }
  console.log(i);
}

i = 0;
console.log("break");
do {
  console.log(i++);
  if (i%2 === 0 && i%3 === 0) {
    console.log(`last one ${i}`);
    break;
  }
} while (true);
