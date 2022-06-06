import { readFile } from "fs"

// read one file
const readOneFile = (filename: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        readFile(filename, (err: Error, buffer: Buffer) => {
            if (err) reject(err)
            else resolve(buffer.toString())
        })
    })
}

// read all files in filenames
const readFiles = async (...filenames: string[]) => {
    const result = await Promise
        .all(filenames.map((filename) => readOneFile(filename)))
    return result
}

readFiles('first.txt', 'second.txt', 'third.txt')
    .then((results) => console.log(results))

console.log('hi')
const test = async () => {
    let value = await readFiles('first.txt', 'second.txt', 'third.txt')
    console.log(value)
}
test()
