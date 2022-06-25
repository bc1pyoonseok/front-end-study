import { readFile } from "fs"

const readOneFile = (path: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        readFile(path, (err, buffer) => {
            if (err) reject(err.toString())
            else resolve(buffer.toString())
        })
    })
}
const readThreeFiles = async () => {
    try {
        const file1 = await readOneFile('first1.txt')
        const file2 = await readOneFile('second.txt')
        const file3 = await readOneFile('third.txt')
        console.log(file1 + file2 + file3)
    }
    catch (err) {
        console.log(err)
    }
}
setTimeout(async () => readThreeFiles(), 1000)
