import { read } from "fs"

const f = <T>(x: T): string => `f(${x})`
const g = <T>(x: T): string => `g(${x})`
const h = <T>(x: T): string => `h(${x})`

// reduce practice
let a = new Array(1, 2, 3, 4, 5)
let result = a.reduce((sum, value) => sum + value, 0)
console.log(result)

const composeFunctions = <T>(...functions: readonly Function[]): Function => {
    const composedFunction = (x: T) => {
        return functions.reduce((value, func) => func(value), x)
    }
    return composedFunction
}

let composefgh = composeFunctions<string>(f, g, h)
console.log(composefgh('x'))
// ???? x를 string 으로 지정해 줬는데 왜 1이랑 true 문제없이 컴파일 되는 것인가
console.log(composefgh(1))
console.log(composefgh(true))
/*
result

h(g(f(x)))
h(g(f(1)))
h(g(f(true)))

*/
