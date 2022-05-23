// computed property

let field = "age";
let month = "10";
let day = "26";

const user = {
  name: "yoonseok",
  [field]: 27,
  [month + day]: 1026,
};

console.log(user);

function User(name, age, nation) {
  this.name = name;
  this.age = age;
  this.nation = nation;
}

// Object.assign()
// const yoonseok = user; < this is shallow copy
// this is deepcopy
const yoonseok = Object.assign({}, user);
console.log(yoonseok);

const satoshi = new User("satohsi", "??", "japan");
const nakamoto = Object.assign({ bitcoin: "moon" }, yoonseok, satoshi);

console.log(nakamoto);
// Object.keys()
// it returns keys of object

console.log(Object.keys(nakamoto));

// Object.values()
// it returns values of object
console.log(Object.values(nakamoto));
// Object.entries()
// it zip the key and value and returns it as a array
console.log(Object.entries(nakamoto));
// Object.fromEntries()
// it returns object from zipped array
zipped_nakamoto = Object.entries(nakamoto);
console.log(
  JSON.stringify(nakamoto) ===
    JSON.stringify(Object.fromEntries(zipped_nakamoto))
);
// true
