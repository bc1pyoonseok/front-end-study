import { range, tap, pipe, add, curryN, or } from 'ramda'

console.log(range(10, 101))
tap((value) => console.log(value))(range(10, 101))

const array = range(1, 30).map(value => value ** 2)

array.shift()
console.log(array)

pipe(
    (array) => {
        array.push(1)
        return array
    },
    (array) => {
        array.push(1)
        return array
    },
    (array) => {
        array.shift()
        return array
    },
)(array)
console.log(array)
let a = add(1)
console.log(a(10), add(10, 11))
let c = curryN(3, (...numbers: number[]): number => numbers.reduce((sum, current) => sum + current, 0))
console.log(c(4, 2, 3))
console.log(c(4)(2)(11))

let originalArray = new Array(1, 2, 3, 4, 5)
const adder = (value: number): number => value + 1
originalArray = originalArray.map(adder)

const resultArray = pipe(
    (array) => { return array.map(add(100)) },
    (array) => { return array.filter((value: number) => value % 2) }
)(originalArray)
console.log(resultArray)
