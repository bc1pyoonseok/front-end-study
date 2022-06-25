const f = <T>(x: T): string => `f(${x})`
const g = <T>(x: T): string => `g(${x})`
const h = <T>(x: T): string => `h(${x})`

// reduce practice
let a = new Array(1, 2, 3, 4, 5)
let result = a.reduce((sum, value) => sum + value, 0)
console.log(result)
type a<T> = (x: T) => string

const composeFunctions = <T>(...functions: readonly Function[]): (x: T) => string => {
    const composedFunction = (x: T) => {
        let string_x = `${x}`
        return functions.reduce((value, func) => func(value), string_x)
    }
    return composedFunction
}

const composefgh = composeFunctions<string>(f, g, h)
console.log(composefgh('x'))
// err
// console.log(composefgh(1))
// console.log(composefgh(true))
// case 2
console.log('case 2')
const composeFunctions2 = <T>(...functions: readonly Function[]): Function => {
    const composedFunction = (x: T) => {
        let string_x = `${x}`
        return functions.reduce((value, func) => func(value), string_x)
    }
    return composedFunction
}

const composefgh2 = composeFunctions2<string>(f, g, h)
console.log(composefgh2('x'))
console.log(composefgh2(1))
console.log(composefgh2(true))

const test = <T>(a: T): Function => {
    return (x: number): number => {
        console.log(`what?? ${x * x}`)
        return x * x
    }
}
let result2 = test<string>('ha')
console.log(result2('dw'))

// what?? NaN
// NaN
// this is because Function (any) => any is bigger than (number) => number
