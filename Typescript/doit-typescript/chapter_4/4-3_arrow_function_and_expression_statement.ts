// arrow function
type IAdd = (a: number, b: number) => number
const Add: IAdd = (num1: number, num2: number): number => num1 + num2

console.log(Add(1, 2))
