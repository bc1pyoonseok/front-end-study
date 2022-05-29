const CallBack = (value: number) => { console.log(`this is value: ${value}`) }

const normal = (value: number, cb: (value: number) => void): number => {
    cb(value)
    return value
}
normal(20, CallBack)
// how to merge two array

const array1 = new Array(1, 2, 2, 3, 4, 5, 43)
const array2 = new Array('dad', 'dwad', 'dwed')
const mergedArray = ['start', ...array2, ...array1]
console.log(mergedArray)

export const range = (start: number, end: number): number[] => {
    return start < end ? [start, ...range(start + 1, end)] : []
}
console.log(range(1, 10))
