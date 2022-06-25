import { readFile } from "fs"

const readFileByPromise = (path: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        readFile(path, (err: Error, buffer: Buffer) => {
            if (err) reject(err)
            else resolve(buffer.toString())
        })
    })
}
type errorFunction = (err: Error) => void

const errorCatch: errorFunction =
    (err: Error): void => { console.log(`failed to read file: ${err}`) }

readFileByPromise('first.txt').then((result) => {
    console.log(result)
    return readFileByPromise('second.txt').then((result) => {
        console.log(result)
        return readFileByPromise('nonefile').then((result) => {
            console.log(result)
        }).catch(errorCatch)
    }).catch(errorCatch)
}).catch(errorCatch)

const readFiles = async (...paths: string[]) => {
    const results: string[] = new Array(paths.length).fill("empty")
    for (let i = 0; i < paths.length; i++) {
        try {
            results[i] = await readFileByPromise(paths[i])
        }
        catch {
            results[i] = `failed to read ${paths[i]}`
            console.log(`error while reading ${paths[i]}`)
        }
    }
    console.log(results)
}

readFiles('first.txt', 'second.txt', 'third.txt', 'none.txt')

const promise = <T>(value: T): Promise<T> => {
    return new Promise<T>((resolve, reject) => {
        resolve(value)
    })
}
promise<string>('yoonseok').then((result) => {
    console.log(result)
    return promise<number>(2)
}).then((result: number) => promise<number>(result))
    .then((result: number) =>
        `you can use then keyword with just retured value`)
    .then((result: string) => console.log(result))
