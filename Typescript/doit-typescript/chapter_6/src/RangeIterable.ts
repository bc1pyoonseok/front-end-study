import { nextTick } from "process"
import { NamedExportBindings } from "typescript"

export class RangeIterable implements Iterable<number>{
    constructor(public start: number, public end: number) { }
    [Symbol.iterator](): Iterator<number> {
        const that = this
        let currentNum: number = this.start
        const End: number = this.end
        const iterator = {
            next() {
                // in here, this is iterator not Rangeiterables
                console.log(`this: ${Object.keys(this)}`)
                let value = currentNum < End ? currentNum++ : undefined
                let done: boolean = value == undefined
                return { value, done }
            }
        }
        console.log(iterator)
        return iterator
    }
}

let a = new RangeIterable(10, 22)
let iter = a[Symbol.iterator]()
while (true) {
    const { value, done } = iter.next()
    if (done) break
    console.log(value)
}
for (let i of new RangeIterable(0, 9)) {
    console.log(i)
}
