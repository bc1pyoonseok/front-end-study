// pure function has to satisfy below conditions
// 1. in function, there is no i/o related code
// 2. parameter is not changed
// 3. return the value right away which is made in body of function
// 4. does not use global, static value
// 5. no asynchronous code
// 6. function is implemented by callback or no callback useage in body of function

// ex) of pure function
type Tpure = (num1: number, num2: number) => number
const pure: Tpure = (num1: number, num2: number): number => num1 + num2

// deepcopy
// its not a deepcopy..!
const arrays = [[1, 2, 3, 4], [1, 2, 3, 4]]
// const copiedArray:any[] = [...arrays]
// copiedArray.push(1)
// copiedArray[1].push(1)

// console.log(arrays, copiedArray)
const copiedArray = JSON.parse(JSON.stringify(arrays))
console.log(arrays, copiedArray)

// pure sort
type TSort = (array: number[]) => number[]
const Sort: TSort = (array: number[]): number[] => {
    const copiedArray = JSON.parse(JSON.stringify(array))
    return copiedArray.sort((num1: number, num2: number) => num1 - num2)
}
let unsortedArray = [9, 2, 11, 4, -1, 0, 0, 6, 222]
let result = Sort(unsortedArray)
console.log(unsortedArray, result)

// if you want to delete element in array use splice method.
// but this one modifies original array, so it is not used in pure function.

// so we use filter method instead.


type Tpuredelete = <T>(array: readonly T[], cb: (value: T, index?: number) => boolean) => T[]
const pureDelete: Tpuredelete = <T>(array: readonly T[], cb: (value: T, index?: number) => boolean): T[] => {
    return array.filter((value, index) => cb(value, index) == false)
}
const range = (start: number, end: number, step?: number): number[] => {
    if (step == undefined) {
        step = 1
    }
    return start < end ? [start, ...range(start + step, end)] : []
}
const numbers = range(1, 10)
console.log(numbers)
const isEven: (value: number) => boolean = (value: number): boolean => value % 2 == 0
console.log(pureDelete(numbers, isEven))
const printAll = (...value: number[]) => (
    console.log(value)
)
printAll(1, 2, 3, 4, 5)
const mergeArray = <T>(...array2d: readonly T[][]): T[] => {
    // deepcopy
    return JSON.parse(JSON.stringify(array2d))
}
result = mergeArray([1, 2, 3,], [])
console.log(result)
console.log(result[0])
