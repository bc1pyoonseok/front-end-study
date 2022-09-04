// how to create object
// 1. object literal
type voidFunction = () => void;
interface Iperson {
  "0"?: string;
  name: string;
  age: number;
  "tech-stack": Array<string>;
  year_pass: voidFunction;
  bitcoin?: number;
  Eth?: string;
}
let shitcoin = "Eth";
let person: Iperson = {
  // if you use key which type is not string or Symbol, it changes into string automatically
  0: "bearrobotics",
  name: "yoonseok",
  age: 27,
  // '-' is not allowed in variable.
  // so you have to use "" to add it in property.
  "tech-stack": ["python", "docker", "c++", "c", "javascript", "typescript"],
  year_pass: function () {
    this.age++;
  },
  [shitcoin]: "Eth is shitcoin",
};
console.log(person, typeof person);
console.log(person["tech-stack"], person.name);
// if you try to access property that does not exists, it returns undefined.
let empty_object = {};
console.log(empty_object, typeof empty_object);
person.bitcoin = 1;
console.log(person);
// delete
// optional field delete
delete person.Eth;
// in javascript, if you delete non existing property, it ignores. but it is impossible in typescript.
// delete person.address;

// property short-hand
let real_sound_money = "bitcoin";
let x = 10;
let sound_money = { real_sound_money, x };
console.log(sound_money);
// computed property
interface Iobj {
  [key: string]: any;
}
let obj1: Iobj = {};
let default_name = "bip";
for (let i = 0; i < 5; i++) {
  // console.log(default_name + String(i));
  obj1[default_name + String(i)] = "bip_proposal";
}
console.log(obj1);
let i = 0;
let obj2: Iobj = {
  [default_name + String(i)]: default_name + String(i++),
  [default_name + String(i)]: default_name + String(i++),
  [default_name + String(i)]: default_name + String(i++),
  [default_name + String(i)]: default_name + String(i++),
  print() {
    console.log(this);
  },
};
obj2.print();
