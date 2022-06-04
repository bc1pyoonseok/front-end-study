import { read, readFile } from "fs";

readFile('first.txt', (err: Error, buffer: Buffer) => {
    if (err) throw err
    const result: string = buffer.toString()
    console.log(result)
    readFile('second.txt', (err: Error, buffer: Buffer) => {
        if (err) throw err
        const result: string = buffer.toString()
        console.log(result)
        readFile('third.txt', (err: Error, buffer: Buffer) => {
            if (err) throw err
            const result: string = buffer.toString()
            console.log(result)
        })
    })
})
