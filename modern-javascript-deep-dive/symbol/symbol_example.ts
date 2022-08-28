let myName = Symbol("yoonseok");

interface Tage {
  [key: symbol]: number;
}
const age: Tage = {} as Tage;
age[myName] = 27;

console.log(age);
