// unique Symbol
const a = Symbol();
const b = Symbol();

// false
console.log(a === b);
console.log(a == b);

const id = Symbol("id this is descriptsion");

const field = "name";
console.log(id);
const user = {
  [id]: 20163175,
  yoonseok: "good",
  [field]: "yoonseok",
};
console.log(user);
console.log(user[id]);
console.log(id.description);

// keys, values, entries skip Symbol.
console.log(Object.keys(user), Object.values(user), Object.entries(user));
// to see all keys use Reflect.ownKeys(user)
console.log(Reflect.ownKeys(user));
// global symbol

const id1 = Symbol.for("id");
const id2 = Symbol.for("id");

//get description
console.log(Symbol.keyFor(id1));

console.log(typeof id1);
console.log(id1 === id2);
