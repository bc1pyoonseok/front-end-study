import { range } from "./range";
import { fillter, fold, map } from "./fold"
// what is the sum of from 1 to 100?

// imperative programming
let sum = 0
for (let i = 1; i < 101; i++) {
    sum += i
}

// declarative programming

let numbers = range(1, 100 + 1)
let result1 = fold(numbers, (a: number, b: number): number => a + b, 0)
console.log(result1)

// sum of odds
const isOdd = (value: number) => value % 2 != 0
let result2 = fold(
    fillter(numbers, isOdd),
    (a: number, b: number): number => a + b, 0)
console.log(result2)

let result3 = fold(
    map(numbers, (value) => value ** 2),
    (a: number, b: number): number => a + b, 0
)
console.log(result3)
