// Promise.resolve
// Promise.resolve is class static method
// you can use this method by

// `Promise.resolve(value)` and get value with `then` keyword
Promise.resolve(true).then((result) => console.log(result))
interface person {
    name: string
    age: number
}
Promise.resolve(true)
    .then((result: boolean) => Promise.resolve("yoonseok"))
    .then((result: string) => [123, 123, 123])
    .then((result: number[]) => ({ name: 'yoonseok', age: 27 }))
    .then((result: person) => Promise.reject({ name: 'yoonseok', age: 27 }))
    .catch((err) => console.log(err))

// Promise.all
// similar with every() in array
const promiseList: Promise<any>[] = []
for (let i = 0; i < 10; i++) {
    promiseList.push(Promise.resolve(i))
}
console.log(promiseList)
Promise.all(promiseList).then((result) => console.log(result))
const resolveAll = async <T>(promiseList: Promise<T>[]) => {
    const results = await Promise.all(promiseList)
    console.log(`resolveAll: ${results}`)
}
resolveAll(promiseList)

// Promise.race
// similar with some
// in python, any
const resolveAfterTimeOut = (time: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`resolved after: ${time}`)
        }, time)
    })
}
const test = async (racePromise) => {
    let result = await Promise.race(racePromise)
    console.log(result)
}

const racePromise = [resolveAfterTimeOut(1000), resolveAfterTimeOut(1100), resolveAfterTimeOut(2000)]
test(racePromise)
