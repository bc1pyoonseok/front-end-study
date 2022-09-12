interface IPerson {
  name: string;
  age: number;
}

const yoonseok: IPerson = {
  name: "yoonseok",
  age: 27,
};

type guessFunction = (num: number, str: string, person: IPerson) => void;
const guessTheResult: guessFunction = (
  num: number,
  str: string,
  person: IPerson
): void => {
  num++;
  str = person.name;
  person.name = "hamyoonseok";
  person.age++;
};
let number = 10;
let str = "haha";
guessTheResult(number, str, yoonseok);
console.log(number, str, yoonseok);
