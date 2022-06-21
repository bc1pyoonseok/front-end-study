import { inc, range, pipe, map, add, apply } from 'ramda'

const value = 1
const newValue = inc(value)
console.log(newValue)
const arr = range(-4, 20 + 1)
console.log(
    pipe(
        (arr) =>
            arr.map((value: number): number => inc(value)),
        (arr) => arr.filter((value: number, index: number): boolean => index % 3 === 0)
    )(arr))

console.log(map(add(1))(arr))
console.log(map(Math.abs, arr))
console.log(apply(Math.max, arr))
// map(a)(b) == map(a, b)
console.log(
    pipe(
        map(add(1)),
        map(inc),
        apply(Math.max),
    )(arr)
)
