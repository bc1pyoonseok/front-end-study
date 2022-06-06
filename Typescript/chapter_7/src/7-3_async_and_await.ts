// two interesting feature about async function
// 1. you can use async fuction like normal function
// 2. you can use async fuction as Promise object

const Printer = async <T>(message: T) => {
    let value = await message
    console.log(value)
    value = await Promise.resolve(message)
    console.log(value)
    return value
}
Printer<string>('hi')
Printer<number>(10)

console.log(Printer<number>(20))

// first after second
Printer<string>('first')
    .then((message) => Printer<string>(`${message} second`))

const returnAfterTime = async<T>(message: T, time: number): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`resolved after ${time}ms\nmessage:${message}`)
        }, time)
    })
}
const returnAsync = async () => {
    return [1, 2, 3, 4] // this will be change into promise object
}
console.log(`result of async return is always promise ${returnAsync()}`)
const tester = async () => {
    let result1 = await returnAfterTime<number>(10, 2000)
    let result2 = await returnAsync()
    console.log(result1, result2)
}
tester()
returnAsync()
    .then((result) => console.log(`using than with async function ${result}`))
