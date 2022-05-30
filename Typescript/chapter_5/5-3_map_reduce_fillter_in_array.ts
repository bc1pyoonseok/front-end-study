import { range } from "./range"

// zero to ten
let numbers: number[] = [...Array(10).keys()]

// start to end
type TRange = (start: number, end: number, step?: number) => number[]
const range2: TRange = (start: number, end: number, step?: number): number[] => {
    if (!step) step = 1
    return start < end ? [start, ...range2(start + step, end, step)] : []
}

console.log(range2(1, 10, 2), range2(2, 2), range2(2, 3, 2), range2(10, 3))

let result: number = numbers
    .filter((value: number): boolean => value % 2 == 0)
    .map((value: number): number => value ** 2)
    .reduce((accumulate: number, value: number): number => accumulate + value, 0)
console.log(result)

let sum = 0
for (let i: number = 0; i < 10; i++) {
    if (i % 2 == 0) {
        sum += i ** 2
    }
}
console.log(sum)

// filter
let oddNumbers: number[] = numbers.filter((value: number): boolean => value % 2 == 1)
console.log(oddNumbers)

// filter by index
let frontHalfNumbers: number[] = numbers
    .filter((_: number, index: number): boolean => index < Math.floor(numbers.length / 2))
console.log(frontHalfNumbers)

// map
let squareNumbers: number[] = range2(1, 20, 4)
    .map((value: number): number => value ** 2)
console.log(squareNumbers)

let stringNumbers1: string[] = range2(3, 20, 3)
    .map((value: number): string => JSON.stringify(value))

let stringNumbers2: string[] = range2(3, 20, 3)
    .map((value: number): string => `${value}`)

console.log(stringNumbers1)
console.log(stringNumbers2)

// reduce
let sum_result = squareNumbers
    .reduce((acc: number, value: number): number => acc + value, 0)
console.log(sum_result)
