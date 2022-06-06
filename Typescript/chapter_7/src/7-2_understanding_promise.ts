import { readFile } from "fs"

const promise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        resolve('yoonseok')
    })
}

const haha = async () => {
    const result = await promise()
    console.log(result)
}
haha()

const numberPromise = (number: number): Promise<number> => {
    return new Promise<number>((resolve, reject) => {
        if (number > 10) resolve(number)
        reject(new Error(`${number}`))
    })
}
promise().then((value) => console.log(value))
numberPromise(20).then((value) => {
    console.log('haha')
    return numberPromise(value)
})

const readFilePromise = (path: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        readFile(path, (err: Error, buffer: Buffer) => {
            if (err) reject(err)
            else resolve(buffer.toString())
        })
    })
}
readFilePromise('first.txt').then((result) => {
    console.log(result)
    return readFilePromise('second.txt')
}).then((result) => {
    console.log(result)
    return readFilePromise('null.txt')
}).then((result) => console.log(result))
    .catch((err: Error) => console.log(err))
    .finally(() => console.log('program finished'))

Promise.resolve(1)
    .then(value => console.log(value))
Promise.reject(new Error('error occurs'))
    .catch(value => console.log(value))

Promise.resolve(1)
    .then(() => Promise.resolve([1, 2, 3, 4]))
    .then((value) => value)
    .then((value) => console.log(`haha ${value}`))
const booleanArray: boolean[] = [true, false, true, false, false]
console.log(typeof true)
let a = booleanArray.every(value => typeof value == 'boolean')
console.log(a)
