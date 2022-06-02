import { rejects } from "assert";
import { readFileSync, readFile, read } from "fs";
import { resolve } from "path/posix";

let value = ''
const asyncBuffer = readFile('./async.txt',
    (error: Error, buffer: Buffer) => {
        console.log('read async.txt by async')
        console.log(buffer.toString())
        value = buffer.toString()
    }
)

console.log('read sync.txt by sync')
const buffer: Buffer = readFileSync('./sync.txt')
console.log(buffer.toString())

setTimeout(() => { console.log(value) }, 1000)

const readFilePromise = (filename: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        readFile(filename, (error: Error, buffer: Buffer) => {
            if (error) {
                reject(error)
            }
            else {
                resolve(buffer.toString()+" promise")
            }
        })
    })
}

const asyncReadFilePromise = async () => {
    const content = await readFilePromise('async.txt')
    console.log("plz wait")
    console.log(`async: ${content}`)
}
asyncReadFilePromise()