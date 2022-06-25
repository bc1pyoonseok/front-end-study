class MyIterable<T> implements Iterable<T> {
    constructor(public array: readonly T[]) { }
    [Symbol.iterator](): Iterator<T> {
        const arrayCopy = this.array
        const arrayLength = this.array.length
        let index = 0
        const iterator: Iterator<T> = {
            next(): { value: T, done: boolean } {
                const value = index < arrayLength ? arrayCopy[index++] : undefined
                const done = value == undefined
                return { value, done }
            }
        }
        return iterator
    }
}

for (let i of new MyIterable<string>(['hi', 'my', "name", "is", "yoonseok"])) {
    console.log(i)
}
for (let i of new MyIterable(['hi', 'my', "name", "is", "yoonseok", 27])) {
    console.log(i)
}
class thisTest {
    constructor(public hi) { }
    testing() {
        console.log(this)
        return {
            "haha": console.log(this),
            next() {
                return { "value": 1, "done": 12 }
            }
        }
    }
}
let a = new thisTest('wow')
console.log(a.testing())
