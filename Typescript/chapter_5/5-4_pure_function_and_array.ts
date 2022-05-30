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
