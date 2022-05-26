// callback function
type Callback = () => void
type wrapper = (f: Callback) => void
const fn: wrapper = (f: Callback): void => {
    f()
}
const f: Callback = () => console.log("yoonseok")
fn(f)

// nested function
type CB = (a: number) => void
type IAddAndMultiply = (numbers: number[], cb: CB) => void

const AddAndMultiply: IAddAndMultiply = (numbers: number[], cb: CB): void => {
    const sum = (numbers: number[]): number => numbers.reduce(
        (accumulator, current) => accumulator + current, 0)
    const multiply = (a: number, b: number): number => a * b
    let result = multiply(sum(numbers), 10)
    cb(result)
}
AddAndMultiply([1, 2, 3, 4], (num: number) => { console.log(num) })

// high-order function
const HighAdd = (num1: number): Function => (num2: number): number => num1 + num2
const tenAddFunction: Function = HighAdd(10)
console.log(tenAddFunction(2))

const multiplys: Function = (a: number) => (b: number) => (c: number) => a * b * c
console.log(multiplys(10)(11)(3))