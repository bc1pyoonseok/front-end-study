import { readFileSync, readFile, read } from "fs";

console.log('read sync.txt by sync')
const buffer: Buffer = readFileSync('./sync.txt')
console.log(buffer.toString())

let value = ''
const asyncBuffer = readFile('./async.txt',
    (error: Error, buffer: Buffer) => {
        console.log('read async.txt by async')
        value = buffer.toString()
    }
)

setTimeout(() => { console.log(value) }, 1000)

const readFilePromise = (filename: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        readFile(filename, (error: Error, buffer: Buffer) => {
            if (error) {
                reject(error)
            }
            resolve(buffer.toString() + " promise")
        })
    })
}

const asyncReadFilePromise = async () => {
    const content = await readFilePromise('async.txt')
    console.log("plz wait")
    console.log(`async: ${content}`)
}

let a = asyncReadFilePromise()
console.log(`a: ${a}`)

const PromizeAge = (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (age > 15) {
            resolve(`you are ${age} years old!`)
        }
        reject(new Error(`you are too young`))
    })
}

const asynAge = async (age: number): Promise<string> => {
    const result = await PromizeAge(age)
    return result
}

setTimeout(async () => {
    const result = await asynAge(20)
    console.log(result)
}, 1000)
