import { readFile } from "fs"

const readOneFile = (path: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        readFile(path, (err, buffer) => {
            if (err) reject(err.toString())
            resolve(buffer.toString())
        })
    })
}
const readThreeFiles = async () => {
    const file1 = await readOneFile('first.txt')
    const file2 = await readOneFile('second.txt')
    const file3 = await readOneFile('third.txt')
    console.log(file1 + file2 + file3)
}
setTimeout(async () => readThreeFiles(), 1000)
