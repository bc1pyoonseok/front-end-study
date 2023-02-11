{
  const name = "yoonseok";
  console.log(name);
}
const name = "not yoonseok";
console.log(name);
if (name === "yoonseok") {
  console.log("hi yoonseok");
} else {
  console.log("who r u?");
}
const age = 28;

if (age <= 19) console.log("young!");
else if (30 > age && age > 19) console.log("20s");
else console.log("old");

const yoonseok = age > 30 ? "old" : "young";

console.log(yoonseok);

// loop statement
// 1. for
for (let i = 0; i < 5; i++) {
  console.log(i);
  if (i == 2) break;
}

let array = [1, 2, 3, 4, 5];
for (let i of array) {
  console.log(i);
  if (i == 3) break;
}

for (let i in { name: "yoonseok", age: 27 }) {
  if (i === "age") break;
  console.log(i);
}

// 2. while
let count = 0;
while (count++ < 10) {
  console.log("Im yoonseok");
  if (count == 3) break;
}

// 3. do while

const input_name = "yoonseok";
do {
  console.log(`input name is ${input_name}`);
} while (input_name === "no name");

// break only escape from for, while , do while and label statement

// label statement

foo: {
  console.log("executed?");
  break foo;
  console.log("breaked?");
}

outter: for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 10; j++) {
    if (i == 1 && j == 9) {
      console.log(`breaked at ${i}, ${j}`);
      break outter;
    }
    console.log(`executed ${i}, ${j}`);
  }
}

for (let i of [1, 2, 3, 4, 5]) {
  if (i % 2 === 0) continue;
  console.log(i);
}
