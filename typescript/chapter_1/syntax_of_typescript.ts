// type annotation
let n: number = 1
// type inference
let m = 2
// interface
interface Person {
    name: string
    age?: number
}
const yoonseok: Person = { name: "yoonseok", }
console.log(yoonseok)
// tuple
// if every types of array element is same, it is array.
// if not, it is tuple
const numberArray: number[] = [1, 2, 3, 4] // array
const exampleTuple: [boolean, number, string] = [true, 3, 'yoonseok'] // tuple
// generic type
class MyContainer<T> {
    constructor(public value: T) { }
}
let numberContainer: MyContainer<number> = new MyContainer(1)
let stringContainer: MyContainer<string> = new MyContainer('yoonseok')

console.log(numberContainer)
console.log(stringContainer)